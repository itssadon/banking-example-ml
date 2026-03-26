const { z } = require('zod');

const createWithdrawalSchema = z.object({
    accountHolderID: z.number(),
    amount: z.number(),
});

module.exports = {
    createWithdrawalSchema
}