export class Student{
    studentId: string;
    studentName: string;
    studentEmail: string;
    studentContact: number;
    studentGender: string;
    studentDob: Date;
    studentDept: string;
    studentTempAddress: string;
    studentPermanentAddress: string;
    studentBatch: string;
    studentSSCMarks: number;
    studentInterMarks: number;
    studentDiplomaMarks: number;
    studentBTechMarks: number;
    studentResume: string;
    studentPhoto: string;

    constructor(studId: string,studName: string,studEmail: string,studContact: number,studGender: string,studDob: Date,studDept: string,
        studTempAddress: string, studPermAddress: string, studBatch: string, studSSCMarks: number, studInterMarks: number, studDiplomaMarks: number,
        studBTechMarks: number, studResume: string, studPhoto: string){
        this.studentId = studId;
        this.studentName = studName;
        this.studentEmail = studEmail;
        this.studentContact = studContact;
        this.studentGender = studGender;
        this.studentDob = studDob;
        this.studentDept = studDept;
        this.studentTempAddress = studTempAddress;
        this.studentPermanentAddress = studPermAddress;
        this.studentBatch = studBatch;
        this.studentSSCMarks = studSSCMarks;
        this.studentInterMarks = studInterMarks;
        this.studentDiplomaMarks = studDiplomaMarks;
        this.studentBTechMarks = studBTechMarks;
        this.studentResume = studResume;
        this.studentPhoto = studPhoto;
    }

}