import React from 'react';
import { useCharacters } from '../../hooks/characters';
import Character from '../Character/Character';
import styles from './CharacterList.module.css';

const CharacterList = () => {
  const { 
    loading, 
    characters, 
    error, 
    page, 
    pageUp, 
    pageDown 
  } = useCharacters();
  const characterStuff = characters.map(character => 
    <li key={character.id}>
      <Character {...character}/>
    </li>  
  );

  if(loading) return <h1>Loading...</h1>;
  if(error) return <h1>Something went wrong. Try again</h1>;
  return (
    <div>
      <ul data-testid="characterList" className={styles.list}>
        {characterStuff}
      </ul>
      <div className={styles.page}>
        <h5>Page {page} of 42</h5>
        <div className={styles.buttons}>
          {
            page > 1 && <button onClick={pageDown}>-</button>
          }
          {
            page < 42 && <button onClick={pageUp}>+</button>
          }
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
