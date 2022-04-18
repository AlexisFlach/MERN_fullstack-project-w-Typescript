import mongoose, { Schema } from 'mongoose';
import { IArtist } from '../interfaces/IArtist';
import { AlbumSchema } from './Album';

const ArtistSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    albums: [AlbumSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IArtist>('Artist', ArtistSchema);
