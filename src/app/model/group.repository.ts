// import { Injectable } from '@angular/core';

// @Injectable()
// export class User {
//   public id?: string;
//   public user_id?: string;
//   public name?: string;
//   public email?: string;
//   public userGroups: Array<string> = [];
// }

// import { Injectable } from '@angular/core';

// export interface Group {
//   id?: string;
//   group_id?: string;
//   group_name?: string;
//   description?: string;
//   category?: string;
//   created_by?: string;
//   members?: Array<string>;
//   expenses?: Array<string>;
// }

import { Injectable } from '@angular/core';
import { RestDataSource } from './restDatasource';
import { User } from './user.model';
import { Group } from './group.model';
import { map, Observable } from 'rxjs';

// @Injectable()
// export class GroupRepositroy {
//   private usersData: User[] = [];
//   private groupsData: Group[] = [];
//   constructor(private res: RestDataSource) {
//     res.getUsers().subscribe((data) => {
//       this.usersData = data;
//     });
//     res.getGroups().subscribe((group) => {
//       this.groupsData = group;
//     });
//   }

//   getUserGroups(userId: string) {
//     let user = this.getUser(userId);

//     if (!user || !user.userGroups) {
//       return [];
//     }

//     return user.userGroups
//       .map((groupId) =>
//         this.groupsData.find((group) => group.group_id === groupId)
//       )
//       .filter((group): group is Group => group !== undefined);
//   }

//   getUser(userId: string) {
//     console.log('hi from function');
//     return this.usersData.find((userData) => userData.user_id == userId);
//   }

//   addGroup(group: Group) {
//     const lastGroup = this.groupsData[this.groupsData.length - 1];
//     const lastId = lastGroup ? parseInt(lastGroup.group_id || '100', 10) : 100;

//     group.group_id = (lastId + 1).toString();
//     group.id = group.group_id;

//     this.res.addGroup(group).subscribe((newGroup) => {
//       this.groupsData.push(newGroup); // Maintain ascending order
//       console.log('Updated groupsData:', this.groupsData); // ✅ Log here
//     });
//     return group.id;
//   }
//   getGroupUsersData(groupid: string) {
//     let group = this.getGroup(groupid);

//     if (!group || !group.members) {
//       return [];
//     }

//     return group.members
//       .map((userId) => this.usersData.find((user) => user.user_id === userId))
//       .filter((user): user is User => user !== undefined);
//   }

//   getGroup(groupId: string) {
//     return this.groupsData.find((groupData) => groupData.group_id == groupId);
//   }
// }
@Injectable()
export class GroupRepositroy {
  private usersData: User[] = [];
  private groupsData: Group[] = [];

  constructor(private res: RestDataSource) {
    res.getUsers().subscribe((data) => {
      this.usersData = data;
    });
    res.getGroups().subscribe((group) => {
      this.groupsData = group;
    });
  }

  getUserGroups(userId: string): Group[] {
    const user = this.getUser(userId);
    if (!user || !user.userGroups) return [];

    return user.userGroups
      .map((groupId) =>
        this.groupsData.find((group) => group.group_id === groupId)
      )
      .filter((group): group is Group => group !== undefined);
  }

  getUser(userId: string) {
    return this.usersData.find((userData) => userData.user_id == userId);
  }

  addGroup(group: Group): Observable<Group> {
    const lastGroup = this.groupsData[this.groupsData.length - 1];
    const lastId = lastGroup ? parseInt(lastGroup.group_id || '100', 10) : 100;

    group.group_id = (lastId + 1).toString();
    group.id = group.group_id;

    return this.res.addGroup(group).pipe(
      map((newGroup) => {
        this.groupsData.push(newGroup);
        return newGroup;
      })
    );
  }

  loadGroups(): Observable<Group[]> {
    return this.res.getGroups().pipe(
      map((groups) => {
        this.groupsData = groups;
        return groups;
      })
    );
  }

  getGroupUsersData(groupid: string): User[] {
    const group = this.getGroup(groupid);
    if (!group || !group.members) return [];

    return group.members
      .map((userId) => this.usersData.find((user) => user.user_id === userId))
      .filter((user): user is User => user !== undefined);
  }

  getGroup(groupId: string): Group | undefined {
    return this.groupsData.find((groupData) => groupData.group_id == groupId);
  }
}
