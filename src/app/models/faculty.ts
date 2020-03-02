export class Faculty{
    facultyId: number;
    facultyName: string;
    facultyEmail: string;
    facultyContact: number;
    facultyGender: string;
    facultyDesignation: string;
    facultyExperience: number;
    facultyDept: string;

    constructor(fId: number,fName: string,fEmail: string,fContact: number,fGender: string,fDesignation: string,fExperience: number,fDept: string)
    {
        this.facultyId = fId;
        this.facultyName = fName;
        this.facultyEmail = fEmail;
        this.facultyContact = fContact;
        this.facultyGender = fGender;
        this.facultyDesignation = fDesignation;
        this.facultyExperience = fExperience;
        this.facultyDept = fDept;

    }
}