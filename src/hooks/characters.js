import { useEffect, useState } from 'react';
import { getCharacters, getSingleCharacter } from '../services/rickMortyApi';

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

export const useSingleCharacter = (id) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleCharacter(id)
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    data,
    error
  };
};
