import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userRegistration } from '../models/userregistration';
import { first } from 'rxjs/operators';
//import { AlertService } from '../alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  //registerForm: FormGroup;
  user: userRegistration;
  loading = false;
  submitted = false;
  @Input() userid: string;
  @Input() password: string;
  @Input() usertype: string;
  error: string;

  constructor( private router: Router,private registerSvc: RegisterService) {
      this.user = new userRegistration("","","");
   }

  ngOnInit() {
  }
onSubmit(){
    this.submitted = true;
    this.registerSvc.register(this.user).
    subscribe(
    (data: any) => {
        console.log(data);
        //this.alertSvc.success('Registration successful', true);
       // this.router.navigate(["user"]);
         alert("New Faculty added.");
         this.router.navigate(["user"]);
  },  // success path
   error => {
               // this.alertSvc.error(error);
                this.loading = false;
             });
}

}
