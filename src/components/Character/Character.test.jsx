import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Character from './Character';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Character 
          name="something" 
          image="https://www.something.com/image/200/200"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
