import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleCharacter } from '../../hooks/characters';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, data, error } = useSingleCharacter(id);
  
  if(loading) return <h1>Loading...</h1>;
  if(error) return <h1>Something went wrong. Try again</h1>;
  return (

  );
};

export default CharacterDetail;
