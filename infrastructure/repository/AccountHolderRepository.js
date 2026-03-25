const AccountHolder = require('../models/AccountHolder');
const Deposit = require('../models/Deposit');

class AccountHolderRepository {
    async getAccountHolderByID(accountHolderID) {
        return await AccountHolder.query().findById(accountHolderID).withGraphFetched('deposits');
    }

    async getAccountHolderDeposits(accountHolderID) {
        return await Deposit.query().where({ accountHolderID });
    }

    async createAccountHolderDeposit(accountHolderID, amount) {
        return await Deposit.query().insert({
            accountHolderID,
            amount
        }).returning('*');
    }
}

module.exports = AccountHolderRepository;