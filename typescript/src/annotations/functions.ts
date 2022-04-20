const add = (a: number, b: number) => {
  a + b;
};

const logger = (msg: string): void => console.log(`${msg}`);

const logInfo1 = (user: { id: number; name: string }): void => {
  const { id, name } = user;
  console.log(id, name);
};

const logInfo2 = ({ id, name }: { id: number; name: string }): void => {
  console.log(id, name);
};

const user = {
  id: 1,
  name: 'Alex',
  setName(name: string): void {
    this.name = name;
  },
};

user.setName('Bob');

const { id }: { id: number } = user;
