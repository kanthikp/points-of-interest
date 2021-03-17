import * as t from 'io-ts';

export function tOptional<T extends t.Mixed>(someType: T) {
  return t.union([t.null, t.undefined, someType]);
}

export const PointOfInterestCodec = t.type({
  title: t.string,
  img: t.string,
  location: t.string
});

export type PointOfInterest = t.TypeOf<typeof PointOfInterestCodec>;
