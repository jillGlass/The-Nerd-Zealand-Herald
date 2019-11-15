import React from 'react'

import Memes from '../components/memes'
import NASA from '../components/NASA'
import Movies from './Movies'
import Pokemon from './Pokemon'

import { Header, Container, Divider, Grid, Icon } from 'semantic-ui-react'
import Anime from './Anime'

const App = () => {
  return (

    <React.Fragment>
      <style>{'body { background-color: grey; }'}</style>
      <Container text>
        <Header
          as='h1'
          content='THE NeRd ZeAlAnD HERALD'
          inverted
          textAlign= 'center'
          style={{
            fontSize: '4em',

            fontWeight: 'normal',
            marginBottom: '1em',
            marginTop: '1em'
          }}
        />
      </Container>

      <Container text>

        {/* <Header as='h1' textAlign="center">The Nerd-Zealand Herald</Header> */}
        <h2
          style = {{ textAlign: 'center' }}>Your daily go to for Dank Memes, Space facts and images, Rick and Morty intelligence, Pokemon of the day and Anime galore.  Stay and Explore. </h2>
        <Header as='h2' inverted textAlign='center'>

        </Header>
        <Grid relaxed>
          <Grid.Row>
            <Grid.Column width={4}>
              <p>
                <span><Pokemon /></span>
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <p style = {{ backgroundColor: 'white' }}>
                <span ><NASA /></span>
              </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <p>
                <span ><Memes /></span>
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <p>
                <span><Pokemon /></span>
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <p style = {{ backgroundColor: 'white' }}>
                <span><Anime /></span>
              </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <p>
                <span><Memes /></span>
              </p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
              <p>
                <span><Pokemon /></span>
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <p style = {{ backgroundColor: 'white' }}>
                <span ><Movies/></span>
              </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <p>
                <span><Memes /></span>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default App
