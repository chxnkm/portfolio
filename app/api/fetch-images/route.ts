import { NextResponse } from 'next/server';

interface Folder {
  name: string;
  path: string;
  external_id: string;
}

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const secretKey = process.env.CLOUDINARY_SECRET_KEY;

export async function GET() {
  try {
    const auth = Buffer.from(`${apiKey}:${secretKey}`).toString('base64');
    
    // Fetch the list of folders
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/folders/images`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from Cloudinary');
    }

    const data = await response.json();
    const folders = data.folders;

    // Fetch details for each folder
    const folderDetailsPromises = folders.map(async (folder: Folder) => {
      const folderResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/by_asset_folder?asset_folder=${folder.path}&max_results=30`, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      if (!folderResponse.ok) {
        throw new Error(`Failed to fetch details for folder: ${folder.name}`);
      }

      const folderData = await folderResponse.json();
      return { folderName: folder.name, folderData };
    });

    // Resolve all folder details requests
    const folderDetails = await Promise.all(folderDetailsPromises);

    return NextResponse.json(folderDetails);
  } catch (error) {
    console.error("Error fetching image folders or details", error);
    return NextResponse.json({ error: 'Failed to fetch image folders or details' }, { status: 500 });
  }
}
