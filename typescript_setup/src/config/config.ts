import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_CLUSTER = process.env.MONGO_CLUSTER || '';

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.um3kq.mongodb.net/newdb`;

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 1337;

export const config = {
  mongo: {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};

export const dockerConfig = {
  mongo: {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    url: 'mongodb://db:27017/users',
  },
  server: {
    port: SERVER_PORT,
  },
};
