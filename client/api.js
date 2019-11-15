import request from 'superagent'

const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=BdhyPAZAf3YDfGemTtaTtNOhb3jqw5ZrNzKaQlmR'

export function getNasa () {
  return request.get(nasaURL)
}

const memeURL = 'https://meme-api.herokuapp.com/gimme'

export function getMemes () {
  return request.get(memeURL)
}
export function getPokemon (id) {
  return request.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}

const rickUrl = 'https://rickandmortyapi.com/api/character/1'

export function getRick () {
  return request.get(rickUrl)
}
