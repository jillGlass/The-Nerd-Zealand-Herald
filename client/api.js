import request from 'superagent'

export function getPokemon (id) {
  return request.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}