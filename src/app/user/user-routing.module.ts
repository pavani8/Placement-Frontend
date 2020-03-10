import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from '../auth/auth.guard';

const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],

        children: [
         // { path: '', component: UserComponent },
          { path: 'ViewProfile', component: ViewProfileComponent },
          { path: 'EditProfile', component: EditProfileComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
