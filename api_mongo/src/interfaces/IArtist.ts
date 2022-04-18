import { Document } from 'mongoose';
import { IAlbum } from './IAlbum';

export interface IArtist extends Document {
  name: string;
  albums: IAlbum[];
}
