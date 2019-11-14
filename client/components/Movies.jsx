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
        <h1>Rick and Morty</h1>
        <h2>First episode of season 4 breaks the internet</h2>
        <img src = {this.state.rick.image} height = '200px'></img>
        <p>Image: {this.state.rick.name}</p>
        <p>It is been a long time coming but the fourth season of Rick and Morty was released three days ago and broke the Internet.More than two years after Rick and Morty Season 3 ended, Season 4 of Adult Swim’s beloved animated sci-fi comedy kicked off November 10 — and Morty’s about to go “nuts this time.” Rick and Morty season 4 is 10 episodes long and will unfortunately be split into two halves, so the last five episodes will arrive in 2020.
        The good news is a season 5 is on its way, and this time creator Dan Harmon (the guy behind Community) seems to be running on a tighter schedule. "We're literally writing season 5 while finishing season 4 just to force ourselves to commit to a certain schedule," he said at San Diego Comic-Con.</p>
      </React.Fragment>
    )
  }
}

export default Movies
