const { User } = require('../models');

const userData = [
  {
    username: 'Gianna_Livingston',
    email: 'g.livingston@example.com',
    password: 'smart'
  },
  {
    username: 'Averi_Dominguez',
    email: 'averidominguez@example.com',
    password: 'fun'
  },
  {
    username: 'MadduxStewart',
    email: 'maddux.stewart@example.com',
    password: 'happy'
  },
  {
    username: 'JamilCrawford',
    email: 'jcrawford89@example.com',
    password: 'test'
  }
];

const seedCategories = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedCategories;
