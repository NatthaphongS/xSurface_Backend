const mongoose = require('mongoose');

async function connect() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(
      'mongodb+srv://sinsupharoek:FDHmIMwEy4BfvlOu@cluster0.rjc1ezn.mongodb.net/',
      { useNewUrlParser: true }
    );
    console.log('DB connect');
  } catch (error) {
    console.error('Error connecting to mongodb');
    console.error(error);
  }
}

module.exports = { connect };
