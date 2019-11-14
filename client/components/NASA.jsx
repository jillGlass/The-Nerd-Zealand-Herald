import React from 'react'
import * as api from '../api'

class NASA extends React.Component {
      state={
        NASA: {
          title: null,
          explanation: null,
          image: null
        }
      }

      componentDidMount () {
        api.getNasa()
          .then(response => {
            this.setState({
              NASA: {
                title: response.body.title,
                explanation: response.body.explanation,
                image: response.body.url
              }

            })
          })
      }

      render () {
        return (
          <React.Fragment>
            <h1>Space Stuff</h1>
            <h3>{this.state.NASA.title}</h3>
            <p>{this.state.NASA.explanation}</p>
            <img src = {this.state.NASA.image}></img>
          </React.Fragment>
        )
      }
}

export default NASA
