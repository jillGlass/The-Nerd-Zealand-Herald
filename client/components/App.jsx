import React from 'react'
import NASA from '../components/NASA'
import Movies from './Movies'

import Pokemon from './Pokemon'

const App = () => {
  return (
    <React.Fragment>
      <h1>The Nerd-Zealand Herald</h1>
      <Pokemon />
      <NASA />
      <Movies/>
    </React.Fragment>
  )
}

export default App
