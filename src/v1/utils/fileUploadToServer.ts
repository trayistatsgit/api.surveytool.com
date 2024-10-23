import fs from 'fs';
import path from 'path';
import { config } from '../../config/config';

// Custom mkdirp function to create directories recursively
const mkdirp = (dirPath: string) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(dirPath);
      }
    });
  });
};

export const uploadedFileToServer = async (fileName: string, data: Buffer | string) => {
  const serverFilePath = config.fileUploadPath ?? "" 
  const homeDirectory = path.join( serverFilePath, '\\sptsurveyimages\\');
  const made = await mkdirp(homeDirectory);
  if (made) {
    const filePath = path.join(homeDirectory, fileName);
    const ws = fs.createWriteStream(filePath);
    ws.on('error', (err) => {
      throw err;
    });

    ws.write(data);
    ws.end();
  } else {
    throw new Error('Failed to create the directory');
  }
};
