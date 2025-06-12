const mongoose = require('mongoose');
require('dotenv').config();

// In-memory database for development fallback
const inMemoryDB = {
  blogs: [
    {
      id: '1',
      title: 'Welcome to Acure Aesthetics',
      content: 'We are excited to share our journey in aesthetic treatments and skincare.',
      author: 'Admin',
      date: new Date(),
      likes: 0,
      comments: []
    },
    {
      id: '2',
      title: 'Skincare Tips for Summer',
      content: 'Learn how to protect and nourish your skin during the summer months.',
      author: 'Dr. Smith',
      date: new Date(),
      likes: 0,
      comments: []
    }
  ],
  bookings: []
};

const connectDB = async () => {
  try {
    // Always use in-memory database for development
    if (!global.inMemoryDB) {
      global.inMemoryDB = inMemoryDB;
    }
    console.log('Using in-memory database for development');
    
    // Emit a fake connected event to maintain compatibility with mongoose
    if (!mongoose.connection.readyState) {
      mongoose.connection.emit('connected');
    }
    
    return {
      connection: {
        host: 'in-memory-database'
      }
    };
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
