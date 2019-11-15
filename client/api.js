import request from 'superagent'

var id = Math.floor((Math.random() * 50) + 1)
const animeURL = `http://localhost:3000/api/v1/anime/${id}`



export function getAnime () {
  return request.get(animeURL)
}
