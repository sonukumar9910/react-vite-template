const Blog = require('../models/Blog');

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error getting blogs:', error);
    res.status(500).json({ message: 'Error getting blogs' });
  }
};

// Get blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error('Error getting blog:', error);
    res.status(500).json({ message: 'Error getting blog' });
  }
};

// Create new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content, author, image } = req.body;
    const blog = await Blog.create({
      title,
      content,
      author,
      image
    });
    res.status(201).json(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Error creating blog' });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.updateById(req.params.id, req.body);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Error updating blog' });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const success = await Blog.deleteById(req.params.id);
    if (!success) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Error deleting blog' });
  }
};

// Add comment to blog
exports.addComment = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    const { name, comment } = req.body;
    blog.comments = blog.comments || [];
    blog.comments.push({
      id: Date.now().toString(),
      name,
      comment,
      createdAt: new Date()
    });

    const updatedBlog = await Blog.updateById(req.params.id, blog);
    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Error adding comment' });
  }
};

// Like blog
exports.likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    blog.likes = (blog.likes || 0) + 1;
    const updatedBlog = await Blog.updateById(req.params.id, blog);
    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error('Error liking blog:', error);
    res.status(500).json({ message: 'Error liking blog' });
  }
};
