const WithdrawalRepository = require('../infrastructure/repository/WithdrawalRepository');

class WithdrawalSService {
    constructor(){
        this.withdrawalRepository = new WithdrawalRepository();
    }


    makeWithdrawal(accountHolderID, amount){
        return this.withdrawalRepository.createWithdrawal(accountHolderID, amount);
    }

    getWithdrawalByID(withdrawalID){
        return this.withdrawalRepository.getWithdrawalByID(withdrawalID);
    }

    getWithdrawalsByAccountHolderID(accountHolderID){
        return this.withdrawalRepository.getWithdrawalsByAccountHolderID(accountHolderID);
    }
}

module.exports = WithdrawalSService;