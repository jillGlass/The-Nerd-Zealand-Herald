import React from 'react'
import request from 'superagent'

class NASA extends React.Component {

  componentDidMount() {
    request.get
  }


  render () {
    return (
      <React.Fragment>
        <h1>Incredible Earth</h1>
        <h3>{this.state.caption}</h3>
        <img>{this.state.url}</img>
      </React.Fragment>
    )
  }
}
