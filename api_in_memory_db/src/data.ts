import { IAlbum } from './models/Album';
import { IArtist } from './models/Artist';

export const artists: IArtist[] = [
  {
    id: 1,
    name: 'Bob Dylan',
    albums: [],
  },
  {
    id: 2,
    name: 'Leonard Cohen',
  },
  {
    id: 3,
    name: 'Lana Del Rey',
  },
];

export const albums: IAlbum[] = [
  {
    id: 1,
    title: 'John Wesley Harding',
    artist: artists[0],
  },
  {
    id: 2,
    title: 'Ten new songs',
    artist: artists[1],
  },
  {
    id: 3,
    title: 'Blue Banisters',
    artist: artists[2],
  },
];
