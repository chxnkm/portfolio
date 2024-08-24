import { NextResponse } from 'next/server';
import axios from 'axios';

interface Folder {
  name: string;
  path: string;
  external_id: string;
}

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const secretKey = process.env.NEXT_PUBLIC_CLOUDINARY_SECRET_KEY;

export async function GET() {
  try {
    const auth = Buffer.from(`${apiKey}:${secretKey}`).toString('base64');

    // Fetch the list of folders
    const response = await axios.get(`https://api.cloudinary.com/v1_1/${cloudName}/folders/images`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch data from Cloudinary');
    }

    const folders = response.data.folders;

    // Fetch details for each folder
    const folderDetailsPromises = folders.map(async (folder: Folder) => {
      const folderResponse = await axios.get(`https://api.cloudinary.com/v1_1/${cloudName}/resources/by_asset_folder`, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
        params: {
          asset_folder: folder.path,
          max_results: 30,
        },
      });

      if (folderResponse.status !== 200) {
        throw new Error(`Failed to fetch details for folder: ${folder.name}`);
      }

      return { folderName: folder.name, folderData: folderResponse.data };
    });

    // Resolve all folder details requests
    const folderDetails = await Promise.all(folderDetailsPromises);

    return NextResponse.json(folderDetails);
  } catch (error) {
    console.error("Error fetching image folders or details", error);
    return NextResponse.json({ error: 'Failed to fetch image folders or details' }, { status: 500 });
  }
}
