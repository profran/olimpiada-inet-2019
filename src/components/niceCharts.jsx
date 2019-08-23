import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Grid from '@material-ui/core/Grid'

import { Line } from 'react-chartjs-2'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
}))

function NiceCharts(props) {

  console.log(props)

  const data = {
    labels: props.labels,
    datasets: [{
      label: "Corriente",
      backgroundColor: "rgba(" +
        (Math.floor(Math.random() * (255 - 0) + 0)) + "," +
        (Math.floor(Math.random() * (255 - 0) + 0)) + "," +
        (Math.floor(Math.random() * (255 - 0) + 0)) + ",0.2)",
      borderColor: "#" + ((1 << 24) * Math.random() | 0).toString(16),

      lineTension: 0.25,
      borderCapStyle: 'square',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",

      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#fdd835",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 1,
      pointRadius: 3,
      pointHitRadius: 5,

      spanGaps: true,
      data: props.i_data
    },
    {
      label: "Tension",
      backgroundColor: "rgba(" +
        (Math.floor(Math.random() * (255 - 0) + 0)) + "," +
        (Math.floor(Math.random() * (255 - 0) + 0)) + "," +
        (Math.floor(Math.random() * (255 - 0) + 0)) + ",0.2)",
      borderColor: "#" + ((1 << 24) * Math.random() | 0).toString(16),

      lineTension: 0.25,
      borderCapStyle: 'square',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",

      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#fdd835",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 1,
      pointRadius: 3,
      pointHitRadius: 5,

      spanGaps: true,
      data: props.v_data
    },
    {
      label: "Velociad del viento",
      backgroundColor: "rgba(" +
        (Math.floor(Math.random() * (255 - 0) + 0)) + "," +
        (Math.floor(Math.random() * (255 - 0) + 0)) + "," +
        (Math.floor(Math.random() * (255 - 0) + 0)) + ",0.2)",
      borderColor: "#" + ((1 << 24) * Math.random() | 0).toString(16),

      lineTension: 0.25,
      borderCapStyle: 'square',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",

      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#fdd835",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 1,
      pointRadius: 3,
      pointHitRadius: 5,

      spanGaps: true,
      data: props.w_s_data
    },
    ]
  };

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant="h3" style={{ fontWeight: 'bold' }}>
            Tablas de datos
          </Typography>
        </Grid>
        <Grid item md={12} sm={12} style={{overflowX: 'auto', width: '100vh'}}>
          <Line data={data} width={'700'} height={'400'} options={{ maintainAspectRatio: false }} />
        </Grid>
      </Grid>
    </>
  )
}

export default NiceCharts

