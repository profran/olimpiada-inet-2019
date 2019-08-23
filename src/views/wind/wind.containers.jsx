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
        i_data: [],
        w_d_data: [],
        w_s_data: [],
        v_data: []
      },
      isLoading: true
    }
  }

  componentDidMount () {
    getWindData().then((response) => {
      let labels = []     
      let i_data = []
      let w_d_data = []
      let w_s_data = []
      let v_data = []

      console.log(response)

      response.wind_data.forEach(v => {
        labels.push(v.timestamp)
        i_data.push(v.i)
        w_d_data.push(v.w_d)
        w_s_data.push(v.w_s)
        v_data.push(v.v)
      })

      this.setState({
        windData: {
          labels: labels,
          i_data: i_data,
          w_d_data: w_d_data,
          w_s_data: w_s_data,
          v_data: v_data
        }
      })
    })
  }

  render () {
    console.log(this.state)
    return (
      <Grid container justify='center'>
        <NiceCharts data={this.state.windData.i_data} labels={this.state.windData.labels}/>
      </Grid>
    )
  }
}
