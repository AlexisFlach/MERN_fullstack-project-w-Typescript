import { Request, Response } from 'express';
import { AlbumRepository } from '../repositories/album/albumRepository';
import Album from '../models/Album';
import mongoose from 'mongoose';
import Artist from '../models/Artist';

const repo = new AlbumRepository(Album);

export const getAlbum = async (req: Request, res: Response) => {
  const album = await repo.getAlbum(Number(req.params.id));
  res.send(album);
};

export const getAllAlbums = async (req: Request, res: Response) => {
  console.log('Trying');
  const albums = await repo.getAlbums();
  res.status(200).send({ albums });
};

export const createAlbum = (req: Request, res: Response) => {
  const { title, artist } = req.body;

  const a = new Artist({
    name: artist.name,
  });

  const album = new Album({
    _id: new mongoose.Types.ObjectId(),
    title,
    artist: a,
  });

  const save = repo.createAlbum(album);

  return res.status(201).send({
    album: save,
  });
};
