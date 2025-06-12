class Blog {
  static async find() {
    return global.inMemoryDB.blogs || [];
  }

  static async findById(id) {
    return (global.inMemoryDB.blogs || []).find(blog => blog.id === id);
  }

  static async create(data) {
    const blog = {
      id: Date.now().toString(),
      ...data,
      likes: 0,
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (!global.inMemoryDB.blogs) {
      global.inMemoryDB.blogs = [];
    }

    global.inMemoryDB.blogs.push(blog);
    return blog;
  }

  static async updateById(id, data) {
    const index = (global.inMemoryDB.blogs || []).findIndex(blog => blog.id === id);
    if (index === -1) return null;
    
    global.inMemoryDB.blogs[index] = {
      ...global.inMemoryDB.blogs[index],
      ...data,
      updatedAt: new Date()
    };
    return global.inMemoryDB.blogs[index];
  }

  static async deleteById(id) {
    const index = (global.inMemoryDB.blogs || []).findIndex(blog => blog.id === id);
    if (index === -1) return false;
    
    global.inMemoryDB.blogs.splice(index, 1);
    return true;
  }
}

module.exports = Blog;
