import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import axios from 'axios';

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
let spotifyToken: string | null = null;

const fetchSpotifyToken = async () => {
  if (!clientId || !clientSecret) {
    console.error("Missing Spotify credentials");
    return null;
  }

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', //auth for spotify
      new URLSearchParams({ grant_type: 'client_credentials' }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
        }
      }
    );

    return response.data.access_token;
  } catch (error) {
    handleAxiosError(error, "Spotify API Error");
    return null;
  }
};

const getSpotifyToken = async () => {
  if (!spotifyToken) {
    spotifyToken = await fetchSpotifyToken();
  }
  return spotifyToken;
};

const handleAxiosError = (error: any, context: string) => {
  if (axios.isAxiosError(error) && error.response) {
    console.error(`${context}:`, error.response.data);
    console.error("Status Code:", error.response.status);
  } else {
    console.error(`Error: ${context}`, error);
  }
};

const fetchFromFirestore = async (collection: string, document: string) => {
  try {
    const docRef = doc(db, collection, document);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error(`No document found for ${document}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching document: ${document}`, error);
    return null;
  }
};

const getPlaylistTracks = async (playlistType: string)=> {
  const token = await getSpotifyToken();
  if (!token) {
    console.error("Failed to refresh Spotify token");
    return [];
  }

  const playlistData = await fetchFromFirestore("spotifyLinks", playlistType);
  if (!playlistData || !playlistData.id) {
    console.error(`Invalid playlist id for ${playlistType}!`);
    return [];
  }

  try {
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistData.id}/tracks`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data.items;
  } catch (error) {
    handleAxiosError(error, `Fetching tracks for ${playlistType}`);
    return [];
  }
};

const getPlaylistLink = async (playlistType: string): Promise<string> => {
  const playlistData = await fetchFromFirestore("spotifyLinks", playlistType);
  if (playlistData && playlistData.link) {
    return playlistData.link;
  } else {
    console.error(`No link found for playlist type: ${playlistType}`);
    return "";
  }
};

const getAllTime = () => getPlaylistTracks("all_time");
const getSpotifyAddiction = () => getPlaylistTracks("current_addiction");
const getSpotifyPlaylist = () => getPlaylistLink("playlist_of_the_month");

export { getSpotifyAddiction, getSpotifyPlaylist, getAllTime };
