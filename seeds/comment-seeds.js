const { Comment } = require('../models');

const commentData = [
  {
    comment_content: 'This is the secret to rapidiously productize collaborative partnerships! Great work here.',
    user_id: 1,
    post_id: 4
  },
  {
    comment_content: 'I love the way you synergistically reconceptualize proactive "outside the box" thinking.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_content: 'Was this posted by an alien? What planet are you from?',
    user_id: 4,
    post_id: 1
  },
  {
    comment_content: 'What the hell are you talking about',
    user_id: 4,
    post_id: 3
  },
  
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;
