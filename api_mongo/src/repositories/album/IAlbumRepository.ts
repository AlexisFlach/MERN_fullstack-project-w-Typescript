import { IAlbum } from '../../interfaces/IAlbum';
import { IArtist } from '../../interfaces/IArtist';

export interface IAlbumRepository {
  getAlbums: () => any;
  getAlbum: (id: number) => Promise<(IAlbum & { _id: any }) | null>;
  createAlbum: (album: IAlbum) => void;
  // updateAlbum: (id: number, album: IAlbum) => void;
  // deleteAlbum: (id: number) => void;
}
