const AccountHolderRepository = require('../infrastructure/repository/AccountHolderRepository');

class AccountHolderService {
    constructor() {
        this.accountHolderRepository = new AccountHolderRepository();
    }

    async getAccountHolderByID(accountHolderID) {
        return await this.accountHolderRepository.getAccountHolderByID(accountHolderID);
    }

    async getAccountHolderDeposits(accountHolderID) {
        return await this.accountHolderRepository.getAccountHolderDeposits(accountHolderID);
    }

    async createAccountHolderDeposit(accountHolderID, amount) {
        return await this.accountHolderRepository.createAccountHolderDeposit(accountHolderID, amount);
    }
}

module.exports = AccountHolderService;