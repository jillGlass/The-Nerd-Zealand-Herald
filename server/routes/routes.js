const router = require('express').Router()
const request = require('superagent')
var convert = require('xml-js')


const headers = ({
  'x-rapidapi-host': 'animenewsnetwork.p.rapidapi.com',
  'x-rapidapi-key': '90c7b201d1msh6365d447cd6d662p14e3cajsn283966812f8b'
})

router.get('/anime/:id', (req, res) => {
  const id = req.params.id
  const animeApi = `https://animenewsnetwork.p.rapidapi.com/api.xml?anime=${id}`
  return request
    .get(animeApi)
    .set(headers)
    .then(response => {
      const json = JSON.parse(convert.xml2json(response.text, { compact: true, spaces: 0 }))
      res.json(json)
    })
})

module.exports = router
