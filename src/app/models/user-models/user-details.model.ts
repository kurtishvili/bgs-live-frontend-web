import { Gender } from "../authorization/register-user.model";

export interface UserDetails {
    firstname?: string;
    lastname?: string;
    birthDay?: number;
    birthMonth?: number;
    birthYear?: number;
    birthDate?: Date;
    genderId?: Gender;
    address?: string;
    phoneNumber?: string;
    email?: string;
}