require('dotenv').config();

const {
  mongodbURL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  PORT = 3000,
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = {
  mongodbURL, PORT, NODE_ENV, JWT_SECRET,
};
