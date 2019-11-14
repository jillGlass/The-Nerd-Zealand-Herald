import React from 'react'
import Memes from '../components/memes'
import NASA from '../components/NASA'
import Movies from './Movies'

import Pokemon from './Pokemon'

const App = () => {
  return (
    <React.Fragment>
      <h1>The Nerd-Zealand Herald</h1>
      <Pokemon />
      <NASA />
      <Memes />
      <Movies/>
    </React.Fragment>
  )
}

export default App
