import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const directoryPath = path.join(process.cwd(), 'public/img'); // Adjust this path as needed

  return new Promise((resolve) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        resolve(NextResponse.json({ error: 'Failed to read directory' }, { status: 500 }));
        return;
      }

      // Filter out non-image files if needed
      const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
      resolve(NextResponse.json({ files: imageFiles }, { status: 200 }));
    });
  });
}
