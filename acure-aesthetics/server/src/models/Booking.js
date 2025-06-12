const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
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
const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

if (!mongoose.connection.readyState) {
  Booking.find = async () => global.inMemoryDB.bookings || [];
  Booking.findById = async (id) => (global.inMemoryDB.bookings || []).find(booking => booking.id === id);
  Booking.create = async (data) => {
    const booking = {
      id: Date.now().toString(),
      ...data,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    if (!global.inMemoryDB.bookings) global.inMemoryDB.bookings = [];
    global.inMemoryDB.bookings.push(booking);
    return booking;
  };
  Booking.updateById = async (id, data) => {
    const index = (global.inMemoryDB.bookings || []).findIndex(booking => booking.id === id);
    if (index === -1) return null;
    global.inMemoryDB.bookings[index] = {
      ...global.inMemoryDB.bookings[index],
      ...data,
      updatedAt: new Date()
    };
    return global.inMemoryDB.bookings[index];
  };
  Booking.deleteById = async (id) => {
    const index = (global.inMemoryDB.bookings || []).findIndex(booking => booking.id === id);
    if (index === -1) return false;
    global.inMemoryDB.bookings.splice(index, 1);
    return true;
  };
}

module.exports = Booking;
