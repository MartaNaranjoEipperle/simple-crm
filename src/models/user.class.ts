export class Ueser {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj? obj.firtsName: '';
        this.lastName = obj? obj.firtsName: '';
        this.birthDate = obj? obj.firtsName: '';
        this.street = obj? obj.firtsName: '';
        this.zipCode = obj? obj.firtsName: '';
        this.city= obj? obj.firtsName: '';
    }

    public toJSON(){
        return{
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        }
    }
}