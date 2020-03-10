export class Faculty{
    facultyId: string;
    facultyName: string;
    facultyEmail: string;
    facultyContact: number;
    facultyGender: string;
    facultyDesignation: string;
    facultyExperience: number;
    facultyDept: string;
    facultyQualification: string

    constructor(fId: string,fName: string,fEmail: string,fContact: number,fGender: string,fDesignation: string,fExperience: number,fDept: string,fQualification: string)
    {
        this.facultyId = fId;
        this.facultyName = fName;
        this.facultyEmail = fEmail;
        this.facultyContact = fContact;
        this.facultyGender = fGender;
        this.facultyDesignation = fDesignation;
        this.facultyExperience = fExperience;
        this.facultyDept = fDept;
        this.facultyQualification = fQualification;

    }
}