import { RouterModule,Routes } from '@angular/router'; 
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/user/user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RegisterComponent } from './auth/register/register.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
     { path: '',    component: HomeComponent },
     { path: 'Register', component: RegisterComponent },
     { path: 'User', component: UserComponent },
     { path: 'Login', component: LoginComponent },
     { path: 'Admin', component: AdminComponent},
     {path: 'Company', component: CompanyComponent},
     {path: 'Home', component: HomeComponent}
   ];

export const ROUTING: ModuleWithProviders =RouterModule.forRoot(AppRoutes);