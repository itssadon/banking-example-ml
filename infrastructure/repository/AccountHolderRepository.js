const AccountHolder = require('../models/AccountHolder');

class AccountHolderRepository {
    async getAccountHolderByID(accountHolderID) {
        return await AccountHolder.query().findById(accountHolderID).withGraphFetched('deposits');
    }
}

module.exports = AccountHolderRepository;