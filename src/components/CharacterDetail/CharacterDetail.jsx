import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleCharacter } from '../../hooks/characters';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, data, error } = useSingleCharacter(id);
  
  return (

  );
};

export default CharacterDetail;
