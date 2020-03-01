export class Faculty{
    facultyId: number;
    facultyName: string;
    facultyEmail: string;
    facultyContact: number;
    facultyGender: string;
    facultyExperience: number;
    facultyDept: string;
    facultyAddress: string;

    constructor(fId: number,fName: string,fEmail: string,fContact: number,fGender: string,fExperience: number,fDept: string,fAddress: string)
    {
        this.facultyId = fId;
        this.facultyName = fName;
        this.facultyEmail = fEmail;
        this.facultyContact = fContact;
        this.facultyGender = fGender;
        this.facultyExperience = fExperience;
        this.facultyDept = fDept;
        this.facultyAddress = fAddress;

    }
}