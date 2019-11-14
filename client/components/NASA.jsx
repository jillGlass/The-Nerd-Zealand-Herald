import React from 'react'
import * as api from '../api'

class NASA extends React.Component {
      state={
        Nasa: null
      }

      componentDidMount () {
        api.getNasa()
          .then(response => {
            this.setState({
              NASA: response.body

            })
          })
      }

      render () {
        return (
          <React.Fragment>
            <h1>Incredible Earth</h1>
            <h3>{this.state.caption}</h3>
            <img>{this.state.image}</img>
          </React.Fragment>
        )
      }
}

export default NASA
