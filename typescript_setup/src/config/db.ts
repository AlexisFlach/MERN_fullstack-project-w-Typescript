import mongoose from 'mongoose';
import Express, { Request, Response, NextFunction } from 'express';
import { config, dockerConfig } from './config';

const router = Express();

const connect = async (): Promise<void> => {
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
  } catch (e: any) {
    console.error(e);
    throw new Error(e.message);
  }
};

const StartServer = () => {
  router.use((req: Request, res: Response, next: NextFunction) => {
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

const close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};

const clear = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};

export default { connect, close, clear };
