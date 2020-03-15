export class userRegistration{
    userId: string;
    password: string;
    userType; string

    constructor(userID: string,password: string,userType: string)
    {
        this.userId = userID;
        this.password = password;
        this.userType = userType;
    }
}