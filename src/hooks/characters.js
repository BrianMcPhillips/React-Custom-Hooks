import { useEffect, useState } from 'react';
import { getCharacters, getSingleCharacter } from '../services/rickMortyApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  
  const pageUp = () => setPage(() => page + 1);
  const pageDown = () => setPage(() => page - 1);

  useEffect(() => {
    getCharacters(page)
      .then(data => setCharacters(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters,
    error,
    page,
    pageUp,
    pageDown
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
