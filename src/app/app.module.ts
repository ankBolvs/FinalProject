import { GroupDetailComponent } from './view/groupDetails.component';
import { ShowGroupsComponent } from './view/showGroups.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ViewModule } from './view/view.module';
import { LoginComponent } from './view/login.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './environment/environment';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    ViewModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'details',
        component: GroupDetailComponent,
      },
      {
        path: 'group',
        component: ShowGroupsComponent,
      },
      {
        path: '**',
        redirectTo: '/login',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
