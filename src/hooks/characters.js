import { useEffect, useState } from 'react';
import { getCharacters } from '../services/rickMortyApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    getCharacters()
      .then(data => setCharacters(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters,
    error
  };
};
