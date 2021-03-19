import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, getByTestId, getByLabelText, getByText } from '@testing-library/react';

import PopularPOI from '.';
import { PointOfInterest } from '../../types/pointOfInterest';

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

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Popular pois rendered correctly', () => {
  const onChange = jest.fn();
  act(() => {
    render(<PopularPOI pois={pois} />, container);
  });

  let carousel = document.querySelector('[class=react-multi-carousel-list]');

  expect(carousel).toBeDefined();

  act(() => {
    render(<PopularPOI pois={[]} />, container);
  });

  carousel = document.querySelector('[class=react-multi-carousel-list]');
  let noPois = getByText(container, 'No points of interest found.');

  expect(carousel).toBeNull();
  expect(noPois).toBeDefined();
});
