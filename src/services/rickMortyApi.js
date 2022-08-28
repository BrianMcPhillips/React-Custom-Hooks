export const getCharacters = async(page) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const ok = res.ok;
  const json = await res.json();

  if(!ok) throw 'Unable to fetch from API';

  return json.results.map(character => ({
    id: character.id,
    name: character.name,
    image: character.image
  }));
};

export const getSingleCharacter = async(id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const ok = res.ok;
  const json = await res.json();

  if(!ok) throw 'Unable to fetch from API';

  return {
    id: json.id,
    name: json.name,
    image: json.image,
    status: json.status,
    species: json.species
  };
};
