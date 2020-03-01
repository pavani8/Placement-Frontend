import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  dept: Department;
  depts: Department[];
  error: string;
  constructor(private deptSvc: DepartmentService) { 
    this.dept = new Department("");
    this.depts = [];
  }

  ngOnInit() {
    this.getAllDepartments();
  }
  getAllDepartments(){
    this.deptSvc.getAllDepartments().
    subscribe(
      (data: any) => {
        console.log(data);
        this.depts = data;
      }, // success path
      error => this.error = error //error path
    );
  }

}
