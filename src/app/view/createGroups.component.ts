import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Group } from '../model/group.model';
import { GroupRepositroy } from '../model/group.repository';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserRepository } from '../model/user.repository';
import { User } from '../model/user.model';

@Component({
  selector: 'create-group',

  templateUrl: './createGroups.component.html',

  styleUrl: './createGroups.component.css',
})
export class CreateGroupComponent {
  constructor(
    private fb: FormBuilder,
    private groupRepo: GroupRepositroy,
    private router: Router,
    private userDetails: UserService,
    private userRepo: UserRepository
  ) {}

  submittedForm: boolean = false;
  private user: User = new User();
  createGroup: any;
  private newGroupId: string = '';

  ngOnInit() {
    this.createGroup = this.fb.group({
      group_name: new FormControl('', [
        Validators.required,

        Validators.minLength(3),

        Validators.maxLength(50),
      ]),

      description: new FormControl('', [
        Validators.required,

        Validators.minLength(4),

        Validators.maxLength(20),
      ]),

      category: new FormControl('', [
        Validators.required,

        Validators.minLength(3),

        Validators.maxLength(50),
      ]),
    });
  }

  // submitGroup() {
  //   this.submittedForm = true;

  //   if (this.createGroup.valid) {
  //     // console.log(this.createGroup.value);
  //     // this.createGroup.value;
  //     const formValues = this.createGroup.value;
  //     //console.log('groupname is ' + formValues.group_name);
  //     const newGroup: Group = {
  //       group_name: formValues.group_name,
  //       description: formValues.description,
  //       category: formValues.category,
  //       created_by: this.userDetails.getUserId(), // Replace with actual user ID logic
  //       members: [this.userDetails.getUserId()],
  //       expenses: [],
  //     };

  //     this.groupRepo.addGroup(newGroup);
  //     // console.log('user id:' + this.userDetails.getUserId());
  //     this.user = this.userRepo.getUser(this.userDetails.getUserId());
  //     console.log(this.user.name);
  //     // console.log(
  //     //   'user fetched by id ' + this.userDetails.getUserId() + this.user
  //     // );
  //     //this.router.navigateByUrl('/show-groups');
  //   }
  // }
  submitGroup() {
    this.submittedForm = true;

    if (this.createGroup.valid) {
      const formValues = this.createGroup.value;
      const userId = this.userDetails.getUserId();

      const newGroup: Group = {
        group_name: formValues.group_name,
        description: formValues.description,
        category: formValues.category,
        created_by: userId,
        members: [userId],
        expenses: [],
      };

      this.newGroupId = this.groupRepo.addGroup(newGroup);
      // this.userRepo.getUser(userId).subscribe({
      //   next: (user) => {
      //     this.user = user;
      //     this.user.userGroups?.push(this.newGroupId);

      //     console.log('User groups:', this.user.userGroups); // ✅ Now this works
      //     this.userRepo.updateUser(this.user).subscribe({
      //       next: () => {
      //         console.log('User updated successfully');
      //         // Optionally redirect or show success message
      //       },
      //       error: (err) => {
      //         console.error('Failed to update user:', err);
      //       },
      //     });

      //     // this.router.navigateByUrl('/show-groups');
      //   },
      //   error: (err) => {
      //     console.error('Error fetching user:', err);
      //   },
      // });
      this.userRepo.getUser(userId).subscribe({
        next: (user) => {
          user.userGroups.push(this.newGroupId); // Modify locally

          this.userRepo.updateUser(user).subscribe({
            next: () => {
              console.log('User updated successfully');
              this.router.navigateByUrl('/show-groups');
            },
            error: (err) => {
              console.error('Failed to update user:', err);
            },
          });
        },
        error: (err) => {
          console.error('Failed to fetch user:', err);
        },
      });
    }
  }
}
