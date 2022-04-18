import { IAlbum } from './Album';

export interface IArtist {
  id: number;
  name: string;
  albums?: IAlbum[];
}
