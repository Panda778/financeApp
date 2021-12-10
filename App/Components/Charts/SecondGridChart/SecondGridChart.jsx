import { Grid } from '@mui/material'
import React from 'react'

import BarChart from '../BarChart/BarChart'
import PieChart from '../PieChart/PieChart'

function SecondGridChart() {
    return (
                <Grid flexWrap={'wrap'} columnGap={6} sx={{marginTop:5}} container>
                <Grid xs={8} item>
                  <BarChart/>
                </Grid>
                <Grid xs={2} item>
                  <PieChart height={'500px'} />
                </Grid>
              </Grid>
    )
}

export default SecondGridChart
