import { Request, Response } from 'express';
import { ArtistRepository } from '../repositories/artist/artistRepository';
import Artist from '../models/Artist';
import mongoose from 'mongoose';
import Album from '../models/Album';

const repo = new ArtistRepository(Artist);

export const getArtist = async (req: Request, res: Response) => {
  const artist = await repo.getArtist(Number(req.params.id));
  res.send(artist);
};

export const getAllArtists = async (req: Request, res: Response) => {
  const artists = await repo.getArtists();
  res.status(200).send({ artists });
};

export const addAlbumToArtist = async (req: Request, res: Response) => {
  const { title } = req.body;

  const album = new Album({
    _id: new mongoose.Types.ObjectId(),
    title,
  });

  const artist = await repo.addAlbumToArtist(Number(req.params.id), album);

  return res.status(200).json({ artist });
};

export const createArtist = (req: Request, res: Response) => {
  const { name, albums } = req.body;

  const artist = new Artist({
    _id: new mongoose.Types.ObjectId(),
    name,
    albums,
  });

  repo.createArtist(artist);

  return res.status(201).send({
    artist,
  });
};
