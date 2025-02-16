require('dotenv').config();
const mongoose = require('mongoose');
const mongoDbUrl = process.env.MONGODB_URL;

const connectDB = () => {
  try {
    mongoose.connect(mongoDbUrl);
    const connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'MongoDB Connection Error => '));
    connection.once('open', () => {
      console.log(`Database connected to ${connection.host}`);
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;