import React, { Component } from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import { example } from './services/example.service'
import { useSpring, animated } from 'react-spring'

function FadeCard (props) {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } })
  return <animated.div style={animation}>{props.children}</animated.div>
}

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
    const { todos } = this.state

    console.log(JSON.stringify(todos, 2, null))

    return (
      <Grid container justify='center'>
        <Grid item container sm={6} spacing={2}>
          {todos.map((v, i) => (
            <Grid key={i} item xs={12} sm={6} lg={4}>
              <FadeCard>
                <Card>
                  <CardContent>
                    <Typography variant='h6'>
                      {v.title}
                    </Typography>
                  </CardContent>
                </Card>
              </FadeCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  }
}
