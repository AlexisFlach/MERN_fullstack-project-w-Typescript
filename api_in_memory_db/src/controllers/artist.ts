import { Request, Response } from 'express';
import { artists } from '../data';
import { IArtist } from '../models/Artist';
import { ArtistRepository } from '../repositories/';

const repo = new ArtistRepository(artists);

export const getAllArtists = async (_: Request, res: Response) =>
  res.send(repo.getArtists());

export const getArtist = (req: Request, res: Response) =>
  res.send(repo.getArtist(Number(req.params.id)));

export const createArtist = (req: Request, res: Response) => {
  const artist: IArtist = req.body;
  try {
    repo.createArtist(artist);
    res.status(201).send(repo.getArtist(artist.id));
  } catch (error) {
    res.status(500).send({ message: 'error occured when creating artist' });
  }
};

export const updateArtist = (req: Request, res: Response) => {
  const artist = req.body;
  repo.updateArtist(Number(req.params.id), artist);
  res.status(200).send(repo.getArtist(Number(req.params.id)));
};

export const deleteArtist = (req: Request, res: Response) => {
  repo.deleteArtist(Number(req.params.id));
  res.status(200).send('Item deleted');
};

export const addAlbumToArtist = (req: Request, res: Response) => {
  repo.addAlbumToArtist(Number(req.params.id), req.body);
  res.status(200).send('Item Added');
};
