import React, { Component } from 'react'
import Anime from 'react-anime'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import { example } from './services/example.service'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    example().then(response => this.setState(({ todos }) => ({ todos: [...response] })))
  }

  render () {
    const animeProps = {
      translateY: [-64, 0],
      delay: (el, i) => i * 50
    }

    const { todos } = this.state

    console.log(JSON.stringify(todos, 2, null))

    return (
      <Grid container justify='center'>
        <Grid item container sm={6} spacing={2}>
          <Anime {...animeProps}>
            {todos.map((v, i) => (
              <Grid key={i} item xs={12} sm={6} lg={4}>
                <Card>
                  <CardContent>
                    <Typography variant='h6'>
                      {v.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Anime>
        </Grid>
      </Grid>
    )
  }
}
