import { Request, Response } from 'express';
import { albums } from '../data';
import { AlbumRepository } from '../repositories/';

const repo = new AlbumRepository(albums);

export const getAllAlbums = async (_: Request, res: Response) =>
  res.send(repo.getAlbums());

export const getAlbum = (req: Request, res: Response) =>
  res.send(repo.getAlbum(Number(req.params.id)));

export const createAlbum = (req: Request, res: Response) => {
  const album = req.body;
  repo.createAlbum(album);
  res.status(201).send(repo.getAlbum(album.id));
};

export const updateAlbum = (req: Request, res: Response) => {
  const album = req.body;
  repo.updateAlbum(Number(req.params.id), album);
  res.status(200).send(repo.getAlbum(Number(req.params.id)));
};

export const deleteAlbum = (req: Request, res: Response) => {
  repo.deleteAlbum(Number(req.params.id));
  res.status(200).send('Item deleted');
};
