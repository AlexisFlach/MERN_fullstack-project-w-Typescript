const myuser = {
  id: 1,
  name: 'Alex',
  setName(name: string): void {
    this.name = name;
  },
};

myuser.setName('Bob');

console.log(myuser);
