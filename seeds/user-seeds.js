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
    username: 'Maddux Stewart',
    email: 'maddux.stewart@example.com',
    password: 'happy'
  },
  {
    username: 'JamilCrawford',
    email: 'jcrawford89@example.com',
    password: 'test'
  },
  {
    username: 'Alicia_Giles',
    email: 'alicia.g92@example.com',
    password: 'cool'
  },
  {
    username: 'Marcus Arroyo',
    email: 'marroyo88@example.com',
    password: 'nice'
  }
];

const seedCategories = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedCategories;
