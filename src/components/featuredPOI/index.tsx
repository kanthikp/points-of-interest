import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import PointOfInterestCard from '../pointOfInterestCard';
import { PointOfInterest } from '../../types/pointOfInterest';
import { fetchFeatured } from '../../repo/pointOfInterest';

export default function FeaturedPoi() {
  const [poiData, setPoiData] = useState<PointOfInterest[]>([]);

  useEffect(() => {
    fetchFeatured().then((resp: any) => {
      setPoiData(resp.data);
    });
  }, []);

  return (
    <Box display="flex">
      <Typography>Featured</Typography>
      <Box display="flex" alignItems="center">
        {poiData.length > 0 && poiData.map((poi, index) => <PointOfInterestCard key={index} poi={poi} />)}
      </Box>
    </Box>
  );
}
