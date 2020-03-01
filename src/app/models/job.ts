export class Job {
    jobId: number;
    jobProfile: string;
    jobSkills: string;
    jobDescription: string;
    jobEligibility: number;
    jobPackage: number;
    jobLocation: string;
    jobDate: Date;
    jobDept: string;
    jobType: string;
    constructor(jId:number,jProfile:string,jSkills:string,jDesc:string,jEligibility:number,jpackage:number,jLoc:string,jDate:Date,jDept:string,jType:string)
    {
        this.jobId = jId;
        this.jobProfile = jProfile;
        this.jobSkills = jSkills;
        this.jobDescription = jDesc;
        this.jobEligibility = jEligibility;
        this.jobPackage = jpackage;
        this.jobLocation = jLoc;
        this.jobDate = jDate;
        this.jobDept = jDept;
        this.jobType = jType;
    }
}