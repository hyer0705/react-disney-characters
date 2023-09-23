const BASE_URL = `https://disney_api.nomadcoders.workers.dev`;

export function fetchAllCharacters() {
  return fetch(`${BASE_URL}/characters`)
    .then((resp) => resp.json())
    .then((json) => json.slice(0, 100)); // 임시로 100개만 가져오기
}

export function fetchCharacterById(id: number) {
  return fetch(`${BASE_URL}/characters/${id}`).then((resp) => resp.json());
}
