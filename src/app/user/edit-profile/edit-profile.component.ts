import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../../models/Student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
//import { FileUploadService } from '../../fileUpload.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  studform: FormGroup;
  currentUser:string;
  submitted = false;
  error: string;
  student: Student;
  Gender: string;
  students: Student[];
  constructor(private studentSvc: StudentService, private formBuilder: FormBuilder,) { 
    this.students = [];
    this.student = new Student("","","",0,"",new Date(),"","","","",0,0,0,0,"","")
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getStudentById();
    this.studform = this.formBuilder.group({
      studid: ['', [Validators.required,Validators.maxLength(6)]],
      studname:['',Validators.required],
      studemail:['',[Validators.required,Validators.email]],
      studcontno:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]],
      studgender:['',Validators.required],
      studdob:['',Validators.required],
      studdept:['',Validators.required],
      studtempaddr:['',Validators.required],
      studpermaddr:['',Validators.required],
      studbatch:['',Validators.required],
      studsscmarks:['',Validators.required],
      studintermarks:['',Validators.required],
      studdiplomamarks:['',Validators.required],
      studbtechmarks:['',Validators.required],
      studresume:['',Validators.required],
      studphoto:['',Validators.required],
    });
    }
    get f() { return this.studform.controls; }
    getStudentById() {
  
      this.studentSvc.getStudentById(this.currentUser).
      subscribe(
        (data: Student) => {
          console.log(data);
          this.student=data;
          this.error = "";
       },  // success path
        error => this.error = error // error path
     );
    }
    updateStudent() {
      this.submitted = true;
      if (this.studform.invalid) {
          return;
      }
      let studId: string = this.student.studentId;
      this.studentSvc.updateStudent(studId,this.student).
      subscribe(
        (data: any) => {
          alert("Details Updated Successfully...!");
       },  // success path
        error => this.error = error // error path
      );
    }
   /* handleFile(event, ) {
      if (event.target.files == undefined) {
        if (n == 0) {
          this.employeeDetails.Aadharfile = null;
        }
        else if (n == 1) {
          this.employeeDetails.Panfile = null;
        }
      }
      const files: FileList = event.target.files;
      if (files && files.length > 0) {
        // Don't allow file sizes over 1MB
        if (files[0].size < this.MAX_SIZE) {
          if (n == 0) {
            this.employeeDetails.Aadharfile = this.file_Svc.readAndUploadFile(files);
          }
          else if (n == 1) {
            this.employeeDetails.Panfile = this.file_Svc.readAndUploadFile(files);
          }
        }
        else {
          this.toastr.warning(" File: " +
            files[0].name
            + " is too large to upload.");
          // Clear the input
          event.srcElement.value = null;
        }
      }
    }*/
}
