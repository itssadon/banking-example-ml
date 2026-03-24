exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex.raw('TRUNCATE TABLE account_holders RESTART IDENTITY CASCADE')
	return knex('account_holders')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('account_holders').insert([
				{
					firstName: 'John',
					lastName: 'Doe'
				},
				{
					firstName: 'Martin',
					lastName: 'Doe'
				},
				{
					firstName: 'Jane',
					lastName: 'Doe'
				},
			])
		})
}
