import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupRepositroy } from '../model/group.repository';
import { User } from '../model/user.model';
import { Group } from '../model/group.model';

@Component({
  selector: 'show-Group',
  templateUrl: 'showGroups.component.html',
  styleUrl: 'showGroups.component.css',
})
export class ShowGroupsComponent {
  userName?: string;
  id: string;
  user?: User;
  //groups?: string[];
  constructor(
    private authService: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private groupRepo: GroupRepositroy
  ) {
    this.id = activeRoute.snapshot.params['id'];
    this.userName = activeRoute.snapshot.params['name'];

    // console.log('from constructor' + this.id);
    // this.groupRepo.getUserGroups(this.id);
    //   this.groupRepo.getUser(id).subscribe(() => {
    // const groups = this.groupRepo.getUserGroups('1');
    // console.log(groups);
    // });
  }

  get groups(): Group[] | undefined {
    return this.groupRepo.getUserGroups(this.id);
  }

  // ngOnInit() {
  //   this.user = this.groupRepo.getUserGroups(this.id);
  //   this.userName = this.user?.name;
  //   this.groups = this.user?.userGroups;
  //   console.log(this.groups);
  // }
  // ngOnInit() {
  //   //console.log('hi');
  //   console.log(this.groupRepo.getUserGroups(this.id));
  // }
  // ngOnInit(): void {
  //   this.loadUserGroups();
  // }

  // loadUserGroups(): void {
  //   this.groupRepo.getUserGroups(this.id).subscribe({
  //     next: (groupList) => {
  //       this.groups = groupList;
  //       console.log('User groups:', this.groups);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching user groups:', err);
  //     },
  //   });
  // }
}
