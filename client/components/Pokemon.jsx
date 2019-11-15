import React from 'react'

import { getPokemon } from '../api'

const firstLetterCaps = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

class Pokemon extends React.Component {
  state = {
    name: null,
    type:  null,
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
      <>
        <h1>Pokemon of the Day</h1>
        <h2>{this.state.name}</h2>
        <img src={this.state.front}/>
        <img src={this.state.back} />
        <h3>Pokemon Type: {this.state.type}</h3>
        <p>Height: {this.state.height}</p>
        <p>Weight: {this.state.weight}</p>
      </>
    )
  }
}

export default Pokemon
