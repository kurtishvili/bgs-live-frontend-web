import { TransactionStatus } from "src/app/enums/transaction-status.enum";
import { TransactionType } from "src/app/enums/transaction-type.enum";

export interface TransactionListModel {
    statusId?: TransactionStatus;
    amount?: number;
    typeId?: TransactionType;
    createDate?: Date;
    fee?: number;
}