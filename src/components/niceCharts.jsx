import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Grid from '@material-ui/core/Grid'

import { Line } from 'react-chartjs-2'

const useStyles = makeStyles(theme => ({
}))

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


export default class niceChart extends Component {

  render() {
    return (
      <>
        <Grid container>
          <Grid item md={12} sm={12}>
            <Line data={data} width={'700'} height={'400'} options={{ maintainAspectRatio: false }} />
          </Grid>
        </Grid>
      </>
    )
  }
}


