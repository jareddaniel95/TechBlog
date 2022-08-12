const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//     try {
//         const data = await Post.findAll({
//             attributes: [
//                 'id',
//                 'post_title',
//                 'post_content',
//                 'created_at'
//             ],
//             include: [
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_content', 'user_id', 'post_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ],
//             order: [['created_at', 'DESC']]
//         });
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {
//         const data = await Post.findByPk(req.params.id, {
//             attributes: [
//                 'id',
//                 'post_title',
//                 'post_content',
//                 'created_at'
//             ],
//             include: [
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_content', 'user_id', 'post_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ],
//             order: [['created_at', 'DESC']]
//         });
//         res.status(200).json(data); //TODO: Check if data is null
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

router.post('/', withAuth, async (req, res) => {
    try {
        const data = await Post.create({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            user_id: req.session.user_id
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const data = await Post.update({
            post_title: req.body.post_title,
            post_content: req.body.post_content
        },
        {
            where: {
                id: req.params.id
            }
        });
        if (!data) {
            res.status(404).json({message: 'No post with this ID'});
            return;
        }
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const data = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!data) {
            res.status(404).json({message: 'No post with this ID'});
            return;
        }
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;