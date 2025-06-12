const express = require('express');
const router = express.Router();
const {
  getAllBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking
} = require('../controllers/bookingController');

// Get all bookings
router.get('/', getAllBookings);

// Get booking by ID
router.get('/:id', getBooking);

// Create new booking
router.post('/', createBooking);

// Update booking
router.put('/:id', updateBooking);

// Delete booking
router.delete('/:id', deleteBooking);

// Get bookings by user ID

module.exports = router;
