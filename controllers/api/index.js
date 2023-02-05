const router = require('express').Router();

const userRoutes = require('../../Models/user-routes.js');
const postRoutes = require('../../Models/post-routes.js');
const commentRoutes = require('../../Models/comment-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)

module.exports = router;