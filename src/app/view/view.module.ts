import { RestDataSource } from './../model/restDatasource';
import { GroupDetailComponent } from './groupDetails.component';
import { NgModule } from '@angular/core';
import { ShowGroupsComponent } from './showGroups.component';
import { GroupRepositroy } from '../model/group.repository';
import { ModelModule } from '../model/model.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ModelModule, CommonModule],
  declarations: [ShowGroupsComponent, GroupDetailComponent],
  exports: [ShowGroupsComponent, GroupDetailComponent],
})
export class ViewModule {}
