const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [commentSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// If MongoDB is not connected, use in-memory database
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

if (!mongoose.connection.readyState) {
  Blog.find = async () => global.inMemoryDB.blogs || [];
  Blog.findById = async (id) => (global.inMemoryDB.blogs || []).find(blog => blog.id === id);
  Blog.create = async (data) => {
    const blog = {
      id: Date.now().toString(),
      ...data,
      likes: 0,
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    if (!global.inMemoryDB.blogs) global.inMemoryDB.blogs = [];
    global.inMemoryDB.blogs.push(blog);
    return blog;
  };
  Blog.updateById = async (id, data) => {
    const index = (global.inMemoryDB.blogs || []).findIndex(blog => blog.id === id);
    if (index === -1) return null;
    global.inMemoryDB.blogs[index] = {
      ...global.inMemoryDB.blogs[index],
      ...data,
      updatedAt: new Date()
    };
    return global.inMemoryDB.blogs[index];
  };
  Blog.deleteById = async (id) => {
    const index = (global.inMemoryDB.blogs || []).findIndex(blog => blog.id === id);
    if (index === -1) return false;
    global.inMemoryDB.blogs.splice(index, 1);
    return true;
  };
}

module.exports = Blog;
