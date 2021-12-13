

import { Grid } from '@mui/material'
import React from 'react'
import TodoBlock from '../../TodoBlock/TodoBlock'
import TrafficBlock from '../../TrafficBlock/TrafficBlock'

function FourthGridChart() {
    return (
        <Grid sx={{ marginTop: 3}} columnGap={4} container>
            <Grid item xs={4}>
                <TrafficBlock/>
            </Grid>
            <Grid item xs={5}>
                <TodoBlock/>
                </Grid>
        </Grid>
    )
}

export default FourthGridChart
