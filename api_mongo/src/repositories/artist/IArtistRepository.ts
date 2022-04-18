import { IAlbum } from '../../interfaces/IAlbum';
import { IArtist } from '../../interfaces/IArtist';

export interface IArtistRepository {
  getArtists: () => any;
  getArtist: (id: number) => Promise<(IArtist & { _id: any }) | null>;
  createArtist: (artist: IArtist) => void;
  saveItem: (item: any) => Promise<void>;
  addAlbumToArtist: (artistId: number, album: IAlbum) => void;
  // updateAlbum: (id: number, album: IAlbum) => void;
  // deleteAlbum: (id: number) => void;
}
