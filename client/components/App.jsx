import React from 'react'
import NASA from '../components/NASA'
import Movies from './Movies'

const App = () => {
  return (
    <React.Fragment>
      <h1>The Nerd-Zealand Herald</h1>
      <NASA />
      <Movies/>
    </React.Fragment>
  )
}

export default App
