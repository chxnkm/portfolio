import { Spotify } from '@/components/Spotify';
import CaptionedPicture from '@/components/CaptionedPicture';
import AlbumGrid from '@/components/AlbumGrid';
import { getSpotifyPlaylist, getPlaylistRelated } from '@/lib/spotify-retrieval';

export const dynamic = "force-dynamic";

// Define the picture data
const pictures = {
  bandPicture: {
    src: '/img/misc/band_splash.webp',
    alt: 'Band Picture',
    caption: 'My band for one of my performances!',
    width: 400
  },
};

async function getSpotifyData() {
  // Call the server-side helper functions directly instead of fetching the API route.
  try {
    const playlistRelated = await getPlaylistRelated();
    const spotifyPlaylist = await getSpotifyPlaylist();

    const addictionTracks = (playlistRelated as any).currentAddictionTracks || [];
    const spotifyAddiction = addictionTracks.map((item: any) => item.track.external_urls.spotify);

    const allTimeTracks = (playlistRelated as any).allTimeTracks || [];
    const albums = allTimeTracks
      .map((item: any) => item.track.album)
      .filter((album: any, index: number, self: any[]) =>
        index === self.findIndex((a) => a.id === album.id)
      );

    return { spotifyAddiction, spotifyPlaylist, albums };
  } catch (error) {
    console.error('Failed to load Spotify data:', error);
    return { spotifyAddiction: [], spotifyPlaylist: '', albums: [] };
  }

}

export default async function MusicPage() {
  const { spotifyAddiction, spotifyPlaylist, albums } = await getSpotifyData();

  return (
    <main>
      <div className='min-w-full flex items-center justify-center'>
        <div className="intro container mx-auto">
          <header className="intro-words text-center">
            <h1 className="mt-8 font-merriweather font-black text-5xl">Music</h1>
            <article className="mt-12 border-[2.5px] p-8 border-slate-700 rounded-lg">
              <q className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-black font-merriweather text-text">Music is life itself. What would this world be without good music?</q>
              <br />
              <p className="sm:text-base text-right font-bold font-merriweather pr-8 mt-4">-Louis Armstrong</p>
            </article>
          </header>
          <section className="mt-12 flex flex-col md:flex-row gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
            <div className='flex-1 order-1 lg:order-0 mb-8 lg:mb-0'>
              <p className="md:text-lg text-justify mt-4 lg:pl-8">
                Music has always been an essential part of my life. Taking up music lessons at a young age (as many Asian parents instructed us to do), I have since embraced music-making wholly and have enjoyed it ever since. It led me to joining concert band in my secondary and tertiary education, as well as leading the jam band in my university hall.
                <br /><br />
                In my free time when I&apos;m not coding, I play the piano, guitar and drums.
              </p>
            </div>
            <CaptionedPicture {...pictures.bandPicture} loading='eager' priority={true} />
          </section>
          <div className="flex flex-col md:flex-row mt-8 gap-4 md:gap-8 lg:gap-12">
            <div className="flex-1 mt-4 md:m-0">
              <h1 className="text-xl lg:text-4xl text-center font-merriweather">Favourite Albums of All Time</h1>
              <AlbumGrid albums={albums} />
            </div>
            <div>
              <h1 className="flex flex-col items-center text-lg lg:text-2xl font-merriweather">Current Song/Album Addiction:</h1>
              {spotifyAddiction && spotifyPlaylist && (
                <div className="flex flex-col items-center mt-4">
                  <Spotify wide link={spotifyAddiction[0]} />
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
