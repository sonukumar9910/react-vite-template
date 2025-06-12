const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts
} = require('../controllers/contactController');

// Create new contact message
router.post('/', createContact);

// Get all contact messages (for admin)
router.get('/', getAllContacts);

module.exports = router;
