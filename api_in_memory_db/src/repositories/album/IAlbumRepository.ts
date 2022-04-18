import { IAlbum } from '../../models/Album';
import { IArtist } from '../../models/Artist';

export interface IAlbumRepository {
  getAlbums: () => IAlbum[];
  getAlbum: (id: number) => IAlbum;
  createAlbum: (album: IAlbum, artis: IArtist) => void;
  updateAlbum: (id: number, album: IAlbum) => void;
  deleteAlbum: (id: number) => void;
}
