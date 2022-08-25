export const getCharacters = async() => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
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
    image: json.image
  };
};
