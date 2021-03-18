import React, { useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import Search from './search';
import { PointOfInterest } from '../types/pointOfInterest';
import PopularPOI from './popularPOI';
import FeaturedPoi from './featuredPOI';
import { fetchPopular } from '../repo/pointOfInterest';
import colors from '../themes/colors';

export default function Main() {
  const [searchString, SetSearchString] = useState('');
  const [poiData, setPoiData] = useState<PointOfInterest[]>([]);

  useEffect(() => {
    fetchPopular().then((resp: any) => {
      setPoiData(resp.data);
    });
  }, []);

  return (
    <Container fixed>
      <Box display="flex" flexDirection="column" width={1} height="100vh">
        <Box mt={2} height="10%">
          <Search
            onChange={(searchString: string) => {
              SetSearchString(searchString);
            }}
          />
        </Box>
        <Box m={1} height="80%" display="flex" flexDirection="column" bgcolor={colors.LIGHT_BACKGROUND_PANEL}>
          <Box m={4} height="50%">
            {/* <PointOfInterestCard poi={poi} /> */}
            <PopularPOI
              pois={
                searchString
                  ? poiData.filter((poi) => poi.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
                  : poiData
              }
            />
          </Box>
          <Box m={4}>
            <FeaturedPoi />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
