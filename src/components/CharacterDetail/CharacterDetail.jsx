import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleCharacter } from '../../hooks/characters';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, error, data: {
    name,
    image,
    status,
    species
  }  } = useSingleCharacter(id);
  
  if(loading) return <h1>Loading...</h1>;
  if(error) return <h1>Something went wrong. Try again</h1>;
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h4>{species}</h4>
      <h5>{status}</h5>
    </div>
  );
};

export default CharacterDetail;
