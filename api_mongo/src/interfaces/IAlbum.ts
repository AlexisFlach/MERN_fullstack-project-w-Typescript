import { Document } from 'mongoose';
import { IArtist } from './IArtist';

export interface IAlbum extends Document {
  title: string;
  artist: IArtist;
}
