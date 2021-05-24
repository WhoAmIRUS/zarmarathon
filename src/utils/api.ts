import Url from 'url';
import config, { Endpoints } from '../config';

export async function req(endpoint: Endpoints) {
  const url = Url.format(getUrlWithParamsConfig(endpoint));

  return fetch(url).then((res) => res.json());
}

export function getUrlWithParamsConfig(endpointConfig: Endpoints) {
  return {
    protocol: config.client.server.protocol,
    host: config.client.server.host,
    pathname: config.client.endpoint[endpointConfig].uri.pathname,
  };
}
