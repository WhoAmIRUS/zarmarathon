import Url, { UrlObject } from 'url';
import config, { Endpoints } from '../config';
import { RequestOptions } from '../interface/api';

export async function req<T>(endpoint: Endpoints, options?: RequestOptions): Promise<T> {
  const url = Url.format(getUrlWithParamsConfig(endpoint, options));

  return fetch(url).then((res) => res.json());
}

function getConfigPathname(endpointConfig: Endpoints, id?: string | number): string {
  const configPathname = config.client.endpoint[endpointConfig].uri.pathname;

  if (id) {
    return configPathname.replace(':id', `${id}`);
  }

  return configPathname;
}

export function getUrlWithParamsConfig(endpointConfig: Endpoints, options: RequestOptions = {}): UrlObject {
  return {
    protocol: config.client.server.protocol,
    host: config.client.server.host,
    pathname: getConfigPathname(endpointConfig, options.id),
    query: options.query,
  };
}
