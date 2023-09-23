const BASE_URL = `https://disney_api.nomadcoders.workers.dev`;

export function fetchAllCharacters() {
  return fetch(`${BASE_URL}/characters`).then((resp) => resp.json());
}

export function fetchCharacterById(id: number) {
  return fetch(`${BASE_URL}/characters/${id}`).then((resp) => resp.json());
}
