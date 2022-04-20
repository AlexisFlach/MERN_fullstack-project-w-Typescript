class ArtistRepository {
  public _db: any[];

  constructor(db: any[]) {
    this._db = db;
  }

  getArtists = () => this._db;

  getArtist = (id: number) => this._db.filter((item: any) => item.id === id);

  createArtist = (artist: any) => {
    this._db.push(artist);
  };

  updateArtist = (id: number, artist: any) => {
    const itemToUpdate = this.getArtist(id);
    this._db[itemToUpdate[0].id - 1] = artist;
    return this;
  };

  deleteArtist = (id: number) => {
    this._db = this._db.filter((item: any) => item.id !== id);
  };

  addAlbumToArtist = (artistId: number, album: any) => {
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
