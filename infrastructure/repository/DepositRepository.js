const Deposit = require('../models/Deposit');

export class DeposityRepository {
    constructor() {
        this.deposit = Deposit;
    }

    async getDepositByID(depositID) {
        return await this.deposit.query().findById(depositID);
    }

    async getDepositsByAccountHolderID(accountHolderID) {
        return await this.deposit.query().where({ accountHolderID });
    }

    async createDeposit(accountHolderID, amount) {
        return await this.deposit.query().insert({
            accountHolderID,
            amount
        }).returning('*');
    }
}