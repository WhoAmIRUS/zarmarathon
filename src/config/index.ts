import { Endpoints, Method, Protocol } from '../interface/api';

interface ConfigClientEndpointUri {
  pathname: string;
}

interface ConfigClientEndpoint {
  method: Method;
  uri: ConfigClientEndpointUri;
}

interface ConfigClientServer {
  protocol: Protocol;
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
      [Endpoints.GET_POKEMON_BY_ID]: {
        method: 'GET',
        uri: {
          pathname: 'api/v1/pokemon/:id',
        },
      },
      [Endpoints.CREATE_POKEMON]: {
        method: 'POST',
        uri: {
          pathname: 'api/v1/pokemon/create',
        },
      },
      [Endpoints.UPDATE_POKEMON]: {
        method: 'PUT',
        uri: {
          pathname: 'api/v1/pokemon/:id',
        },
      },
      [Endpoints.DELETE_POKEMON]: {
        method: 'DELETE',
        uri: {
          pathname: 'api/v1/pokemon/:id/delete',
        },
      },
      [Endpoints.GET_POKEMON_TYPES]: {
        method: 'GET',
        uri: {
          pathname: 'api/v1/types',
        },
      },
    },
  },
};

export default config;
