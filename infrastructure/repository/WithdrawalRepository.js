const Withdrawal = require('../models/Withdrawal');

class WithdrawalRepository {
    constructor(){
        this.withdrawal = Withdrawal;
    }

    async getWithdrawalByID(withdrawalID) {
        return await this.withdrawal.query().findById(withdrawalID);
    }

    async getWithdrawalsByAccountHolderID(accountHolderID) {
        return await this.withdrawal.query().where({ accountHolderID });
    }

    async createWithdrawal(accountHolderID, amount) {
        return await this.withdrawal.query().insert({
            accountHolderID,
            amount
        }).returning('*');
    }
}

module.exports = WithdrawalRepository;