import React from 'react'
import * as api from '../api'
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

class NASA extends React.Component {
      state={
        NASA: {
          title: null,
          explanation: null,
          image: null
        }
      }

      componentDidMount () {
        api.getNasa()
          .then(response => {
            this.setState({
              NASA: {
                title: response.body.title,
                explanation: response.body.explanation,
                image: response.body.url
              }

            })
          })
      }

      render () {
        return (
          <React.Fragment>
            <Header as='h3' content='NASA Image of the Day' style={style.h3} textAlign='center' />
            <Container>
              <Item.Group divided>
                <Item>
                  <Item.Image src={this.state.NASA.image} />
                  <Item.Content>
                    <Item.Header as='a'>Get blown away with this image of Mercury transiting the sun</Item.Header>
                    <Item.Description>
                      {this.state.NASA.explanation}
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Container>
            {/* <h1>NASA Image of the Day</h1>
            <h2>Get blown away with this image of Mercury transiting the sun</h2>
            <img src = {this.state.NASA.image} height = '200px'></img>
            <p>Image: {this.state.NASA.title}</p>
            <p>{this.state.NASA.explanation}</p> */}
          </React.Fragment>
        )
      }
}

export default NASA
