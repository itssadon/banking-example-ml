const Deposit = require('../../infrastructure/models/Deposit')
const DepositService = require('../../services/DepositService')
const depositService = new DepositService();
const ResponseHandler = require('../../core/utils/ResponseHandler')
const { createDepositSchema } = require('./dto');
module.exports = {
	async getDepositByID(req, res) {
		try {
			const { depositID } = req.params;
			const result = await depositService.getDepositByID(depositID);
			ResponseHandler.successResponse(res, result);
		} catch (error) {
			ResponseHandler.errorResponse(res, error);
		}
	},

	async getDepositsByAccountHolderID(req, res) {
		try {
			const { accountHolderID } = req.params;
			const result = await depositService.getDepositsByAccountHolderID(accountHolderID);
			ResponseHandler.successResponse(res, result);
		} catch (error) {
			ResponseHandler.errorResponse(res, error);
		}
	},

	async createDeposit(req, res) {
		try {
			const { accountHolderID } = req.params;
			const { amount } = req.query;
			const numAmount = Number(amount);
			createDepositSchema.parse({ accountHolderID, amount: numAmount });
			const result = await depositService.createDeposit(accountHolderID, numAmount);
			ResponseHandler.createdResponse(res, result);
		} catch (error) {
			ResponseHandler.errorResponse(res, error);
		}
	}
}
