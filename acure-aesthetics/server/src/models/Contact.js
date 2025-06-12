const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
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
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// If MongoDB is not connected, use in-memory database
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

if (!mongoose.connection.readyState) {
  Contact.find = async () => global.inMemoryDB.contacts || [];
  Contact.create = async (data) => {
    const contact = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date()
    };
    if (!global.inMemoryDB.contacts) global.inMemoryDB.contacts = [];
    global.inMemoryDB.contacts.push(contact);
    return contact;
  };
}

module.exports = Contact;
