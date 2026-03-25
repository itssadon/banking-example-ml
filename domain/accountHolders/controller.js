const AccountHolder = require('../../infrastructure/models/AccountHolder')
const Deposit = require('../../infrastructure/models/Deposit')

module.exports = {
	async getAccountHolderByID(req, res) {
		try {
      const { accountHolderID } = req.params;
      const result = await AccountHolder.query().findById(accountHolderID).withGraphFetched('deposits')
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
      return res.send({
        status: 'success',
        body: await Deposit.query().where({ accountHolderID: req.params.accountHolderID })
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
      return res.send({
        status: 'success',
        body: await Deposit.query().insert({
          accountHolderID: req.params.accountHolderID,
          amount: req.query.amount
        }).returning('*')
      });
    } catch (error) {
      console.log('Error', error.message)
      return res.status(400).send({
        status: 'failure'
      });
    }
  },
};
