const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  addComment,
  likeBlog
} = require('../controllers/blogController');

// Get all blogs
router.get('/', getAllBlogs);

// Get blog by ID
router.get('/:id', getBlogById);

// Create new blog
router.post('/', createBlog);

// Update blog
router.put('/:id', updateBlog);

// Delete blog
router.delete('/:id', deleteBlog);

// Add comment to blog
router.post('/:id/comments', addComment);

// Like blog
router.put('/:id/like', likeBlog);

module.exports = router;
