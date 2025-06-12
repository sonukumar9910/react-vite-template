class Booking {
  static async find() {
    return global.inMemoryDB.bookings || [];
  }

  static async findById(id) {
    return (global.inMemoryDB.bookings || []).find(booking => booking.id === id);
  }

  static async create(data) {
    const booking = {
      id: Date.now().toString(),
      ...data,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (!global.inMemoryDB.bookings) {
      global.inMemoryDB.bookings = [];
    }

    global.inMemoryDB.bookings.push(booking);
    return booking;
  }

  static async updateById(id, data) {
    const index = (global.inMemoryDB.bookings || []).findIndex(booking => booking.id === id);
    if (index === -1) return null;
    
    global.inMemoryDB.bookings[index] = {
      ...global.inMemoryDB.bookings[index],
      ...data,
      updatedAt: new Date()
    };
    return global.inMemoryDB.bookings[index];
  }

  static async deleteById(id) {
    const index = (global.inMemoryDB.bookings || []).findIndex(booking => booking.id === id);
    if (index === -1) return false;
    
    global.inMemoryDB.bookings.splice(index, 1);
    return true;
  }

  static async findByUserId(userId) {
    return (global.inMemoryDB.bookings || []).filter(booking => booking.userId === userId);
  }
}

module.exports = Booking;
