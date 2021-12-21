import { Grid } from '@mui/material'
import React from 'react'

import BarChart from '../BarChart/BarChart'
import PieChart from '../PieChart/PieChart'

function SecondGridChart() {
    return (
                <Grid flexWrap={'wrap'} columnGap={6} sx={{marginTop:5}} container>
                <Grid xs={8} lg={8} xl={8} item>
                  <BarChart/>
                </Grid>
                <Grid xs={2} lg={3} xl={3} item>
                  <PieChart  />
                </Grid>
              </Grid>
    )
}

export default SecondGridChart
