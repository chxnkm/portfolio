'use client'

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { getSpotifyAddiction, getSpotifyPlaylist, getAllTime } from "@/lib/spotify-retrieval";

// Dynamic imports
const Spotify = dynamic(() => import("@/components/Spotify").then((mod) => mod.Spotify || mod.Spotify));
const UnclickableImage = dynamic(() => import("@/components/UnclickableImage"));
const CaptionedPicture = dynamic (() => import("@/components/CaptionedPicture"));

const pictures = {
    bandPicture : {
        src: '/img/misc/band_splash.webp',
        alt: 'Band Picture',
        caption: 'My band for one of my performances!',
        width: 400
    },
  };

function handleSearch(albumNameArtist: string) {
  const searchQuery = encodeURIComponent(albumNameArtist);
  const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
  window.open(searchUrl, '_blank');
}

export default function Home() {
  const [spotifyAddiction, setSpotifyAddiction] = useState<any>("");
  const [spotifyPlaylist, setSpotifyPlaylist] = useState<string>("");
  const [albums, setFavoriteAlbums] = useState<any[]>([]);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const addictionTracks = await getSpotifyAddiction();
        const addiction = addictionTracks.map((item: any) => item.track.external_urls.spotify);
        setSpotifyAddiction(addiction);

        const playlist = await getSpotifyPlaylist();
        setSpotifyPlaylist(playlist);

        const allTimeTracks = await getAllTime();
        const uniqueAlbums = allTimeTracks
          .map((item: any) => item.track.album)
          .filter((album: any, index: number, self: any[]) =>
            index === self.findIndex((a) => a.id === album.id)
          );
        setFavoriteAlbums(uniqueAlbums);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetchSpotifyData();
  }, []);

  return (
    <main>
      <div className='min-w-full flex items-center justify-center animate-slideUp'>
        <div className="intro container mx-auto">
          <header className="intro-words text-center">
            <h1 className="mt-8 font-belsey font-black">Music</h1>
            <article className="mt-12 border-[2.5px] p-8 border-slate-700 rounded-lg">
              <q className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-black font-belsey text-text">Music is life itself. What would this world be without good music?</q>
              <br />
              <p className="text-sm sm:text-base text-right font-bold font-belsey pr-8 mt-4">-Louis Armstrong</p>
            </article>
          </header>
          <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
            <div className='order-2 lg:order-none mb-8 lg:mb-0'>
              <p className="text-sm md:text-lg text-justify mt-4 lg:pl-8">
                Music has always been an essential part of my life. Taking up music lessons at a young age (as many Asian parents instructed us to do), I have since embraced music-making wholly and have enjoyed it ever since. It led me to joining concert band in my secondary and tertiary education, as well as leading the jam band in my university hall.
                <br /><br />
                In my free time when I&apos;m not coding, I play the piano, guitar and drums.
              </p>
            </div>
            <CaptionedPicture {...pictures.bandPicture} />
          </section>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-4 md:gap-8 lg:gap-12">
            <div className="col-span-2 mt-4 md:m-0">
              <h1 className="text-xl lg:text-4xl text-center font-belsey">Favourite Albums of All Time</h1>
              <div className="grid grid-cols-4 mt-8">
                {albums.map((album) => (
                  <div key={album.id} className="col-span-1 px-2 md:px-4 pb-2 md:pb-8">
                    <div
                      className="relative overflow-auto cursor-pointer transition-transform duration-300 hover:scale-110"
                      onClick={() => handleSearch(`${album.artists[0].name} ${album.name}`)}
                    >
                      <img
                        src={album.images[0].url}
                        alt={album.name}
                        className="w-full h-full object-cover transition-opacity duration-300"
                      />
                      <p className="text-[0.4rem] lg:text-xs font-semibold">{album.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="flex flex-col items-center text-lg lg:text-2xl font-belsey">Current Song/Album Addiction:</h1>
              {spotifyAddiction && spotifyPlaylist && (
                <div className="flex flex-col items-center mt-4">
                  <Spotify wide link={spotifyAddiction} />
                  <Spotify className="mt-4" link={spotifyPlaylist} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
