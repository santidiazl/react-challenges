const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const BASE_URL = 'https://api.spotify.com/v1';
const AUTH_URL = 'https://accounts.spotify.com/api/token';

const getPostOptions = (client_id, client_secret) => ({
  method: 'POST',
  headers: {
    Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

const api = {
  requestToken: async () => {
    const uri = AUTH_URL;
    const paramsString = new URLSearchParams({
      grant_type: 'client_credentials',
    });

    const resource = uri + '?' + paramsString;

    const options = getPostOptions(CLIENT_ID, CLIENT_SECRET);
    return await (await fetch(resource, options)).json();
  },
  async fetchResource(endpoint) {
    const uri = `${BASE_URL}/browse/${endpoint}`;
    const params = new URLSearchParams({
      country: 'CA',
    });
    const resource = `${uri}?${params}`;
    const { access_token } = await this.requestToken();

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    };

    return await (await fetch(resource, options)).json();
  },
};

export default api;
