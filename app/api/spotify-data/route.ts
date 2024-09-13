import { getSpotifyPlaylist, getPlaylistRelated } from "@/lib/spotify-retrieval";

export async function GET() {
  try {
    const playlistRelated = await getPlaylistRelated();
    const spotifyPlaylist = await getSpotifyPlaylist();

    const addictionTracks = playlistRelated.currentAddictionTracks;
    const spotifyAddiction = addictionTracks.map((item: any) => item.track.external_urls.spotify);

    const allTimeTracks = playlistRelated.allTimeTracks;
    const albums = allTimeTracks
      .map((item: any) => item.track.album)
      .filter((album: any, index: number, self: any[]) =>
        index === self.findIndex((a) => a.id === album.id)
      );

    const data = { spotifyAddiction, spotifyPlaylist, albums };

    const response = new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store must-revalidate' // Disable caching
      }
    });

    return response;
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return new Response(JSON.stringify({ error: 'Failed to fetch Spotify data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

