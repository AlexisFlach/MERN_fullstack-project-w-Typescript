const mongoose = require('mongoose');
const express = require('express')
const { config } = require('./config')
require('dotenv').config();

const router = express();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongo.url, {
      retryWrites: true,
      w: 'majority',
    });

    if (conn) {
      console.log('Mongo connected successfully.');
      StartServer();
    } else {
      console.error('Mongo did not connect');
    }
  } catch (e) {
    console.error(e);
    throw new Error(e.message);
  }
};

const StartServer = () => {
  router.use((req, res, next) => {
    console.log(
      `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );
    res.on('finish', () => {
      console.log(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  });
};

module.exports = { connectDB }