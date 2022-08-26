import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { getSingleCharacter } from '../../services/rickMortyApi';

jest.mock('../../services/rickMortyApi.js');

describe('CharacterDetail component', () => {
  beforeEach(() => {
    getSingleCharacter.mockResolvedValue(
      { 
        id: 1, 
        image: 'test.png', 
        name: 'Rick', 
        species: 'Human', 
        status: 'alive'
      }
    );
  });

  it('displays a loading page and then Detail of Character', async() => {
    render(<CharacterDetail />);

    screen.getAllByText('Loading...');

    const characterDetail = await screen.findByTestId('characterDetail');

    return waitFor(() => {
      expect(characterDetail).not.toBeEmptyDOMElement();
      expect(characterDetail).toHaveTextContent('Rick');
    });
  });

  it('display error message on error', async() => {
    getSingleCharacter.mockRejectedValue('Unable to fetch from API');
    render(<CharacterDetail />);

    return screen.findByText('Something went wrong. Try again');
  });
});
