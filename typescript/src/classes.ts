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
