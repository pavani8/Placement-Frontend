import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from '../auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
