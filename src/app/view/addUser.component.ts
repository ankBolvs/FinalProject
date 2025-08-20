import { Component } from '@angular/core';
import { GroupRepositroy } from '../model/group.repository';
import { UserRepository } from '../model/user.repository';
import { User } from '../model/user.model';

@Component({
  selector: 'addUsers',
  templateUrl: 'addUser.component.html',
})
export class AddUserComponent {
  searchEmail: string = '';
  members: User[] = []; // Full list of members
  filteredMembers: any[] = [];
  constructor(private userRepo: UserRepository) {
    this.members = this.userRepo.getUsers();

    this.filteredMembers = this.members;
  }

  filterMembers() {
    const term = this.searchEmail.toLowerCase();
    this.filteredMembers = this.members.filter((member) =>
      member.email?.toLowerCase().includes(term)
    );
  }
}
