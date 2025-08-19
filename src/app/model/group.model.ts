import { Injectable } from '@angular/core';

@Injectable()
export class Group {
  public group_id?: string;
  public group_name?: string;
  public created_by?: string;
  public members?: Array<string>;
  public expenses?: Array<string>;
}
