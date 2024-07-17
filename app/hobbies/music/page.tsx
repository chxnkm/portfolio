'use client'

import { useEffect, useState } from "react";
import { Spotify } from "@/components/ui/Spotify";
import { getSpotifyAddiction, getSpotifyPlaylist, getAllTime } from "@/lib/spotify-retrieval";
import UnclickableImage from "@/components/UnclickableImage";

function handleSearch(albumNameArtist: string) {
  const searchQuery = encodeURIComponent(albumNameArtist);
  const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
  window.open(searchUrl, '_blank');
}

export default function Home() {
  const [spotifyAddiction, setSpotifyAddiction] = useState<any>("");
  const [spotifyPlaylist, setSpotifyPlaylist] = useState<string>("");
  const [albums, setAlbums] = useState<any[]>([]);

  useEffect(() => {
    const fetchSpotifyAddiction = async () => {
      try {
        const tracks = await getSpotifyAddiction();
        const trackUrls = tracks.map((item: any) => item.track.external_urls.spotify);
        setSpotifyAddiction(trackUrls);
        console.log(trackUrls)
      } catch (error) {
        console.error("Error fetching Spotify addiction tracks:", error);
        setSpotifyAddiction([]);
      }
    };
    const fetchSpotifyPlaylist = async () => {
      const link = await getSpotifyPlaylist();
      setSpotifyPlaylist(link);
    };
    const fetchPlaylistTracks = async () => {
      const tracks = await getAllTime();
      const uniqueAlbums = tracks
        .map((item: any) => item.track.album)
        .filter((album: any, index: number, self: any[]) =>
          index === self.findIndex((a) => a.id === album.id)
        );
      setAlbums(uniqueAlbums);
    };

    fetchSpotifyAddiction();
    fetchSpotifyPlaylist();
    fetchPlaylistTracks();
  }, []);

  return (
    <main>
      <div className='min-w-full flex items-center justify-center animate-slideUp'>
        <div className="intro container mx-auto">
          <div className="intro-words text-center">
            <h1 className="mt-8 text-5xl font-belsey font-black">Music</h1>
          </div>
          <div className="mt-12 border-4 p-8 border-slate-700 rounded-lg">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-belsey">
              <span className="text-cpfGreen">&quot;Music is life itself. What would this world be without good music?&quot;</span>
              <br />
              <p className="text-sm sm:text-md text-right pr-8 mt-4">-Louis Armstrong</p>
            </h1>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                <div className='order-2 lg:order-none mb-8 lg:mb-0'>
                    <p className="text-sm md:text-lg text-justify font-medium mt-4 lg:pl-8">
                        Music has always been an essential part of my life. Taking up music lessons at a young age (as many Asian parents instructed us to do), I have since embraced music-making wholly and have enjoyed it ever since. It led me to joining concert band in my secondary and tertiary education, as well as leading the jam band in my university hall.
                        <br/><br/>
                        In my free time when I&apos;m not coding, I play the piano, guitar and drums.
                    </p>   
                </div>
                <div className="docCentral flex flex-col items-center order-1">
                    <UnclickableImage src="/img/misc/band-splash.jpg" width={400} alt="Me and my band!" priority={true}/>
                    <p className='mt-2 font-medium text-center'>My band for one of my performances!</p>
                </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-4 md:gap-8 lg:gap-12">
            <div className="col-span-2 mt-4 md:m-0">
              <h1 className="text-xl lg:text-4xl text-center font-belsey">Favourite Albums of All Time</h1>
              <div className="grid grid-cols-4 mt-8">
                {albums.map((album) => (
                  <div key={album.id} className="col-span-1 px-4 pb-8">
                    <div
                      className="relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110"
                      onClick={() => handleSearch(`${album.artists[0].name} ${album.name}`)}
                    >
                      <img
                        src={album.images[0].url}
                        alt={album.name}
                        className="w-full h-full object-cover transition-opacity duration-300"
                      />
                      <p className="text-xs font-semibold">{album.name}</p>
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
