import { Injectable } from '@angular/core';
import { RestDataSource } from './restDatasource';
import { User } from './user.model';
import { Group } from './group.model';
import { map, Observable } from 'rxjs';

@Injectable()
export class UserRepository {
  private usersData: User[] = [];
  private loaded = false;
  constructor(private res: RestDataSource) {}
  private user: User = new User();
  loadUsers() {
    this.loaded = true;
    this.res.getUsers().subscribe((users) => (this.usersData = users));
  }

  getUsers(): User[] {
    if (!this.loaded) {
      this.loadUsers();
    }

    return this.usersData;
  }
  // getUser(userId: string) {
  //   this.res.getUser(userId).subscribe({
  //     next: (result) => {
  //       this.user = result;
  //       // return this.user;
  //       console.log('User fetched ' + this.user.name);
  //     },
  //     error: (err) => {
  //       console.error('Failed to fetch user:', err);
  //     },
  //   });
  // }
  // getUser(userId: string) {
  //   console.log('id searched:' + userId);
  //   this.res.getUser(userId).subscribe({
  //     next: (result) => {
  //       if (result && result.length > 0) {
  //         this.user = result[0]; // Extract the first user
  //         //console.log('User fetched: ' + this.user.name);
  //       } else {
  //         console.warn('No user found with user_id:', userId);
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Failed to fetch user:', err);
  //     },
  //   });
  // }
  getUser(userId: string): Observable<User> {
    console.log('id searched:' + userId);
    return this.res.getUser(userId).pipe(
      map((result: any[]) => {
        if (result && result.length > 0) {
          return result[0]; // Return the first matching user
        } else {
          throw new Error('No user found with user_id: ' + userId);
        }
      })
    );
  }
  updateUser(user: User): Observable<any> {
    return this.res.updateUserByUserId(user);
  }
}
