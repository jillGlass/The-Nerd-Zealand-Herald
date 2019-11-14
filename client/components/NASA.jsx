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
            <h1>NASA Image of the Day</h1>
            <h2>Get blown away with this image of Mercury transiting the sun</h2>
            <img src = {this.state.NASA.image} height = '200px'></img>
            <p>Image: {this.state.NASA.title}</p>
            <p>{this.state.NASA.explanation}</p>
          </React.Fragment>
        )
      }
}

export default NASA
