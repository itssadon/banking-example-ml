const { z } = require('zod');

const accountHolderSchema = z.object({
    accountHolderID: z.number(),
});

module.exports = {
    accountHolderSchema
}

