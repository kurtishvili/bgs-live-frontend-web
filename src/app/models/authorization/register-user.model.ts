export interface RegisterUserModel {
    firstname?: string;
    lastname?: string;
    genderId?: Gender;
    birthDay?: number;
    birthMonth?: number;
    birthYear?: number;
    address?: string;
    email?: string;
    username?: string;
    password?: string;
    repeatPassword?: string;
    personalNumber?: string;
}

export enum Gender {
    male = 1,
    female = 2
}