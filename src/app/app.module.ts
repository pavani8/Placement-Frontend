import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { FacultyComponent } from './faculty/faculty.component';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FacultyComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
