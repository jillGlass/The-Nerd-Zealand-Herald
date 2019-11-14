import request from 'superagent'

const memeURL = 'https://meme-api.herokuapp.com/gimme'

export function memeAPI () {
    return request.get(memeURL)
}
const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

export function getNasa () {
  return request.get(nasaURL)
}
