import Url from 'url';
import config from '../config';
import { Endpoints, FetchOption, GetUrlWithParamsConfig, RequestOptions } from '../interface/api';

export async function req<T>(endpoint: Endpoints, options?: RequestOptions): Promise<T> {
  const { uri, method, body } = getUrlWithParamsConfig(endpoint, options);
  const fetchOptions: FetchOption = {
    method,
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  return fetch(Url.format(uri), fetchOptions).then((res) => res.json());
}

function getConfigPathname(endpointConfig: Endpoints, id?: string | number): string {
  const configPathname = config.client.endpoint[endpointConfig].uri.pathname;

  if (id) {
    return configPathname.replace(':id', `${id}`);
  }

  return configPathname;
}

export function getUrlWithParamsConfig(
  endpointConfig: Endpoints,
  options: RequestOptions = {},
): GetUrlWithParamsConfig {
  return {
    method: config.client.endpoint[endpointConfig].method,
    uri: {
      protocol: config.client.server.protocol,
      host: config.client.server.host,
      pathname: getConfigPathname(endpointConfig, options.id),
      query: options.query,
    },
    body: options.data,
  };
}
