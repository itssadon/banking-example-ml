const ResponseHandler = require('../../core/utils/ResponseHandler')
const WithdrawalService = require('../../services/WithdrawalService');
const withdrawalService = new WithdrawalService();
module.exports = {


	async getWithdrawalByID(req, res) {
		try{
			const { accountHolderID } = req.params;
			const { amount } = req.body;
			const result = await withdrawalService.getWithdrawalByID(accountHolderID, amount);
			ResponseHandler.successResponse(res, result);
		}catch(error){
			ResponseHandler.errorResponse(res, error);
		}
	},
	async getWithdrawalByAccountHolderID(req, res) {
		try{
			const { accountHolderID } = req.params;
			const result = await withdrawalService.getWithdrawalsByAccountHolderID(accountHolderID);
			ResponseHandler.successResponse(res, result);
		}catch(error){
			ResponseHandler.errorResponse(res, error);
		}
	},
	async makeWithdrawals(req, res) {
		try{
			const { accountHolderID } = req.params;
			const { amount } = req.query;
			const numAmount = Number(amount);
			const result = await withdrawalService.makeWithdrawal(accountHolderID, numAmount);
			ResponseHandler.successResponse(res, result);
		}catch(error){
			ResponseHandler.errorResponse(res, error);
		}
	}
}
