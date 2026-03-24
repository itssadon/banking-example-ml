const { Model } = require('objection')

class AccountHolder extends Model {
  static get tableName() {
    return 'accountHolders'
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName'],

      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string' },
        lastName: { type: 'string' }
      },
    }
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    // One way to prevent circular references
    // is to require the model classes here.
    const Deposit = require('./Deposit')

    return {
      deposits: {
        relation: Model.HasManyRelation,
        modelClass: Deposit,
        join: {
          from: 'accountHolders.id',
          to: 'deposits.accountHolderId',
        },
      },
    }
  }
}

module.exports = AccountHolder
