import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job';
import { JobService } from '../job.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  job: Job;
  jobs: Job[];
  error: string;
  
  constructor(private jobSvc: JobService) {
    this.job = new Job(0,"","","",0,0,"",new Date(),"","");
    this.jobs = [];
 }

  ngOnInit() {
    this.getAllJobs();
  }
  getAllJobs(){
    this.jobSvc.getAllJobs().
    subscribe(
      (data: any) => {
        console.log(data);
        this.jobs = data;
      }, //success path
      error => this.error = error //error path
    );
  }
  getJobById(){
    let id: number = this.job.jobId;
    this.jobSvc.getJobById(id).
    subscribe(
      (data: any) => {
        console.log(data);
        this.job = data;
      }, //success path
      error => this.error = error //error path
    );
  }
  addJob(){
    this.jobSvc.addJob(this.job).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("New Job added");
        this.getAllJobs();
      }, // success path
      error => this.error = error //error path
    );
  }
  updateJob(){
    let id: number = this.job.jobId;
    this.jobSvc.updateJob(id, this.job).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Job details are updated");
        this.getAllJobs();
      }, // success path
      error => this.error = error // error path
    );
  }
  deleteJob(){
    let id: number = this.job.jobId;
    this.jobSvc.deleteJob(id).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Job data deleted");
        this.getAllJobs();
      }, // success path
      error => this.error = error // error path
    );
  }
}
