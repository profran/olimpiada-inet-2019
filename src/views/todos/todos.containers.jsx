import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { example } from '../../services/todos.service'
import TodoCard from './todos.components'

export default class TodosContainer extends Component {
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
            <TodoCard key={i} title={v.title} />
          ))}
        </Grid>
      </Grid>
    )
  }
}
