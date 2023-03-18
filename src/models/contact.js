import { TYPES } from "./types_enum";

export class Contact {
    name = '';
    last_name = '';
    phone = '';
    email = '';
    status = false;
    type = TYPES.STUDENT

    constructor(name, last_name, phone, email, status, type){
        this.name = name;
        this.last_name = last_name;
        this.phone = phone;
        this.email = email;
        this.status = status;
        this.type = type;
    }

}