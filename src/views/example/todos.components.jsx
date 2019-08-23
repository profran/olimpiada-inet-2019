import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import FadeCard from '../../components/fade'

export default function TodoCard (props) {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <FadeCard>
        <Card>
          <CardContent>
            <Typography variant='h6'>
              {props.title}
            </Typography>
          </CardContent>
        </Card>
      </FadeCard>
    </Grid>
  )
}
