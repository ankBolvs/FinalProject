import { Group } from './../model/group.model';
import { Component } from '@angular/core';
import { GroupRepositroy } from '../model/group.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'group-details',
  templateUrl: 'groupDetails.component.html',
  styleUrl: 'groupDetails.component.css',
})
export class GroupDetailComponent {
  group?: Group;
  groupId: any;
  groupMembersData?: User[];
  constructor(
    private groupRepo: GroupRepositroy,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.groupId = activeRoute.snapshot.params['id']; //this service works as a observable as it keeps checking the value in routerTree

    console.log(this.groupId);
  }

  get groupDetail(): Group | undefined {
    this.group = this.groupRepo.getGroup(this.groupId);
    return this.group;
  }

  get getGroupUsersData() {
    this.groupMembersData = this.groupRepo.getGroupUsersData(this.groupId);
    return this.groupMembersData;
  }
}
