import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Game} from '../game.model';
import * as moment from 'moment';
import {Team} from './team.model';
import {europe} from './teams';


@Component({
    selector: 'app-user-dialog',
    templateUrl: './game-dialog.component.html',
    styleUrls: ['./game-dialog.component.scss']
})
export class GameDialogComponent implements OnInit {
    public gameForm: FormGroup;
    minDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDay() - 2
    );
    options: Team[] = europe;
    date : Date;
    time : string;
    isLoading: boolean;

    constructor(public dialogRef: MatDialogRef<GameDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public game: Game,
                public fb: FormBuilder) {
        this.gameForm = this.fb.group({
            id: null,
            teamA: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            teamB: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            oddA: [null, Validators.compose([Validators.required])],
            oddB: [null, Validators.compose([Validators.required])],
            oddN: [null, Validators.compose([])],
            date: [null, Validators.compose([Validators.required])],
            time: [null, Validators.compose([Validators.required])]

        });
    }

    ngOnInit() {
        if (this.game) {
            this.date = new Date(this.game.datetime);
            this.time = moment(this.game.datetime).format('HH:mm').toString();
            this.gameForm.patchValue({...this.game});
        }
        else {

        }
    }

    close(): void {
        this.dialogRef.close();
    }


    onSubmit(userFormRef: FormGroupDirective) {

        if (this.gameForm.valid) {
            let date: Date = this.gameForm.get('date').value;
            date.setHours(+this.gameForm.get('time').value.split(':')[0]);
            date.setMinutes(+this.gameForm.get('time').value.split(':')[1]);
            let datetime = moment(date).format('YYYY-MM-DDTHH:mm:00.000');

            const data: Game = {
                datetime: datetime,
                id: null,
                oddA: this.gameForm.get('oddA').value,
                oddB: this.gameForm.get('oddB').value,
                oddN: this.gameForm.get('oddN').value,
                teamA: this.gameForm.get('teamA').value,
                teamB: this.gameForm.get('teamB').value,
            };


            if (data.id) {
                data.id = this.gameForm.get('id').value;
            }
            this.game = data;

            userFormRef.resetForm();
            this.gameForm.reset();
        }
    }

}
