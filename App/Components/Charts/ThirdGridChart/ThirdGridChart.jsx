import { Grid } from '@mui/material'
import React from 'react'
import NewsBlock from '../../NewsBlock/NewsBlock'
import TimeLineBlock from '../../TimeLineBlock/TimeLineBlock'



function ThirdGridChart() {
    return (
                <Grid flexWrap='wrap' columnGap={3}   sx={{marginTop:5}} container>

                <Grid sx={{mr:3}} xs={8} item>
                  <NewsBlock/>
                </Grid>
                <Grid xs={2} item>
                  <TimeLineBlock/>
                </Grid>
              </Grid>
    )
}

export default ThirdGridChart
