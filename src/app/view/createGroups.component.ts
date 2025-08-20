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

@Component({
  selector: 'create-group',

  templateUrl: './createGroups.component.html',

  styleUrl: './createGroups.component.css',
})
export class CreateGroupComponent {
  constructor(private fb: FormBuilder, private groupRepo: GroupRepositroy) {}

  submittedForm: boolean = false;

  createGroup: any;

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

  submitGroup() {
    this.submittedForm = true;

    if (this.createGroup.valid) {
      // console.log(this.createGroup.value);
      // this.createGroup.value;
      const formValues = this.createGroup.value;
      //console.log('groupname is ' + formValues.group_name);
      const newGroup: Group = {
        group_name: formValues.group_name,
        description: formValues.description,
        category: formValues.category,
        created_by: 'currentUserId', // Replace with actual user ID logic
        members: [],
        expenses: [],
      };
      this.groupRepo.addGroup(newGroup);
    }
  }
}
