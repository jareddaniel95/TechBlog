const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const data = await Post.findAll({
        attributes: ['id', 'post_title', 'post_content', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_content', 'user_id', 'post_id', 'created_at'],
                include: [{
                    model: User,
                    attributes: ['username']
                }]
            },
            {
                model: User,
                attributes: ['username']
            }
        ],
        order: [['created_at', 'DESC']]
    });

    const posts = data.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the post
    try {
      const postData = await Post.findByPk(req.params.id, {
        attributes: ['id', 'post_title', 'post_content', 'created_at'],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_content', 'user_id', 'post_id', 'created_at'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
          },
          {
            model: User,
            attributes: ['username']
          }
        ],
      });
      const post = postData.get({ plain: true });
      const session_user_id = req.session.user_id;
      const data = {session_user_id, post}
      res.render('post', { data, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('register');
});

module.exports = router;
