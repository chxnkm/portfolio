'use client'

import { useEffect, useState } from "react";
import { Spotify } from "@/components/ui/Spotify";
import { getSpotifyAddiction, getSpotifyPlaylist, getPlaylistTracks} from "@/lib/spotify-retrieval";

function handleSearch(albumName: string) {
    const searchQuery = encodeURIComponent(albumName);
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    window.open(searchUrl, '_blank');
  }

export default function Home() {
    const [spotifyAddiction, setSpotifyAddiction] = useState<string>("");
    const [spotifyPlaylist, setSpotifyPlaylist] = useState<string>("");
    const [albums, setAlbums] = useState<any[]>([]);

    useEffect(() => {
      const fetchSpotifyAddiction = async () => {
        const link = await getSpotifyAddiction();
        setSpotifyAddiction(link);
      };
      const fetchSpotifyPlaylist = async () => {
        const link = await getSpotifyPlaylist();
        setSpotifyPlaylist(link);
      };
      const fetchPlaylistTracks = async () => {
        const tracks = await getPlaylistTracks();
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
                <span className="text-cpfGreen">"Music is life itself. What would this world be without good music?"</span>
                <br />
                <p className="text-sm sm:text-md text-right pr-8 mt-4">-Louis Armstrong</p>
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 p-8">
              <div className="col-span-1">
                <h1 className="text-4xl font-belsey">Current Addiction:</h1>
                {spotifyAddiction && spotifyPlaylist && (
                  <div className="flex flex-col items-center mt-4">
                    <Spotify wide link={spotifyAddiction} />
                    <Spotify className="mt-4" link={spotifyPlaylist} />
                  </div>
                )}
              </div>
              <div className="col-span-2 mt-4 md:m-0 px-8">
                <h1 className="text-4xl text-center font-belsey">Favourite Albums of All Time</h1>
                <div className="grid grid-cols-4">
                  {albums.map((album) => (
                    <div key={album.id} className="col-span-1 p-4">
                    <div 
                      className="relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110"
                      onClick={() => handleSearch(album.name)}
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
            </div>
          </div>
        </div>
      </main>
    );
}
