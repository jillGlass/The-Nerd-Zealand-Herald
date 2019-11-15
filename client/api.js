import request from 'superagent'

const memeURL = 'https://meme-api.herokuapp.com/gimme/ProgrammerHumor'

export function getMemes () {
    return request.get(memeURL)
}
export function getPokemon (id) {
  return request.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}

const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

export function getNasa () {
  return request.get(nasaURL)
}

const rickUrl = 'https://rickandmortyapi.com/api/character/1'

export function getRick () {
  return request.get(rickUrl)
}