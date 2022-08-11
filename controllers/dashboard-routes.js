const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const data = await Post.findAll({
            where: { user_id: req.session.user_id},
            attributes: ['id', 'post_title', 'created_at', 'post_content'],
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
            ]
        });
        const postsList = data.map(p => p.get({plain: true}));
        res.render('dashboard', {postsList, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/create/', withAuth, async (req, res) => {
    try {
        const data = await Post.findAll({
            where: {user_id: req.session.user_id},
            attributes: ['id', 'title', 'created_at', 'post_content'],
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
            ]
        });
        const postsList = data.map(p => p.get({plain: true}));
        res.render('create-post', {postsList, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

//TODO edit post

module.exports = router;