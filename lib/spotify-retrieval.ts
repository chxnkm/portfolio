import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import axios from 'axios';

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

const getSpotifyToken = async (): Promise<string | null> => {

  if (!clientId || !clientSecret) {
    console.error("Missing Spotify credentials");
    return null;
  }

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      new URLSearchParams({
        grant_type: 'client_credentials'
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
        }
      }
    );

    return response.data.access_token;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Spotify API Error:", error.response.data);
      console.error("Status Code:", error.response.status);
    } else {
      console.error("Error getting Spotify token:", error);
    }
    return null;
  }
};

const getPlaylistTracks = async (playlistType: string): Promise<any[]> => {
  const token = await getSpotifyToken();

  if (!token) {
    console.error("Failed to refresh Spotify token");
    return [];
  }

  const playlistId = await getPlaylistIdFromFirestore(playlistType);

  if (!playlistId) {
    console.error(`Invalid playlist id for ${playlistType}!`);
    return [];
  }

  try {
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    return response.data.items;
  } catch (error) {
    console.error(`Error fetching tracks for ${playlistType}:`, error);
    return [];
  }
};

const getPlaylistIdFromFirestore = async (playlistType: string): Promise<string | null> => {
  const docRef = doc(db, "spotifyLinks", playlistType);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().id;
  } else {
    console.error(`No document found for playlist type: ${playlistType}`);
    return null;
  }
};

const getAllTime = () => getPlaylistTracks("all_time");
const getSpotifyAddiction = () => getPlaylistTracks("current_addiction");

const getSpotifyPlaylist = async (): Promise<string> => {
    const docRef = doc(db, "spotifyLinks", "playlist_of_the_month");
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return docSnap.data().link;
    } else {
      console.error("No such Spotify link!");
      return "";
    }
  };

export {getSpotifyAddiction, getSpotifyPlaylist, getAllTime};

