// place data below that that will appear on site before any user input

const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.create({
        firstName: 'Tester',
        lastName: 'Test',
        email: "tester@email.com",
        password: "password123"
    });

    console.log('users seeded');

    process.exit();
});