let Access_token;

const client_id = "875b64df8d734383893b9a6f25c631e1";
const redirect_URI = 'https://jammming-react.netlify.com/';

const Spotify = {
  getAccessToken(){
    if(Access_token){
      return Access_token;
    }

    //check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if(accessTokenMatch && expiresInMatch){
      Access_token = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      //this clears the parametrs allowing us to grab a new access token when it expires
      window.setTimeout(() => Access_token = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return Access_token;
    }
    else {
      const accessUri = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_URI}`
      window.location = accessUri;
    }
  },

  search(term){
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => response.json())
    .then(jsonResponse => {
      if(!jsonResponse.tracks){
        return [];
      }
      return jsonResponse.tracks.items.map(track => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          uri: track.uri
        }
      })
    })
  },

  savePlaylist(name, trackUris){
    if(!name || !trackUris.length){
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch(`https://api.spotify.com/v1/me`, {
      headers: headers
    }).then(response => response.json())
    .then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: name })
      }).then(response => response.json())
      .then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackUris })
        })
      })
    })
  }
}

export default Spotify;