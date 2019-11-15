import React from 'react'
import { getAnime } from '../api'

class Anime extends React.Component {
  state ={
    anime: null
  }
  componentDidMount () {
    getAnime()
      .then(response => {
        this.setState({
          anime: response.body
        })
      })
  }

  render () {
    const info = this.state.anime && this.state.anime.ann.anime.info.find(info => info._text && info._text.length > 50)
    console.log(info && info._text)
    return (
      <div>
        <h1>Hello World!</h1>
        {this.state.anime && <p>{this.state.anime.ann.anime._attributes.name}</p>}
        {this.state.anime && <img src={this.state.anime.ann.anime.info[0]._attributes.src}></img>}
        {this.state.anime && <p>{info._text}</p>}
      </div>
    )
  }
}

export default Anime
