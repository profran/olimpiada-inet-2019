import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Paper from '@material-ui/core/Paper/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import { Button, Toolbar, Container } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { example } from '../services/todos.service'

import NiceCharts from '../components/niceCharts'

import WindContainer from '../views/wind/wind.containers'

import Tables from '../components/tables'

import {
  Route,
  NavLink,
  Link,
  BrowserRouter
} from "react-router-dom";
import niceCharts from '../components/niceCharts';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  render() {
    const { todos } = this.state

    return (
      <BrowserRouter>
        <AppBar position="static" style={{ marginBottom: '2rem' }}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, }}>
              EoliCox
                </Typography>
            <Button color="inherit" href='/charts'>Graficos</Button>
            <Button color="inherit" href='/'>Tablas</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Route exact path="/" component={Tables} />
          <Route exact path="/charts" component={WindContainer} />
        </Container>
      </BrowserRouter>
    )

  }
}