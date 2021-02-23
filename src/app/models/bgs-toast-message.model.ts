import { Severity } from "../enums/severity-enum";

export interface ToastMessage {
    message: string;
    severity: Severity;
}