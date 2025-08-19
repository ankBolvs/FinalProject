import { GroupDetailComponent } from './groupDetails.component';
import { NgModule } from '@angular/core';
import { ShowGroupsComponent } from './showGroups.component';

@NgModule({
  imports: [],
  declarations: [ShowGroupsComponent, GroupDetailComponent],
  exports: [ShowGroupsComponent, GroupDetailComponent],
  providers: [],
})
export class ViewModule {}
