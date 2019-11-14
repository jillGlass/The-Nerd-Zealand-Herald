import React from 'react'
import request from 'superagent'
import * as api from '../api'

class Movies extends React.Component {
  state = {
    rick: {
      name: null,
      image: null
    }
  }

  componentDidMount () {
    api.getRick()
      .then(response => {
        this.setState({
          rick: {
            name: response.body.name,
            image: response.body.image
          }
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>Rick and Morty's first episode of season 4 has been released</h1>
        <img src = {this.state.rick.image} height = '200px'></img>
        <p>{this.state.rick.name}</p>
        <p>It is been a long time coming but the fourth season of Rick and Morty was released three days ago and broken Internet.</p>
        <p>More than two years after Rick and Morty Season 3 ended, Season 4 of Adult Swim’s beloved animated sci-fi comedy kicked off November 10 — and Morty’s about to go “nuts this time.”</p>
        <p>Rick and Morty season 4 is 10 episodes long and will unfortunately be split into two halves, so the last five episodes will arrive in 2020.</p>
        <p>The good news is a season 5 is on its way, and this time creator Dan Harmon (the guy behind Community) seems to be running on a tighter schedule. "We're literally writing season 5 while finishing season 4 just to force ourselves to commit to a certain schedule," he said at San Diego Comic-Con.</p>
      </React.Fragment>
    )
  }
}

export default Movies
