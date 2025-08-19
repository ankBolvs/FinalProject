import { Injectable } from '@angular/core';
import { RestDataSource } from './restDatasource';
import { User } from './user.model';
import { Group } from './group.model';

@Injectable()
export class GroupRepositroy {
  private usersData: User[] = [];
  private groupsData: Group[] = [];
  constructor(private res: RestDataSource) {
    res.getUsers().subscribe((data) => {
      this.usersData = data;
      // console.log('hi from constructor');
      // const userGroups = this.getUserGroups('1');
      // console.log(userGroups);
    });
    res.getGroups().subscribe((group) => {
      this.groupsData = group;
    });
  }

  getUserGroups(userId: string) {
    // let userGroups = this.res.getGroupsByUserId1(userId);
    // console.log(userGroups);
    // return userGroups;
    // console.log(userId);
    // console.log('hi from function'); // ← this runs *immediately*
    // let user = this.usersData.find((userData) => userData.user_id == userId);

    let user = this.getUser(userId);

    //  return user?.userGroups?.forEach((groupId) => {
    //   this.groupsData.find((group)=>{
    //     group.group_id==groupId;
    //   })
    // });
    // return this.groupsData.find((group) => {
    //   user?.userGroups?.forEach((groupId) => {
    //     group.group_id == groupId;
    //   });
    // });
    if (!user || !user.userGroups) {
      return [];
    }

    return user.userGroups
      .map((groupId) =>
        this.groupsData.find((group) => group.group_id === groupId)
      )
      .filter((group): group is Group => group !== undefined);
  }

  getUser(userId: string) {
    console.log('hi from function');
    return this.usersData.find((userData) => userData.user_id == userId);
  }
}
