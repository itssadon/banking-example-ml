const Deposit = require('../../infrastructure/models/Deposit')

module.exports = {
	async getDepositByID(req, res) {
		try {
			return res.send({
				status: 'success',
				body: (await Deposit.query().findById(req.params.depositID)) || null
			})
		} catch (error) {
			console.log('Error', error.message)
			return res.status(400).send({
				status: 'failure'
			})
		}
	}
}
