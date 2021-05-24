export enum Endpoints {
  GET_POKEMONS = 'getPokemons',
}

interface ConfigClientEndpointUri {
  pathname: string;
}

interface ConfigClientEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  uri: ConfigClientEndpointUri;
}

interface ConfigClientServer {
  protocol: 'http' | 'https';
  host: string;
}

interface ConfigClient {
  server: ConfigClientServer;
  endpoint: {
    [key in Endpoints]: ConfigClientEndpoint;
  };
}

export interface Config {
  client: ConfigClient;
}

const config: Config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      [Endpoints.GET_POKEMONS]: {
        method: 'GET',
        uri: {
          pathname: 'api/v1/pokemons',
        },
      },
    },
  },
};

export default config;
