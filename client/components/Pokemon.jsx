import React from 'react'

import { getPokemon } from '../api'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

const firstLetterCaps = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

class Pokemon extends React.Component {
  state = {
    name: null,
    type: null,
    front: null,
    back: null,
    height: null,
    weight: null
  }

  componentDidMount () {
    getPokemon(Math.ceil(Math.random() * 807))
      .then(response => {
        this.setState({
          name: firstLetterCaps(response.body.name),
          type: firstLetterCaps(response.body.types[0].type.name),
          front: response.body.sprites.front_default,
          back: response.body.sprites.back_default,
          height: `${response.body.height}cm`,
          weight: `${response.body.weight}g`
        })
      })
  }

  render () {
    return (
      <div className="ui card">
        <Header as='h1' textAlign="center">Pokemon of the Day</Header>
        <Header as='h2' textAlign="center">{this.state.name}</Header>

        <div className="image" size="small">
          <img src={this.state.front}/>
          {/* <img src={this.state.back}/> */}
        </div>

        <Header as='h3' textAlign="center">Pokemon type: {this.state.type}</Header>
        <p>Height: {this.state.height}</p>
        <p>Weight: {this.state.weight}</p>
      </div>
    )
  }
}

export default Pokemon
