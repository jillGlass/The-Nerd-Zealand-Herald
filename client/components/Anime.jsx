import React from 'react'
import { getAnime } from '../api'

import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table
} from 'semantic-ui-react'

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
      <React.Fragment>
        <Header as='h3' content='Anime of the Day' style={style.h3} textAlign='center' />
        <Container>
          <Item.Group divided>
            <Item>
              {this.state.anime && <Item.Image src={this.state.anime.ann.anime.info[0]._attributes.src}></Item.Image>}
              <Item.Content>
                {this.state.anime && <Item.Header as='a'>{this.state.anime.ann.anime._attributes.name}</Item.Header>}
                {this.state.anime && <Item.Description>{info._text}</Item.Description>}
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
      </React.Fragment>
    )
  }
}

export default Anime
