import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { FacultyComponent } from './faculty/faculty.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [AdminDashboardComponent, AdminComponent, FacultyloginComponent, FacultyComponent]
})
export class AdminModule { }
