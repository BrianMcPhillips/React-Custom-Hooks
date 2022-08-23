import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <Character 
        name="something" 
        image="https://www.something.com/image/200/200"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
