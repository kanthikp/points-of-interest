import React, { useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import Search from './search';
import { PointOfInterest } from '../types/pointOfInterest';
import PopularPOI from './popularPOI';
import FeaturedPoi from './featuredPOI';
import { fetchPopular } from '../repo/pointOfInterest';

export default function Main() {
  const [searchString, SetSearchString] = useState('');
  const [poiData, setPoiData] = useState<PointOfInterest[]>([]);

  useEffect(() => {
    fetchPopular().then((resp: any) => {
      setPoiData(resp.data);
    });
  }, []);

  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" p={1} width={1} height="100vh">
        <Box height="20%">
          <Search
            onChange={(searchString: string) => {
              SetSearchString(searchString);
            }}
          />
        </Box>
        <Box height="50%">
          {/* <PointOfInterestCard poi={poi} /> */}
          <PopularPOI
            pois={
              searchString
                ? poiData.filter((poi) => poi.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
                : poiData
            }
          />
        </Box>
        <Box height="30%">
          <FeaturedPoi />
        </Box>
      </Box>
    </Container>
  );
}
