import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { Faculty } from '../models/faculty';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculty: Faculty;
  faculties: Faculty[];
  error: string;
  
   constructor(private facultySvc: FacultyService) {
     this.faculties = [];
     this.faculty = new Faculty(0,"","",0,"","",0,"");
   }

  ngOnInit() {
    this.getAllFaculties();
  }
  getAllFaculties()
  {
   this.facultySvc.getAllFaculties().
    subscribe(
      (data: any) => {
        console.log(data);
        this.faculties = data;
      },  // success path
      error => this.error = error // error path
    );
  }
  getFacultyById(){
    let id: number = this.faculty.facultyId;
    this.facultySvc.getFacultyById(id).
    subscribe(
      (data: any) => {
        console.log(data);
        this.faculty = data;
      }, //success path
      error => this.error = error //error path
    );
  }
  addFaculty()
  {
    this.facultySvc.addFaculty(this.faculty).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("New Faculty added.");
        this.getAllFaculties();
      },  // success path
      error => this.error = error // error path
    );
  }

  updateFaculty() {
    let id: number = this.faculty.facultyId;
    this.facultySvc.updateFaculty(id,this.faculty).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Faculty details are updated");
        this.getAllFaculties();
      },  // success path
      error => this.error = error // error path
    );
  }
  
  deleteFaculty() {
    let id: number = this.faculty.facultyId;
    this.facultySvc.deleteFaculty(id).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Faculty data deleted");
        this.getAllFaculties();
      },  // success path
      error => this.error = error // error path
    );
  }
  
}
