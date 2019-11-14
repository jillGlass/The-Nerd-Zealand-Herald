import request from 'superagent'

const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

export function getNasa () {
  return request.get(nasaURL)
}

const rickUrl = 'https://rickandmortyapi.com/api/character/1'

export function getRick () {
  return request.get(rickUrl)
}