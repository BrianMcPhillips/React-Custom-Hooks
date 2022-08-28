import React from 'react';
import { useCharacters } from '../../hooks/characters';
import Character from '../Character/Character';

const CharacterList = () => {
  const { loading, characters, error, page, pageUp, pageDown } = useCharacters();
  const characterStuff = characters.map(character => 
    <li key={character.id}>
      <Character {...character}/>
    </li>  
  );

  if(loading) return <h1>Loading...</h1>;
  if(error) return <h1>Something went wrong. Try again</h1>;
  return (
    <div>
      <ul data-testid="characterList">
        {characterStuff}
      </ul>
      {page}
      {
        page > 1 && <button onClick={pageDown}>-</button>
      }
      <button onClick={pageUp}>+</button>
    </div>
  );
};

export default CharacterList;
