import React from 'react'
import * as api from '../api'
import { Card, Icon, Image , Header } from 'semantic-ui-react'


const style = {
  h1: {
    marginTop: '3em'
  },
  h2: {
    margin: '4em 0em 2em'
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em'
  },
  last: {
    marginBottom: '300px'
  }
}

class Memes extends React.Component {
    state = {
      title: null,
      url: null
    }

    componentDidMount () {
      api.getMemes()
        .then(response => {
          this.setState({
            title: response.body.title,
            url: response.body.url
          })
        })
    }

    render () {
      return (
        <div className="ui card">
          <Header as='h1' textAlign="center">Dank Programming Memes</Header>
          <Header as='h2' content={this.state.title} style={style.h3} textAlign='center' />

          <div className="image" size="small">
            <img src={this.state.url}/>
          </div>
        </div>

      )
    }
}

export default Memes
