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
import { getWindData } from '../services/wind.service';

const useStyles = makeStyles(theme => ({
  root: {
  },
  secondGrid: {
    border: '2px solid red'
  }
}))

export default class tables extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    getWindData().then(response => this.setState(({ todos }) => ({ todos: [...response.wind_data] })))
  }

  render() {
    const { todos } = this.state

    return (
      <Container>
        <Grid container direction="column" justify="space-between" alignItems="flex-start" style={{ overflowX: 'auto'}}>
          <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item sm={12} md={12}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Time Stamp</TableCell>
                    <TableCell align="center">Wind Direction</TableCell>
                    <TableCell align="center">Wind speed</TableCell>
                    <TableCell align="center">Tension</TableCell>
                    <TableCell align="right">Corriente</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {todos.map(row => (
                    <TableRow key={row._id}>
                      <TableCell component="th" scope="row" align="left">
                        {row.timestamp}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {row.w_d}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {row.w_s}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {row.v}
                      </TableCell>
                      <TableCell component="th" scope="row" align="right">
                        {row.i}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>

        </Grid>
      </Container >
    )
  }
}