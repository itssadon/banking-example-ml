const AccountHolderRepository = require('../infrastructure/repository/AccountHolderRepository');
const BalanceQueryRepository = require('../infrastructure/repository/query/BalanceQueryRepository');

class AccountHolderService {
    constructor() {
        this.accountHolderRepository = new AccountHolderRepository();
        this.balanceQueryRepository = new BalanceQueryRepository();
    }

    async getAccountHolderByID(accountHolderID) {
        return await this.accountHolderRepository.getAccountHolderByID(accountHolderID);
    }

    async getAccountHolderBalance(accountHolderID) {
        return await this.balanceQueryRepository.getAccountHolderBalance(accountHolderID);
    }
}

module.exports = AccountHolderService;