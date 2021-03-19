import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, getByTestId } from '@testing-library/react';

import Search from '.';

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

it('fires onChange event when modified', () => {
  const onChange = jest.fn();
  act(() => {
    render(<Search onChange={onChange} />, container);
  });

  const textField = getByTestId(container, 'search-text').querySelector('input'); //document.querySelector('[data-testid=search-text]');

  expect(textField?.value).toBe('');

  act(() => {
    fireEvent.change(textField!, { target: { value: 'kak' } });
    expect(textField?.value).toBe('kak');
  });

  expect(onChange).toHaveBeenCalledTimes(1);
});
