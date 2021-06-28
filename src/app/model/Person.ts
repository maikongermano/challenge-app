export class Contacts {
    code?: number;
    name?: string;
    email?: string;
    telephone?: string;

    constructor(code?: number,
        name?: string,
        email?: string,
        telephone?: string) {
        this.code = code;
        this.name = name;
        this.email = email;
        this.telephone = telephone;
    }
}

export class Person {
    code: number | undefined;
    name: string | undefined;
    cpf: string | undefined;
    birthDate: string | undefined;
    contacts = new Array<Contacts>();
}