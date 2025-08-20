import { Injectable } from '@angular/core';
import { RestDataSource } from './restDatasource';
import { User } from './user.model';
import { Group } from './group.model';

@Injectable()
export class UserRepository {
  private usersData: User[] = [];
  private loaded = false;
  constructor(private res: RestDataSource) {}

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
}
