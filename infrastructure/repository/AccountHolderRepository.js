const AccountHolder = require('../models/AccountHolder');
const Deposit = require('../models/Deposit');

class AccountHolderRepository {
    async getAccountHolderByID(accountHolderID) {
        return await AccountHolder.query().findById(accountHolderID).withGraphFetched('deposits');
    }
}

module.exports = AccountHolderRepository;