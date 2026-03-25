const Deposit = require('../../infrastructure/models/Deposit')

module.exports = {


	async makeWithdrawals(req, res) {
		try{
			const { accountHolderID } = req.params;
			const { amount } = req.body;
			
			return res.send({
				status: 'successs',
				body: {}
			})
		}catch(error){

		}
	}
}
