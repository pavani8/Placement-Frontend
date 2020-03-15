import { RouterModule,Routes } from '@angular/router'; 
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
//import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/user/user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RegisterComponent } from './register/register.component';

export const AppRoutes: Routes = [
    // { path: '', component: AdminDashboardComponent },
     { path: '', component: RegisterComponent },
     { path: 'user', component: UserComponent }
    // { path: 'login', component: LoginComponent },
    // { path: 'admin', component: AdminComponent}
   ];

export const ROUTING: ModuleWithProviders =RouterModule.forRoot(AppRoutes);