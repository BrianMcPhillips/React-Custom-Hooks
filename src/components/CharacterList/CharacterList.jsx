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

  return (

  );
};

export default CharacterList;
