import { NextResponse } from 'next/server';
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

    const response = NextResponse.json({ spotifyAddiction, spotifyPlaylist, albums });
    response.headers.set('Cache-Control', 'no-store'); // Disable caching
    return response;
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return NextResponse.json({ error: 'Failed to fetch Spotify data' }, { status: 500 });
  }
}
