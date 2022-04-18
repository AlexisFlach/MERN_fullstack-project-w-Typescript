import { IAlbum } from '../../interfaces/IAlbum';
import Album from '../../models/Album';
import { IAlbumRepository } from './IAlbumRepository';

export class AlbumRepository implements IAlbumRepository {
  
  public _db: typeof Album;

  constructor(db: typeof Album) {
    this._db = db;
  }

  getAlbum = async (id: number) => {
    const album = await this._db.findOne({ id });
    if (album) {
      return album;
    } else {
      return null;
    }
  };
  getAlbums = async () => {
    const albums = await this._db.find().exec();
    return albums;
  };

  createAlbum = (album: IAlbum) => {
    album.save();
    return;
  };
}
