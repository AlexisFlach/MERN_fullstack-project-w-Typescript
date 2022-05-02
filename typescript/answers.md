 1A. Animals
Get this code to work

```
 interface Animal {
   printName: () => string;
 }

 class Duck implements Animal {
   constructor(public name: string) {
     this.name = name;
   }
   printName(): string {
     return `My name is ${this.name}`;
   }
 }

 const duck: Animal = new Duck('Bob');
 duck.printName();  My name is Bob
```
1B. 

```
interface Printable {
  printName: () => string;
}

abstract class Animal implements Printable {
  constructor(public name: string) {
    this.name = name;
  }
  abstract printName(): string;
}

class Duck extends Animal {
  constructor(public name: string) {
    super(name);
  }
  printName(): string {
    return `My name is ${this.name}`;
  }
}

const duck: Printable = new Duck('Bob');
duck.printName(); // My name is Bob

console.log(duck.printName());
```

Er lösning behöver verkligen inte vara såhär komplicerad. Jag valde att använda mig av abstrakt metoder och arv från en superklass (Animal -> Duck) för att gå igenom några koncept.

Inom Objekt-orienterad programmering så ska varje klass vara så konsis som möjligt, och egentligen bara beskriva EN sak. Man kan säga att man mappar en sak från verkligheten direkt till kod.

I exempel A hade Animal en "printName-metod". I verkliga livet har inte djur den funktionen. Det kan då vara på sin plats att bryta ut den funktionaliteten.

När klasser ärver från varandra så kallas det för en IS-A-relation.

Duck IS-A animal.

När klasser implementerar ett interface kallas det för en HAS-A-relation.

Med IS-A har vi enklare att skapa loosely coupled klasser. Att dom inte är så beroende av varandra. Detta koncept är väldigt viktigt inom OOP(objekt-orienterad programmering).

Vidare så har vi nu satt printName till att vara en abstrakt-metod. Det ger oss yterliggare flexibilitet då det är upp till varje klass som ärver från Animal att implementera metoden så som den vill.

2. 
```
type User = {
  id: number;
  name: string;
  age: number;
};

const users: User[] = [
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

const logger = (user: User): void =>
  console.log(`Id: ${user.id} - Name: ${user.name} - Age: ${user.age}`);

users.forEach(logger);
```

Istället för 'type User' så kan man använda interface, klass eller ett objekt. 

3.

Create a function that accepts an array of arrays and logs out each nested array. The array could be of any(not the type 'any) type.

```
function printAnything<T>(arr: T[][]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([
  [1, 2, 3],
  [4, 5, 6],
]);
```

4. Repository pattern

Create an interface, types and in-memory database for the following repository class.

```
interface Album {
  id: number;
  title: string;
}

interface Artist {
  id: number;
  name: string;
  albums?: Album[];
}

const artistDb: Artist[] = [];

class ArtistRepository {
  public _db: Artist[];

  constructor(db: any[]) {
    this._db = db;
  }

  getArtists = (): Artist[] => this._db;

  getArtist = (id: number) => this._db.filter((item: Artist) => item.id === id);

  createArtist = (artist: Artist) => {
    this._db.push(artist);
  };

  updateArtist = (id: number, artist: Artist) => {
    const itemToUpdate = this.getArtist(id);
    this._db[itemToUpdate[0].id - 1] = artist;
    return this;
  };

  deleteArtist = (id: number) => {
    this._db = this._db.filter((item: Artist) => item.id !== id);
  };

  addAlbumToArtist = (artistId: number, album: Album) => {
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

const repository = new ArtistRepository(artistDb);

repository.createArtist({ id: 1, name: 'Tom' });

const artist = repository.getArtist(1);

console.log(artist);

```
Detta är en så kallad Repository klass, och är en del av ett, inom objekt-orienterad programmering, vanligt design patterna där repository klassen är den som är ansvarig för att prata med databasen.

Tänk att vi får in en request. Istället för att hantera den direkt, så skickar vi vidare ansvaret till repositoryt.

Pseudo kod

```
app.get('/', (req, res) => {
  const stuffFromDatabase = repository.getStuff();
  if(!stuffFromDatabase) {
    res.status(500).send("No stuff to be found")
  }
  res.status(200).send(stuffFromDatabase)
})
```

Objekt-orienterad programmering är egentligen utanför vad som ingår för kursen. Det finns en hel del intressanta saker med det, så se denna sektion som en liten introduktion till det. Fick ni upp intresset för det får ni gärna diskutera vidare med mig eller läsa följande artikel:

https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design

Men det är alltså inget krav för kursen.
