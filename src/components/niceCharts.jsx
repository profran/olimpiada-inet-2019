import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Grid from '@material-ui/core/Grid'

import { Line } from 'react-chartjs-2'

const useStyles = makeStyles(theme => ({
}))


function NiceCharts(props) {
  const data2 = {
    labels: props.labels,
    datasets: [
      {
        label: props.mainLabel,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(225,0,0,0.4)",
        borderColor: "red", // The main line color
        borderCapStyle: 'square',
        borderDash: [], // try [5, 15] for instance
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "black",
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "yellow",
        pointHoverBorderColor: "brown",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        spanGaps: true,
        data: props.data
      }
    ]
  };

  const data = {
    label: props.mainLabel,
    datasets: [{
      label: props.mainLabel,
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
      data: props.data
    }]
  };

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

export default NiceCharts

