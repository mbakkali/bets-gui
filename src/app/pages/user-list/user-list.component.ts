import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Game} from '../games/game.model';
import {UserService} from './user.service';
import {User} from './user.model';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    ngOnInit() {
    }


    @ViewChild(MatSort, {static: true}) sort: MatSort;
    users: MatTableDataSource<User>;
    displayedColumns = ['username', 'roles','action'];
    input;

    constructor(private userService: UserService,
                private router: Router,
                private dialog: MatDialog,
                private notifications: MatSnackBar) {
        this.getUsers();
    }

    show(user){

    }


    getUsers() {
        this.users = null;
        this.userService.loadUsers().subscribe((users: User[]) => {
            this.users = new MatTableDataSource<User>(users);
            this.users.sort = this.sort;
        });
    }

    applyFilter(filterValue: string) {
        this.users.filter = filterValue.trim().toLowerCase();

        if (this.users.paginator) {
            this.users.paginator.firstPage();
        }
    }

    onDeleteUser(user: User) {
        this.userService.deleteUser(user.username).subscribe(() => {
            this.notifications.open('Utilisateur ' + user.username + ' supprimé', null, {duration: 2000,});
            this.getUsers();
        }, (error : HttpErrorResponse) => {
            this.notifications.open('Problème lors de la suppression de l\'utilisateur : + \n' + JSON.stringify(error.error), null, {duration: 4000,});
        });

    }

    public openNewGameDialog(user) {
        let dialogRef = this.dialog.open(UserListDialog, {
            data: user
        });

        dialogRef.afterClosed().subscribe(game => {
            if (game) {

            }
        });
    }

    public updatUser(user: User) {
        this.userService.updateUser(user).subscribe((modifiedGame: Game) => {
            console.log('Modifed game', modifiedGame);
            this.notifications.open('Match ' + modifiedGame.teamA + '/' + modifiedGame.teamB + ' modifié', null, {duration: 2000,});
            this.getUsers();
        });
    }

    public deleteUser(user: User) {
        this.userService.deleteUser(user.username).subscribe(() => {
            console.log('Modifed game', user);
            this.notifications.open('Match ' + user.password + '/' + user.roles + ' supprimé', null, {duration: 2000,});
            this.getUsers();
        });
    }

    public addUser() {

    }

  onShowPassword(element: User) {
    element.showPasssword = !element.showPasssword;
  }

    onSubmitBet() {
        alert("Pas encore développé")
    }
}


@Component({
    selector: 'user-list-dialog',
    templateUrl: 'user-list-dialog.html',
})
export class UserListDialog {

    public userForm: FormGroup;
    isLoading: boolean;

    constructor(public dialogRef: MatDialogRef<UserListDialog>,
                @Inject(MAT_DIALOG_DATA) public user: User,
                public fb: FormBuilder) {
        this.userForm = this.fb.group({
            username: null,
            password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
            role: [null, Validators.compose([Validators.required, Validators.minLength(3)])],

        });
    }

    ngOnInit() {
        if (this.user) {
            this.userForm.setValue({role : this.user.roles[0], username : this.user.username, password : null})
        } else {

        }
    }

    close(): void {
        this.dialogRef.close();
    }

    onSubmit(userFormRef: FormGroupDirective) {

        if (this.userForm.valid) {
            const data: User = {
                username: null,
                password: this.userForm.get('password').value,
                roles: [this.userForm.get('role').value],
            };


            if (data.username) {
                data.username = this.userForm.get('username').value;
            }
            this.user = data;

            userFormRef.resetForm();
            this.userForm.reset();
        }
    }

}