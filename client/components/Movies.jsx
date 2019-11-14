import React from 'react'
import request from 'superagent'
import * as api from '../api'

class Movies extends React.Component {
  state = {
    rick:{
      name: null,
      image: null
    }
  }


  componentDidMount() {
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
        <h1></h1>
        <img></img>
        <p></p>
      </React.Fragment>
    )
  }
}




      render () {
        return (
          <React.Fragment>
            <h1>Space Stuff</h1>
            <h3>{this.state.NASA.title}</h3>
            <p>{this.state.NASA.explanation}</p>
            <img src = {this.state.NASA.image} height = '200px'></img>
          </React.Fragment>
        )
      }
}

export default NASA



export default Movies