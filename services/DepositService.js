const DepositRepository = require('../infrastructure/repository/DepositRepository');

export class DepositService {
    constructor() {
        this.depositRepository = new DepositRepository();
    }

    async getDepositByID(depositID) {
        return await this.depositRepository.getDepositByID(depositID);
    }

    async getDepositsByAccountHolderID(accountHolderID) {
        return await this.depositRepository.getDepositsByAccountHolderID(accountHolderID);
    }

    async createDeposit(accountHolderID, amount) {
        return await this.depositRepository.createDeposit(accountHolderID, amount);
    }
}