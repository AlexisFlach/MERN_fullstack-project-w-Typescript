import { IAlbum } from '../../interfaces/IAlbum';
import { IArtist } from '../../interfaces/IArtist';
import Album from '../../models/Album';
import Artist from '../../models/Artist';
import { IArtistRepository } from './IArtistRepository';

export class ArtistRepository implements IArtistRepository {
  public _db: typeof Artist;

  constructor(db: typeof Artist) {
    this._db = db;
  }
  addAlbumToArtist = async (artistId: number, album: IAlbum) => {
    const artist = await this.getArtist(artistId);
    if (artist) {
      const a = new Album({
        title: album.title
      });
      artist.albums.push(a);
      artist.save();
      return artist;
    }

    return;
  };

  saveItem = (item: any) => item.save();

  getArtist = async (id: number) => {
    const artist = await this._db.findOne({ id });
    if (artist) {
      return artist;
    } else {
      return null;
    }
  };
  getArtists = async () => {
    const artists = await this._db.find().exec();
    console.log(artists);
    return artists;
  };

  // getAlbum = (id: number) => this._db.filter((item: IAlbum) => item.id === id);

  createArtist = (artist: IArtist) => {
    this.saveItem(artist);
  };

  // updateAlbum = (id: number, album: IAlbum) => {
  //   const itemToUpdate = this.getAlbum(id);
  //   this._db[itemToUpdate[0].id - 1] = album;
  //   return this;
  // };

  // deleteAlbum = (id: number) => {
  //   this._db = this._db.filter((item: IAlbum) => item.id !== id);
  // };
}
