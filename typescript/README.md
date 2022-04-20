## Typescript

**Type**

An easy way to refer to the different properties and functions that a value has.

A value is anything that we can assign to a variable.

```
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

































