#### Exercises

1 Animals

A. 

Get this code to work

```typescript
const duck: Animal = new Duck('Bob');
duck.printName(); // My name is Bob
```
B. 

Interface = Creates a new type, describing the property names and value types of an object.

Should printName really belong to the Animal interface?

Get this code to work

```typescript
const duck: Printable = new Duck('Bob');
duck.printName(); // My name is Bob
```

2

This code should work the same without the use of 'any'

```typescript
const users: any[] = [
  {
    id: 1,
    name: 'Lana Del Rey',
    age: 35,
  },
  {
    id: 2,
    name: 'Bob Dylan',
    age: 80,
  },
  {
    id: 3,
    name: 'Thåström',
    age: 55,
  },
];

const logger = (user: any): any =>
  console.log(`Id: ${user.id} - Name: ${user.name} - Age: ${user.age}`);

users.forEach(logger);
```

3 Generic nested array

Create a function that accepts an array of arrays and logs out each nested array. The array could be of any(not the type 'any) type.

4 Repository pattern

Create an interface, types and in-memory database for the following repository class

```typescript
class ArtistRepository {
  public _db: any[];

  constructor(db: any[]) {
    this._db = db;
  }

  getArtists = () => this._db;

  getArtist = (id: number) => this._db.filter((item: any) => item.id === id);

  createArtist = (artist: any) => {
    this._db.push(artist);
  };

  updateArtist = (id: number, artist: any) => {
    const itemToUpdate = this.getArtist(id);
    this._db[itemToUpdate[0].id - 1] = artist;
    return this;
  };

  deleteArtist = (id: number) => {
    this._db = this._db.filter((item: any) => item.id !== id);
  };

  addAlbumToArtist = (artistId: number, album: any) => {
    const artist = this.getArtist(artistId);
    console.log(artist[0].albums?.push(album));
  };

  getArtistAlbums = (id: number) => {
    const artist = this.getArtist(id);
    if (artist[0].albums) {
      return artist[0].albums;
    }
    return `${artist[0].name}`;
  };
}
```


5

other resources

https://typescript-exercises.github.io/