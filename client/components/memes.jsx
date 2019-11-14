import React from 'react'
import request from 'superagent'

import { getMemes } from ''

class Memes extends React.Component {
    state = {
        title: '',
        URL: ''
    }

    componentDidMount() {
      api.getMemes()
      .then(response => {
          this.setState({
              title: response.body.title,
              URL: response.body.URL
          })
      }).then(console.log)
    }
  
  
    render () {
      return (
        <React.Fragment>
          <h1>Dank Memes Yo!</h1>
          <h3>{this.state.title}</h3>
          <img src={this.state.URL}></img>
        </React.Fragment>
      )
    }
  }
  
//   {
//     "postLink": "https://redd.it/9vqgv2",
//     "subreddit": "memes",
//     "title": "Good mor-ning Reddit!...",
//     "url": "https://i.redd.it/yykt3r9zsex11.png"
//   }


