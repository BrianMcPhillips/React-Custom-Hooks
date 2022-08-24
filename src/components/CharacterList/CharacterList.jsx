import React from 'react';
import { useCharacters } from '../../hooks/characters';
import Character from '../Character/Character';

const CharacterList = () => {
  const { loading, characters, error } = useCharacters();
  const characterStuff = characters.map(character => 
    <li key={character.id}>
      <Character {...character}/>
    </li>  
  );

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Something went wrong. Try again</h1>
  return (
    
  );
};

export default CharacterList;
