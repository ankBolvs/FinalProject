import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';

@Component({
  selector: 'show-Group',
  templateUrl: 'showGroups.component.html',
  styleUrl: 'showGroups.component.css',
})
export class ShowGroupsComponent implements OnInit {
  userName: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userName = this.authService.getDisplayName();
  }
}
