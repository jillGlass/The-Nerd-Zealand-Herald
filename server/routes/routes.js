const router = require('express').Router()
const request = require('superagent')

const animeApi = 'https://animenewsnetwork.p.rapidapi.com/api.xml'

const headers = ({
  host: {
    'x-rapidapi-host': 'animenewsnetwork.p.rapidapi.com'
  },
  key: {
    'x-rapidapi-key': '90c7b201d1msh6365d447cd6d662p14e3cajsn283966812f8b'
  }
})

const query = ({
  'anime': (Math.floor((Math.random() * 5000) + 1)).toString
})

router.get(animeApi, (req, res) => {
  return request
    .get(animeApi)
    .set(headers.host)
    .set(headers.key)
    .query(query)
    .then(response => {
      console.log(response)
      res.json(response.body)
    })
})
