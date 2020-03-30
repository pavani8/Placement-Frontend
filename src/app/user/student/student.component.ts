import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { DepartmentService } from '../../department.service';
import { Department } from '../../models/department';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student;
  students: Student[];
  dept: Department;
  depts: Department[];
  error: string;

  constructor(private studentSvc: StudentService, private deptSvc: DepartmentService) {
    this.students = [];
    this.student = new Student("","","",0,"",new Date(),"","","","",0,0,0,0,"","");
    this.depts = [];
    this.dept = new Department("");
   }

  ngOnInit() {
    this.getAllStudents();
    this.deptSvc.getAllDepartments().
    subscribe(
      (data: any[]) => {
        console.log(data);
        for(var i=0;i<data.length;i++){
          this.depts.push(data[i].departmentName);
      }
    }
    );
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
    let id: string = this.student.studentId;
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
    let id: string = this.student.studentId;
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
    let id: string = this.student.studentId;
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
