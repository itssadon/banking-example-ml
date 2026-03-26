const { Model } = require('objection')

class Withdrawal extends Model {
    static get tableName() {
        return 'withdrawals'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['amount'],

            properties: {
                id: { type: 'integer' },
                accountHolderId: { type: 'integer' },
                amount: { type: 'number' },
            },
        }
    }

    static get relationMappings() {
        const AccountHolder = require('./AccountHolder')

        return {
            owner: {
                relation: Model.BelongsToOneRelation,
                modelClass: AccountHolder,
                join: {
                    from: 'withdrawals.accountHolderId',
                    to: 'accountHolders.id',
                },
            },
        }
    }
}

module.exports = Withdrawal