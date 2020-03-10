import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company;
  companies: Company[];
  error: string;

  constructor(private companySvc: CompanyService) {
    this.companies = [];
    this.company = new Company(0,"","","",0);
   }

  ngOnInit() {
    this.getAllCompanies();
  }
  getAllCompanies(){
    this.companySvc.getAllCompanies().
    subscribe(
      (data: any) => {
        console.log(data);
        this.companies = data;
      }, //success path
      error => this.error = error //error path
    );
  }
  getCompanyById(){
    let id: number = this.company.companyId;
    this.companySvc.getCompanyById(id).
    subscribe(
      (data: any) => {
        console.log(data);
        this.company = data;
      }, //success path
      error => this.error = error //error path
    );
  }
  addCompany(){
    this.companySvc.addCompany(this.company).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("New company added");
        this.getAllCompanies();
      }, // success path
      error => this.error = error //error path
    );
  }
  updateCompany(){
    let id: number = this.company.companyId;
    this.companySvc.updateCompany(id, this.company).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Company details are updated");
        this.getAllCompanies();
      }, // success path
      error => this.error = error // error path
    );
  }
  deleteCompany(){
    let id: number = this.company.companyId;
    this.companySvc.deleteCompany(id).
    subscribe(
      (data: any) => {
        console.log(data);
        alert("Company data deleted");
        this.getAllCompanies();
      }, // success path
      error => this.error = error // error path
    );
  }
}
