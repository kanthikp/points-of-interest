import { map } from 'ramda';
import { APIResource, fetch } from '../lib/api';
import { PointOfInterest } from '../types/pointOfInterest';

function mapToModel(data: object): PointOfInterest {
  return data as PointOfInterest;
}

export async function fetchPopular(): Promise<Array<PointOfInterest>> {
  return fetch({ resourcePath: APIResource.popular }).then((response) => map(mapToModel, response.data));
}

export async function fetchFeatured(): Promise<Array<PointOfInterest>> {
  return fetch({ resourcePath: APIResource.featured }).then((response) => map(mapToModel, response.data));
}
