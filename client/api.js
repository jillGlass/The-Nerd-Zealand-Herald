import request from 'superagent'

const nasaURL = 'https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY '

export function getNasa () {
  return request.get(nasaURL)
}
