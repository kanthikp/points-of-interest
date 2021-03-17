import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import PointOfInterestCard from '../pointOfInterestCard';
import { PointOfInterest } from '../../types/pointOfInterest';

interface Props {
  pois: PointOfInterest[];
}

export default function FeaturedPoi({ pois }: Props) {
  return (
    <Box display="flex">
      <Typography>Featured</Typography>
      <Box display="flex" alignItems="center">
        {pois && pois.map((poi, index) => <PointOfInterestCard key={index} poi={poi} />)}
      </Box>
    </Box>
  );
}
