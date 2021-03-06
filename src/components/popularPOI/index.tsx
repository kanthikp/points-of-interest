import React from 'react';
import Typography from '@material-ui/core/Typography';
import { PointOfInterest } from '../../types/pointOfInterest';
import { Box } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PointOfInterestCard from '../pointOfInterestCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

interface Props {
  pois: PointOfInterest[];
}

export default function PopularPOI({ pois }: Props) {
  return (
    <Box display="flex" justifyContent="flex-start" flexDirection="column">
      <Typography variant="body1" color="textPrimary">
        <strong>Popular around</strong> you
      </Typography>
      {pois.length === 0 ? (
        <Typography variant="body1" color="textPrimary">
          No points of interest found.
        </Typography>
      ) : (
        <Carousel
          responsive={responsive}
          ssr={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          centerMode={true}
          data-testid="carousel"
        >
          {pois && pois.map((poi, index) => <PointOfInterestCard key={index} poi={poi} />)}
        </Carousel>
      )}
    </Box>
  );
}
