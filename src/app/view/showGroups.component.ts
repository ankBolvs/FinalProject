// import { Component, OnChanges, OnInit } from '@angular/core';
// import { AuthService } from '../services/authService';
// import { ActivatedRoute, Router } from '@angular/router';
// import { GroupRepositroy } from '../model/group.repository';
// import { User } from '../model/user.model';
// import { Group } from '../model/group.model';
// import { UserService } from '../services/user.service';

// @Component({
//   selector: 'show-Group',
//   templateUrl: 'showGroups.component.html',
//   styleUrl: 'showGroups.component.css',
// })
// export class ShowGroupsComponent {
//   userName?: string | null;
//   id: string;
//   user?: User;
//   constructor(
//     private authService: AuthService,
//     private router: Router,
//     private activeRoute: ActivatedRoute,
//     private groupRepo: GroupRepositroy,
//     private userDetails: UserService
//   ) {
//     this.id = userDetails.getUserId();
//     this.userName = userDetails.getUserName();
//   }

//   get groups(): Group[] | undefined {
//     return this.groupRepo.getUserGroups(this.id);
//   }
// }
// @Component({
//   selector: 'show-Group',
//   templateUrl: 'showGroups.component.html',
//   styleUrl: 'showGroups.component.css',
// })
// export class ShowGroupsComponent implements OnInit {
//   userName?: string | null;
//   id: string;
//   user?: User;
//   userGroups: Group[] = [];

//   constructor(
//     private authService: AuthService,
//     private router: Router,
//     private activeRoute: ActivatedRoute,
//     private groupRepo: GroupRepositroy,
//     private userDetails: UserService
//   ) {
//     this.id = userDetails.getUserId();
//     this.userName = userDetails.getUserName();
//   }

//   ngOnInit(): void {
//     this.groupRepo.loadGroups(); // ✅ Ensure latest groups are loaded
//     this.userGroups = this.groupRepo.getUserGroups(this.id);
//   }

//   get groups(): Group[] {
//     return this.userGroups;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupRepositroy } from '../model/group.repository';
import { User } from '../model/user.model';
import { Group } from '../model/group.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'show-Group',
  templateUrl: 'showGroups.component.html',
  styleUrl: 'showGroups.component.css',
})
export class ShowGroupsComponent implements OnInit {
  userName?: string | null;
  id: string;
  userGroups: Group[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private groupRepo: GroupRepositroy,
    private userDetails: UserService
  ) {
    this.id = userDetails.getUserId();
    this.userName = userDetails.getUserName();
  }

  ngOnInit(): void {
    this.groupRepo.loadGroups().subscribe(() => {
      this.userGroups = this.groupRepo.getUserGroups(this.id);
    });
  }

  get groups(): Group[] {
    return this.userGroups;
  }
}
