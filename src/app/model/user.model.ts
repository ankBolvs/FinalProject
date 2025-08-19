import { Injectable } from '@angular/core';

@Injectable()
export class User {
  public user_id?: string;
  public name?: string;
  public email?: string;
  public userGroups?: Array<string> = [];
}
