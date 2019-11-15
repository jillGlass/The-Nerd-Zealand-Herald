import request from 'superagent'

const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=BdhyPAZAf3YDfGemTtaTtNOhb3jqw5ZrNzKaQlmR'

export function getNasa () {
  return request.get(nasaURL)
}

var id = Math.floor((Math.random() * 50) + 1)
const animeURL = `http://localhost:3000/api/v1/anime/${id}`

export function getAnime () {
  return request.get(animeURL)
}

const memeURL = 'https://meme-api.herokuapp.com/gimme/ProgrammerHumor'

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
