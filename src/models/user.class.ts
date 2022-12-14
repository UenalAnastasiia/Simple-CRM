export class User {
    firstName: any;
    lastName: string;
    gender: string;
    email: string;
    telephone;
    birthDate: any;
    street: string;
    zipCode: number;
    city: string;
    country: string;
    id: string;

    // obj? => if Object exist
    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.gender = obj ? obj.gender : '';
        this.email = obj ? obj.email : '';
        this.telephone = obj ? obj.telephone : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.country = obj ? obj.country : '';
        this.id = obj ? obj.id : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            email: this.email,
            telephone: this.telephone,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            country: this.country,
            id: this.id
        }
    }
}