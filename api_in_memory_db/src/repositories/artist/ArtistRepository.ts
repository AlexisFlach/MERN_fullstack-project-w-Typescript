import { IAlbum } from '../../models/Album';
import { IArtist } from '../../models/Artist';
import { IArtistRepository } from './IArtistRepository';

export class ArtistRepository implements IArtistRepository {
  public _db: IArtist[];

  constructor(db: IArtist[]) {
    this._db = db;
  }

  getArtists = () => this._db;

  getArtist = (id: number) =>
    this._db.filter((item: IArtist) => item.id === id);

  createArtist = (artist: IArtist) => {
    this._db.push(artist);
  };

  updateArtist = (id: number, artist: IArtist) => {
    const itemToUpdate = this.getArtist(id);
    this._db[itemToUpdate[0].id - 1] = artist;
    return this;
  };

  deleteArtist = (id: number) => {
    this._db = this._db.filter((item: IArtist) => item.id !== id);
  };

  addAlbumToArtist = (artistId: number, album: IAlbum) => {
    const artist = this.getArtist(artistId);
    console.log(artist[0].albums?.push(album));
  };

  getArtistAlbums = (id: number) => {
    const artist = this.getArtist(id);
    if (artist[0].albums) {
      return artist[0].albums;
    }
    return `${artist[0].name}`;
  };
}
