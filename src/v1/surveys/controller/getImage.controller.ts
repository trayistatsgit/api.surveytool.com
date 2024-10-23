import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { config } from '../../../config/config';

const homeDirectory = path.join(config.fileUploadPath || '', '\\sptsurveyimages\\');

export const getImage = (req: Request, res: Response) => {
  const { fileName } = req.params;
  const filePath = path.join(homeDirectory, fileName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ message: 'File not found' });
    }
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(500).json({ message: 'Failed to retrieve the file', error: err.message });
      }
    });
  });
};
