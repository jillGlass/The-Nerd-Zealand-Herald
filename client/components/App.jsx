import React from 'react'

import Memes from '../components/memes'
import NASA from '../components/NASA'
import Movies from './Movies'
import Pokemon from './Pokemon'

import { Header } from 'semantic-ui-react'

const App = () => {
  return (
    <React.Fragment>
      <Header as='h1' textAlign="center">The Nerd-Zealand Herald</Header>
      <h3>Your daily go to for Dank Memes, Space facts and images, Rick and Morty intelligence, Pokemon of the day and Anime galore.  Stay and Explore. </h3>
      <Pokemon />
      <NASA />
      <Memes />
      <Movies/>
    </React.Fragment>
  )
}

export default App
