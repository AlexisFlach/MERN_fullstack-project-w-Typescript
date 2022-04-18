import { IArtist } from './Artist';

export interface IAlbum {
  id: number;
  title: string;
  artist: IArtist;
}
