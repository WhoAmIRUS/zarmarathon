import { getUrlWithParamsConfig } from './api';
import { Endpoints } from '../interface/api';

describe('getUrlWithParamsConfig', () => {
  test('enter endpoint and return right protocol, host and pathname', () => {
    expect(getUrlWithParamsConfig(Endpoints.GET_POKEMONS)).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemons',
      },
    });
  });
  test('enter and return query', () => {
    expect(getUrlWithParamsConfig(Endpoints.GET_POKEMONS, { query: { name: '123' } })).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemons',
        query: { name: '123' },
      },
    });
  });
  test('enter id to options', () => {
    expect(getUrlWithParamsConfig(Endpoints.GET_POKEMONS, { query: { name: '123' }, id: 123 })).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemons',
        query: { name: '123' },
      },
    });
    expect(getUrlWithParamsConfig(Endpoints.GET_POKEMON_BY_ID, { query: { name: '123' }, id: '123' })).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemon/123',
        query: { name: '123' },
      },
    });
  });
  test('method post', () => {
    expect(getUrlWithParamsConfig(Endpoints.CREATE_POKEMON)).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemon/create',
      },
    });
  });
  test('method post with body', () => {
    expect(getUrlWithParamsConfig(Endpoints.CREATE_POKEMON, { data: { name: '123' } })).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemon/create',
      },
      body: { name: '123' },
    });
  });
  test('method put', () => {
    expect(getUrlWithParamsConfig(Endpoints.UPDATE_POKEMON, { id: '123', data: { name: '123' } })).toEqual({
      method: 'PUT',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemon/123',
      },
      body: { name: '123' },
    });
  });
  test('method delete', () => {
    expect(getUrlWithParamsConfig(Endpoints.DELETE_POKEMON, { id: '123' })).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemon/123/delete',
      },
    });
  });
});
