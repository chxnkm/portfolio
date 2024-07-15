import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import axios from 'axios';

const getPlaylistTracks = async (): Promise<any[]> => {
  const token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;
  const docRef = doc(db, "spotifyLinks", "all_time");
  const docSnap = await getDoc(docRef);
  let playlistId = "";

  if (docSnap.exists()) {
    playlistId = docSnap.data().id;
  } else {
    console.error("Invalid playlist id!");
    return [];
  }

  const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data.items;
};


const getSpotifyAddiction = async (): Promise<string> => {
  const docRef = doc(db, "spotifyLinks", "current_addiction");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().link;
  } else {
    console.error("No such Spotify link!");
    return "";
  }
};

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

export {getSpotifyAddiction, getSpotifyPlaylist, getPlaylistTracks};

