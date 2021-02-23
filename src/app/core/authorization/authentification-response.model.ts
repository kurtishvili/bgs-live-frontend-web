export interface AuthUserModel {
    pinCode: string;
    firstname: string;
    jwt: JsonWebToken;
}

export interface JsonWebToken {
    accessToken: string;
    expiresInMinutes: number;
    expiresOnServer: number;
    expiresOnClient: number;
}