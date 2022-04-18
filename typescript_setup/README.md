## Typescript setup
---

#### Init project and install dependencies
```
npm init -y
```

```
npm i express dotenv cors 
```

```
npm i -D nodemon typescript ts-node ts-node-dev @types/express @types/node @types/dotenv @types/cors
```

#### Typescript setup

```
tsc --init
```

**tsconfig.json**

```
{
  "compilerOptions": {
      "target": "es2016",
      "module": "commonjs",
      "outDir": "./dist",
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "skipLibCheck": true,
      "strictPropertyInitialization": false
  },
  "include": ["src/**/*"]
}
```

**src/index.ts**

```
console.log('Hello world')
```

**package.json**

**scripts**

```
  "scripts": {
    "start": "ts-node src/index.ts",
    "dev": "nodemon --exec ts-node src/index.ts",
    "dev:ts": "ts-node-dev --respawn src/index.ts",
    "build": "tsc"
  },
```

#### Express setup

**src/index.ts**

```
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const users = [
  {
    id: 1,
    name: 'Alex',
  },
  {
    id: 2,
    name: 'Lars',
  },
];

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(users);
});

const PORT = process.env.DEV_PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
```

**.env**

```
DEV_PORT=5000
```

#### Jest Setup

```
npm i -D jest @types/jest ts-jest
```

**package.json**

**scripts**

```
  "test": "jest -c jest.unit.json",
  "test:coverage": "jest --coverage -c ./jest.unit.json"
```

**./jest.unit.json**

```
{
  "preset": "ts-jest",
  "coverageDirectory": "./coverage",
  "testMatch": [
    "**/?(*.)+spec.ts"
  ],
  "resetMocks": true,
  "clearMocks": true
}
```

#### Refactor

**File Structure**

```
src/
  controllers/
    users
      index.ts
      getAllUsers.ts
  routes
    users.ts
  tests/
    getAllUsers.spec.ts
  db.ts
  index.ts
```

#### Connect to MongoDB

```
npm i mongoose
```

```
npm i -D @types/mongoose
```

**config/config.ts**

```
import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_CLUSTER = process.env.MONGO_CLUSTER || '';

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.um3kq.mongodb.net/musicdb`;

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
```

**config/db.ts**

```
import mongoose from 'mongoose';
import Express, { Request, Response, NextFunction } from 'express';
import { config } from './config';

const router = Express();

export const connectDB = async (): Promise<void> => {
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
```

**index.ts**

```
connectDB()
```


#### Links

CodingLikeDavid - https://www.youtube.com/watch?v=M-8i6bJRK4k&ab_channel=CodingLikeDavid
Ben Awad - https://www.youtube.com/watch?v=1UcLoOD1lRM&ab_channel=BenAwad