// components/AlbumGrid.tsx
'use client'

import Image from "next/image";

interface AlbumGridProps {
  albums: any[];
}

export default function AlbumGrid({ albums }: AlbumGridProps) {
  const handleSearch = (albumNameArtist: string) => {
    const searchQuery = encodeURIComponent(albumNameArtist);
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className={`grid ${albums.length > 8 && 'lg:grid-cols-5'} grid-cols-4 mt-8`}>
      {albums.map((album) => (
        <div key={album.id} className="col-span-1 px-2 md:px-4 pb-2 md:pb-8">
          <div
            className="relative overflow-auto cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => handleSearch(`${album.artists[0].name} ${album.name}`)}
          >
            <Image
              src={album.images[0].url}
              alt={album.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              width={0}
              height={0}
              priority
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            {albums.length <= 8 && (
              <p className="text-[0.4rem] lg:text-xs font-semibold">{album.name}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}