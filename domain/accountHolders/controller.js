const Deposit = require('../../infrastructure/models/Deposit');
const AccountHolderService = require('../../services/AccountHolderService');
const DepositService = require('../../services/DepositService');
const accountHolderService = new AccountHolderService();
const depositService = new DepositService();
module.exports = {
	async getAccountHolderByID(req, res) {
		try {
      const { accountHolderID } = req.params;
      const result = await accountHolderService.getAccountHolderByID(accountHolderID);
      return res.send({
        status: 'success',
        body: result || {}
      });
    } catch (error) {
      console.log('Error', error.message)
      return res.status(400).send({
        status: 'failure'
      });
    }
  },
	async getAccountHolderDeposits(req, res) {
		try {
      const { accountHolderID } = req.params;
      const result = await depositService.getDepositsByAccountHolderID(accountHolderID);

      return res.send({
        status: 'success',
        body: result || {}
      });

    } catch (error) {
      console.log('Error', error.message)
      return res.status(400).send({
        status: 'failure'
      });
    }
  },
	async createAccountHolderDeposit(req, res) {
		try {
      const { accountHolderID } = await depositService.createDeposit(req.params.accountHolderID, req.query.amount);

      return res.status(201).send({
        status: 'success',
        body: { accountHolderID }
      });

    } catch (error) {
      console.log('Error', error.message)
      return res.status(400).send({
        status: 'failure'
      });
    }
  },
};
