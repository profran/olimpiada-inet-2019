import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography/index'
import AppBar from '@material-ui/core/AppBar'
import { Button, Toolbar, Container } from '@material-ui/core'

import WindContainer from '../views/wind/wind.containers'

import Tables from '../components/tables'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  render () {
    return (
      <Router>
        <AppBar position='static' color='inherit' style={{ marginBottom: '2rem' }}>
          <Toolbar>
            <Typography variant='h6' style={{ flexGrow: 1 }}>
              EoliCox
            </Typography>
            <Button to='/charts' component={Link}>Graficos</Button>
            <Button to='/' component={Link}>Tablas</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Route exact path='/' component={Tables} />
          <Route exact path='/charts' component={WindContainer} />
        </Container>
      </Router>
    )
  }
}
