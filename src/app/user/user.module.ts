import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user/user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { StudentComponent } from './student/student.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserDashboardComponent, UserComponent, EditProfileComponent, ViewProfileComponent, StudentComponent, StudentloginComponent]
})
export class UserModule { }
