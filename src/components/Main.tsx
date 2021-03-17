import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import Search from './search';
import { PointOfInterest } from '../types/pointOfInterest';
import PopularPOI from './popularPOI';
import FeaturedPoi from './featuredPOI';

const pois: PointOfInterest[] = [
  {
    title: 'Kakadu National Park',
    img: 'https://placeimg.com/240/240/nature',
    location: 'Jabiru NT'
  },
  {
    title: 'Uluru-Kata Tjuta National Park',
    img: 'https://placeimg.com/640/480/nature',
    location: 'Uluru NT'
  },
  {
    title: 'Royal National Park',
    img: 'https://placeimg.com/400/100/nature',
    location: 'Royal National Park NSW'
  },
  {
    title: 'Kosciuszko National Park',
    img: 'https://placeimg.com/240/600/nature',
    location: 'NSW'
  },
  {
    title: 'Purnululu National Park',
    img: 'https://placeimg.com/1200/400/nature',
    location: 'Western Australia'
  },
  {
    title: 'Wilsons Promontory National Park',
    img: 'https://placeimg.com/320/320/nature',
    location: 'Wilsons Promontory VIC'
  },
  {
    title: 'Booderee National Park',
    img: 'https://placeimg.com/640/480/nature',
    location: 'Jervis Bay JBT'
  }
];
export default function Main() {
  const [searchString, SetSearchString] = useState('');
  return (
    <Container maxWidth="md" style={{ background: 'red' }}>
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
                ? pois.filter((poi) => poi.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
                : pois
            }
          />
        </Box>
        <Box height="30%">
          <FeaturedPoi pois={pois} />
        </Box>
      </Box>
    </Container>
  );
}
