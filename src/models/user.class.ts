export class User {
    firstName: string;
    lastName: string;
    mail: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj? obj.firtsName: '';
        this.lastName = obj? obj.firtsName: '';
        this.mail = obj? obj.mail: '';
        this.birthDate = obj? obj.firtsName: '';
        this.street = obj? obj.firtsName: '';
        this.zipCode = obj? obj.firtsName: '';
        this.city= obj? obj.firtsName: '';
    }

    public toJSON(){
        return{
            firstName: this.firstName,
            lastName: this.lastName,
            mail: this.mail,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        }
    }
}