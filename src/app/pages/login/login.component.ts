import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {emailValidator} from '../../theme/utils/app-validators';
import {AppSettings} from '../../app.settings';
import {Settings} from '../../app.settings.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],

})
export class LoginComponent {
    public form: FormGroup;
    public settings: Settings;
    public invalidLogin: boolean;

    constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, public http: HttpClient, private authService: AuthenticationService) {
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'username': [null, Validators.compose([Validators.required])],
            'password': [null, Validators.compose([Validators.required])]
        });
    }

    public onSubmit(values: Object): void {
        if (this.form.valid) {
            this.login();
        }
    }

    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }

    ngOnInit() {
    }

    login() {
        this.isLogging = true;
        this.authService.authenticate(this.form.get('username').value, this.form.get('password').value).subscribe(data => {
            this.isLogging = false;
            this.succesLog = true;
            setTimeout(() => {
                if (data.username != null) {
                    this.router.navigate(['/games']);
                    this.invalidLogin = false;
                } else {
                    this.invalidLogin = true;
                }
                this.succesLog = false

            },500 );

            },
            error => {
                this.invalidLogin = true;
            });

    }

    isLogging : boolean;
    succesLog : boolean;
}