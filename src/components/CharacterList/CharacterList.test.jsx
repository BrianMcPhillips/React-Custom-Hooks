import React from 'react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/rickMortyApi';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/rickMortyApi.js');

describe('CharacterList component', () => {
  beforeEach(() => {
    getCharacters.mockResolvedValue([
      {
        id: 1,
        image: 'test.png',
        name: 'Rick'
      },
      {
        id: 2,
        image: 'test2.png',
        name: 'Morty'
      }
    ]);
  });

  it('displays a loading page then Character List', async() => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    screen.getAllByText('Loading...');

    const characterList = await screen.findByTestId('characterList');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
      expect(characterList).toHaveTextContent('Rick');
    });
  });

  it('displays error message on error', () => {
    getCharacters.mockRejectedValue('Unable to fetch from API');
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );
    
    return screen.findByText('Something went wrong. Try again');
  });
});
