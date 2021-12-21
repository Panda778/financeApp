

import { Grid } from '@mui/material'
import React from 'react'
import TodoBlock from '../../TodoBlock/TodoBlock'
import TrafficBlock from '../../TrafficBlock/TrafficBlock'

function FourthGridChart() {
    return (
        <Grid sx={{ marginTop: 3}} columnGap={3} container>
            <Grid item xs={4} lg={3.6}>
                <TrafficBlock/>
            </Grid>
            <Grid item xs={5} lg={7.7}>
                <TodoBlock/>
                </Grid>
        </Grid>
    )
}

export default FourthGridChart
