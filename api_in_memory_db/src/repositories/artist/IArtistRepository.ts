import { IAlbum } from '../../models/Album';
import { IArtist } from '../../models/Artist';

export interface IArtistRepository {
  getArtists: () => IArtist[];
  getArtist: (id: number) => any;
  createArtist: (artist: IArtist) => void;
  updateArtist: (id: number, Artist: IArtist) => void;
  deleteArtist: (id: number) => void;
  addAlbumToArtist: (artistId: number, album: IAlbum) => void;
  getArtistAlbums: (id: number) => IAlbum[] | string;
}
