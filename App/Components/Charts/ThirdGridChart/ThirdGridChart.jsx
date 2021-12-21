import { Grid } from '@mui/material'
import React from 'react'
import NewsBlock from '../../NewsBlock/NewsBlock'
import TimeLineBlock from '../../TimeLineBlock/TimeLineBlock'



function ThirdGridChart() {
    return (
                <Grid flexWrap='wrap' columnGap={4.5}   sx={{marginTop:5}} container>

                <Grid  xs={8} lg={8.0} xl={8.0} item>
                  <NewsBlock/>
                </Grid>
                <Grid xs={2} lg={3.2} xl={3.2} item>
          <TimeLineBlock />
                </Grid>
              </Grid>
    )
}

export default ThirdGridChart
