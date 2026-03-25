const Deposit = require('../../models/Deposit');

class BalanceQueryRepository {
    async getAccountHolderBalance(accountHolderID) {
        const knex = Deposit.knex();
        return await knex.transaction(async (trx) => {
            const rawQuery = `
                SELECT 
                    COALESCE((SELECT SUM(amount) FROM deposits WHERE account_holder_id = ?), 0) 
                    - 
                    COALESCE((SELECT SUM(amount) FROM withdrawals WHERE account_holder_id = ?), 0) 
                AS true_balance
            `;

            const result = await knex.raw(rawQuery, [accountHolderID, accountHolderID]).transacting(trx);

            const balance = parseFloat(result.rows[0].true_balance);
            return balance;
        });
    }
}

module.exports = BalanceQueryRepository;