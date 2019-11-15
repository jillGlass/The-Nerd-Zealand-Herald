import React from 'react'
import * as api from '../api'

class Memes extends React.Component {
    state = {
      title: null,
      url: null
    }

    componentDidMount () {
      api.getMemes()
        .then(response => {
          this.setState({
            title: response.body.title,
            url: response.body.url
          })
        })
    }

    render () {
      return (
        <React.Fragment>
          <h1>Dank Memes Yo!</h1>
          <h3>{this.state.title}</h3>
          <img src = {this.state.url} height = '250px'></img>
        </React.Fragment>
      )
    }
}

export default Memes

