// with object annotation

const player = {
  id: 1,
  name: 'Alex',
  weapons: ['sword', 'axe'],
};

const printPlayer = (player: { id: number; name: string; weapons: any[] }) => {
  console.log(`Id: ${player.id}`);
  console.log(`Id: ${player.name}`);
  console.log(`Id: ${player.weapons}`);
};

// with interface annotation

interface Player {
  id: number;
  name: string;
  weapons: any[];
  born: Date;
  attack: () => void;
  summary(): string;
  alive: boolean;
}

const printPlayer2 = (player: Player) => {
  console.log(`Id: ${player.id}`);
  console.log(`Id: ${player.name}`);
  console.log(`Id: ${player.weapons}`);
};
