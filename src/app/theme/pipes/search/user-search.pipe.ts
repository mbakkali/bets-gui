import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.teamA && user.teamB) {
          return (user.teamA.search(searchText) !== -1) || (user.teamB.search(searchText) !== -1);
        }
        else{
          return user.username.search(searchText) !== -1;
        }
      });
    }
  }
}
