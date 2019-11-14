import request from 'superagent'

export function getPokemon (id) {
  return request.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}

const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

export function getNasa () {
  return request.get(nasaURL)
}
