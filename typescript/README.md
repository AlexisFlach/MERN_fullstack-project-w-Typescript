## Typescript

**Type**

An easy way to refer to the different properties and functions that a value has.

A value is anything that we can assign to a variable.

```typescript
[1, 2, 3]
```

How would you describe the code above?

An array?

Or

A value that has all the properties and methods that an array has.

![Array Type](/assets/arraytype.png "Array Type")

So when refer to the value [1,2,3] as a type, what we are saying is that it has access to all the methods and properties that the array type has.

Every value we create has a type assigned to it.

##### Two different categories of types

**Primitive types**

- string
- number
- boolean
- void
- undefined
- symbol
- null

**Object Types**

- functions
- arrays
- classes
- objects

Why do we care about types?

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

#### Type Annotations and Type Inference

Type Annotations = Code we add to tell Typescript what type of value a variable will refer to. We tell TS the type.

Type Inference = Typescript tries to figure out what type of value a variable refers to. TS guesses the type.

If declaration and initialization are on the same line, Typescript will figure out the type for us.

```typescript
variable Declaration - Variable Initialization
const author = 'Jack Kerouac'
```

```typescript
const author;
author = 'Jack Kerouac'
```

##### When to use what when?

**Type Annotations**

- When we declare a variable on one line then initialize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the 'any' type and we need to clarify the value

**Type Inference**

- Always

##### The any type

- A type that means that Typescript has no idea what it is
- Avoid any!

#### Type annotations for Functions and Objects

**Type annotations for functions**

Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

**Type inference for functions**

TS tries to figure out what type of value a function will return

#### Typed Arrays

Arrays where each element if some consistent type of value.

- TS can do type inference when extracting values from an array
- TS can prevent us from adding incompatible values to the array
- We can get help with map(), forEach(), reduce() etc
- Flexible - arrays can still contain multiple different types

```typescript
const userNames = ['Alex', 'Bob', 'Ma'];

userNames.push(1);
```

```typescript
const namesAndIds: (string | number)[] = [];
```

#### Tuples

Array-like structure where each element represents some property of a record

```typescript
type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
```

#### Interfaces

Creates a new type, describing the property names and value types of an object

```typescript
interface Player {
  id: number;
  name: string;
  weapons: any[];
}

const printPlayer2 = (player: Player) => {
  console.log(`Id: ${player.id}`);
  console.log(`Id: ${player.name}`);
  console.log(`Id: ${player.weapons}`);
};
```

General Strategy for Reusable Code in Typescript:

- Create functions that accept arguments that are typed with interfaces

- Objects/classes can decide to implement a given interface to work with a function

#### Classes

Blueprint to create an object with some fields(values) and methods (functions) to represent a 'thing'

```typescript
class Player {
  // name: string;

  constructor(public name: string) {
    this.name = name;
  }

  attack(): void {
    console.log('Attack!!');
  }

  scream(): void {
    console.log('Ahhhh!!!');
  }

  private vulnerability(): void {
    console.log('I am not strong enough');
  }

  showVulnerability(): void {
    return this.vulnerability();
  }
}

class Hobbit extends Player {
  constructor(public id: number, name: string) {
    super(name);
  }
}

const frodo = new Hobbit(1, 'Frodo');

frodo.scream();

frodo.showVulnerability();
```









































