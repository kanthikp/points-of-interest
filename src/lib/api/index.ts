import axios, { AxiosResponse } from 'axios';

import environment from '../environment';
export const apiUrl = `${environment.API_ENDPOINT}`;

export const api = axios.create({
  paramsSerializer: (params: any) => {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }
});

export enum APIResource {
  popular = 'carousel',
  featured = 'featured'
}

export interface FetchInstruction<T> {
  resourcePath: APIResource;
  // params: T;
}

export function fetch<T>({ resourcePath }: FetchInstruction<T>): Promise<AxiosResponse<any>> {
  const url = apiUrl + resourcePath;
  return api.get(url);
}
