exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('deposits')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('deposits').insert([
				{
					account_holder_id: 1,
					amount: 10.00
				},
				{
					account_holder_id: 1,
					amount: 100.00
				},
			])
		})
}
