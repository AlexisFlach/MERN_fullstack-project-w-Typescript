const title: string = 'On the road';
const author: string = 'Jack Kerouac';
const pages: number = 320;
const hasReviews: boolean = true;
const updatedAt: Date = new Date();
const tags: string[] = ['Book', 'Beat', 'Classics'];

class Book {}

const book: Book = new Book();

const size: { height: number; width: number } = {
  height: 20,
  width: 10,
};

const logMsg: (msg: string) => void = (msg: string) => {
  console.log(`${msg}`);
};
