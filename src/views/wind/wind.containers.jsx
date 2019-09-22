import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { getWindData } from '../../services/wind.service'
import NiceCharts from '../../components/niceCharts'

export default class WindContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      windData: {
        labels: [],
        iData: [],
        wdData: [],
        wsData: [],
        vData: []
      },
      isLoading: true
    }
  }

  componentDidMount () {
    getWindData().then((response) => {
      const labels = []
      const iData = []
      const wdData = []
      const wsData = []
      const vData = []

      response.wind_data.forEach(v => {
        labels.push(v.timestamp)
        iData.push(v.i)
        wdData.push(v.w_d)
        wsData.push(v.w_s)
        vData.push(v.v)
      })

      this.setState({
        windData: {
          labels: labels,
          iData: iData,
          wdData: wdData,
          wsData: wsData,
          vData: vData
        }
      })
    })
  }

  render () {
    return (
      <Grid container justify='center'>
        <NiceCharts iData={this.state.windData.iData} vData={this.state.windData.vData} wsData={this.state.windData.wsData} labels={this.state.windData.labels} />
      </Grid>
    )
  }
}
