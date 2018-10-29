// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

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
    auth: 'https://accounts.spotify.com/authorize',
    token_uri: 'https://accounts.spotify.com/api/token',
    spotify_currently_playing: 'api.spotify.com/v1/me/player/currently-playing'
  }
};
