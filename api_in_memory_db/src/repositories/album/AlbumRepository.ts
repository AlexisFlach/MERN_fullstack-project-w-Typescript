import { IAlbum } from '../../models/Album';
import { IAlbumRepository } from './IAlbumRepository';

export class AlbumRepository implements IAlbumRepository {
  public _db: any;

  constructor(db: IAlbum[]) {
    this._db = db;
  }

  getAlbums = () => this._db;

  getAlbum = (id: number) => this._db.filter((item: IAlbum) => item.id === id);

  createAlbum = (album: IAlbum) => {
    this._db.push(album);
  };

  updateAlbum = (id: number, album: IAlbum) => {
    const itemToUpdate = this.getAlbum(id);
    this._db[itemToUpdate[0].id - 1] = album;
    return this;
  };

  deleteAlbum = (id: number) => {
    this._db = this._db.filter((item: IAlbum) => item.id !== id);
  };
}
