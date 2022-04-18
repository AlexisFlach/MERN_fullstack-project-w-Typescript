import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user';

export const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>('User', UserSchema);
