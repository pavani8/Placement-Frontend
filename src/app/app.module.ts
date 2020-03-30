import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { FacultyComponent } from './admin/faculty/faculty.component';
import { JobComponent } from './job/job.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ROUTING } from './app.routing';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { FacultyService } from './faculty.service';
import { JobService } from './job.service';
import { CompanyService } from './company.service';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
//mport { ViewProfileComponent } from './user/view-profile/view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    CompanyComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    //ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    AdminModule,
    UserModule,
    ReactiveFormsModule,
    ROUTING
  ],
  providers: [AuthGuard,AuthService,FacultyService,JobService,CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }