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
    });
    res.getGroups().subscribe((group) => {
      this.groupsData = group;
    });
  }

  getUserGroups(userId: string) {
    let user = this.getUser(userId);

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

  addGroup(group: Group) {
    // this.res.addGroup(group).subscribe();
    // Get the last group in ascending order
    // const lastGroup = this.groupsData[this.groupsData.length - 1];
    // const lastId = lastGroup ? parseInt(lastGroup.group_id || '100', 10) : 100;

    // // Assign new ID as +1
    // group.group_id = (lastId + 1).toString();

    // // Send to backend and update local data
    // this.res.addGroup(group).subscribe((newGroup) => {
    //   this.groupsData.push(newGroup); // Add to end to maintain ascending order
    // });
    const lastGroup = this.groupsData[this.groupsData.length - 1];
    const lastId = lastGroup ? parseInt(lastGroup.group_id || '100', 10) : 100;

    group.group_id = (lastId + 1).toString();

    this.res.addGroup(group).subscribe((newGroup) => {
      this.groupsData.push(newGroup); // Maintain ascending order
      console.log('Updated groupsData:', this.groupsData); // ✅ Log here
    });
  }
  getGroupUsersData(groupid: string) {
    let group = this.getGroup(groupid);

    if (!group || !group.members) {
      return [];
    }

    return group.members
      .map((userId) => this.usersData.find((user) => user.user_id === userId))
      .filter((user): user is User => user !== undefined);
  }

  getGroup(groupId: string) {
    return this.groupsData.find((groupData) => groupData.group_id == groupId);
  }
}
