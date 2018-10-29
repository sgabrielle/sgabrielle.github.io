export const environment = {
  production: false,
  auth: {
    client_id: '2faa2b8241ce4045ac3f19e17cee8de7',
    client_secret: 'eb974d5b11334a7eb9be2d65adf5501c',
    scope: 'user-read-private user-read-email',
    redirect_uri: 'http://localhost:4200/callback',
    response_type: 'token'
  },
  spotify: {
    token_uri: 'https://accounts.spotify.com/api/token',
    spotify_currently_playing: 'https://api.spotify.com/v1/me/player/currently-playing'
  }
};
