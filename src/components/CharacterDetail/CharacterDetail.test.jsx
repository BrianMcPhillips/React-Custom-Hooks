import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  it('displays a loading page', () => {
    render(<CharacterDetail />);

    screen.getAllByText('Loading...');
  });
});
