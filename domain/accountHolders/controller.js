const AccountHolderService = require('../../services/AccountHolderService');
const DepositService = require('../../services/DepositService');
const accountHolderService = new AccountHolderService();
const depositService = new DepositService();
const ResponseHandler = require('../../core/utils/ResponseHandler')
module.exports = {
	async getAccountHolderByID(req, res) {
		try {
      const { accountHolderID } = req.params;
      const result = await accountHolderService.getAccountHolderByID(accountHolderID);
      ResponseHandler.successResponse(res, result);
    } catch (error) {
      ResponseHandler.errorResponse(res, error);
    }
  },
	async getAccountHolderDeposits(req, res) {
		try {
      const { accountHolderID } = req.params;
      const result = await depositService.getDepositsByAccountHolderID(accountHolderID);
      ResponseHandler.successResponse(res, result);
    } catch (error) {
      ResponseHandler.errorResponse(res, error);
    }
  },
	async createAccountHolderDeposit(req, res) {
		try {
      const { accountHolderID } = await depositService.createDeposit(req.params.accountHolderID, req.query.amount);
      ResponseHandler.createdResponse(res, { accountHolderID });
    } catch (error) {
      ResponseHandler.errorResponse(res, error);
    }
  },
};
