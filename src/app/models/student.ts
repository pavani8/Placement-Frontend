export class Student{
    studentId: number;
    studentName: string;
    studentEmail: string;
    studentContact: number;
    studentGender: string;
    studentDob: Date;
    studentDept: string;
    studentAddress: string;
    constructor(studId: number,studName: string,studEmail: string,studContact: number,studGender: string,studDob: Date,studDept: string,studAddress: string){
        this.studentId = studId;
        this.studentName = studName;
        this.studentEmail = studEmail;
        this.studentContact = studContact;
        this.studentGender = studGender;
        this.studentDob = studDob;
        this.studentDept = studDept;
        this.studentAddress = studAddress;
    }

}