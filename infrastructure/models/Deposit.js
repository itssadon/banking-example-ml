const { Model } = require('objection')

class Deposit extends Model {
  static get tableName() {
    return 'deposits'
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
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
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: AccountHolder,
        join: {
          from: 'deposits.accountHolderId',
          to: 'accountHolders.id',
        },
      },
    }
  }
}

module.exports = Deposit
