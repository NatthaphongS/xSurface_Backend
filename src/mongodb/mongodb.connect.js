const mongoose = require('mongoose');

async function connect() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(
      'mongodb+srv://admin:1234@cluster0.mjnwpip.mongodb.net/?retryWrites=true&w=majority',
      { useNewUrlParser: true }
    );
    console.log('DB connect');
  } catch (error) {
    console.error('Error connecting to mongodb');
    console.error(error);
  }
}

module.exports = { connect };
