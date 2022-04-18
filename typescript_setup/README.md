## Typescript setup
---

#### Init project and install dependencies
```
npm init -y
```

```
npm i express dotenv
```

```
npm i -D nodemon typescript ts-node ts-node-dev @types/express @types/node @types/dotenv
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

**File Structure**

```
src/
  controllers/
    getAllUsers.ts
  tests/
    getAllUsers.spec.ts
  db.ts
  index.ts
```



#### Links

CodingLikeDavid - https://www.youtube.com/watch?v=M-8i6bJRK4k&ab_channel=CodingLikeDavid