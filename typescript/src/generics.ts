// Used to build reusable components

const getArray = <T>(items: T[]): T[] => new Array().concat(items);

function getArray2<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(['Alex', 'Bob', 'Bobby']);

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfWhatever<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfWhatever<string>(['Alex', 'Bob']);

// Function generics

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['Alex', 'Bob']);

// Generic Constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

// interface Printable {
//   print(): void;
// }

// function printHousesOrCars<T extends Printable>(arr: T[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].print();
//   }
// }

// printHousesOrCars<House>([new House(), new House()]);
// printHousesOrCars<Car>([new Car(), new Car()]);
