import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student;
  students: Student[];
  error: string;

  constructor(private studentSvc: StudentService) {
    this.students = [];
    this.student = new Student(0,"","",0,"",new Date(),"","");
   }

  ngOnInit() {
    this.getAllStudents();
  }
  getAllStudents(){
    this.studentSvc.getAllStudents().
    subscribe(
      (data: any) => {
        console.log(data);
        this.students = data;
      }, //success path
      error => this.error = error //error path
    );
  }
  getStudentById(){
    let id: number = this.student.studentId;
    this.studentSvc.getStudentById(id).
    subscribe(
      (data: any) => {
        console.log(data);
        this.student = data;
      }, //success path
      error => this.error = error //error path
    );
  }
  addStudent(){
    this.studentSvc.addStudent(this.student).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("New student added");
        this.getAllStudents();
      }, // success path
      error => this.error = error //error path
    );
  }
  updateStudent(){
    console.log("com");
    let id: number = this.student.studentId;
    this.studentSvc.updateStudent(id, this.student).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Student details are updated");
        this.getAllStudents();
      }, // success path
      error => this.error = error // error path
    );
  }
  deleteStudent(){
    let id: number = this.student.studentId;
    this.studentSvc.deleteStudent(id).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Student data deleted");
        this.getAllStudents();
      }, // success path
      error => this.error = error // error path
    );
  }
}
