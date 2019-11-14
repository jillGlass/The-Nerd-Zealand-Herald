import request from 'superagent'

const memeapiURL = 'https://meme-api.herokuapp.com/gimme'

export function memeAPI () {
    return request.get(apiURL)
}