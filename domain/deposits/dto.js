const { z } = require('zod');

const createDepositSchema = z.object({
    accountHolderID: z.number(),
    amount: z.number(),
});

const getDepositSchema = z.object({
    depositID: z.number(),
});

const getDepositsByAccountHolderIDSchema = z.object({
    accountHolderID: z.number(),
});

module.exports = {
    createDepositSchema,
    getDepositSchema,
    getDepositsByAccountHolderIDSchema
}