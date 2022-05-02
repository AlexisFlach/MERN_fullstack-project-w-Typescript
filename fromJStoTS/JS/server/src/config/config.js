const dotenv = require('dotenv');

dotenv.config()

const MONGO_URL = process.env.MONGODB_CONN || "mongodb://localhost:27017/usersdatabase";

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 1337;

const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};

module.exports = { config }