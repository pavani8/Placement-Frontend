export class Company{
    companyId: number;
    companyName: string;
    companyDescription: string;
    companySelectionProcess: string;
    companyRecruited: number;

    constructor(compId: number,compName: string,compDescription: string,compSelectionProcess: string,compRecruited: number){
        this.companyId = compId;
        this.companyName = compName;
        this.companyDescription = compDescription;
        this.companySelectionProcess = compSelectionProcess;
        this.companyRecruited = compRecruited;

    }

}