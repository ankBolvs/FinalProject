import { RestDataSource } from './restDatasource';
import { NgModule } from '@angular/core';

import { GroupRepositroy } from './group.repository';

@NgModule({
  providers: [GroupRepositroy, RestDataSource],
})
export class ModelModule {}
