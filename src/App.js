import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponseUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // data layer -> dispatch = gun
  const [{user, token}, dispatch] = useDataLayerValue(); 

  // run code based on given condition
  useEffect(() => {
    const hash = getTokenFromResponseUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist('37i9dQZF1DXd1BY2r7FMhB').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      });
    }
  },[]);

  // console.log("USER:",user);
  // console.log("TOKEN:",token);
  return (
    <div className="app">
     {
      token ? (<Player spotify={spotify}/>) : (<Login/>)
     }
    </div>
  );
}

export default App;