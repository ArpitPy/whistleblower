const router = require('express').Router()
const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getTimelinePosts,
  getUserPosts,
} = require('../controllers/posts')

router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id', getPost)
router.get('/timeline/:userId', getTimelinePosts)

router.get('/profile/:username', getUserPosts)

module.exports = router
