

import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PurseBlockItem from '../PurseBlockItem/PurseBlockItem'

function PurseBlock() {
    return (
        <Box>
            <h1>Hello,Welcome Back</h1>



            <Grid  columnGap={3} justifyContent={'space-between'} flexWrap='nowrap' container>
                <PurseBlockItem  colors="rgb(200,250,205)" width="100%" />
                <PurseBlockItem colors="rgb(208,242,254)" width="100px" />
                <PurseBlockItem  colors="rgb(255,247,204)" width="100px" />
                <PurseBlockItem   colors="rgb(255,231,217)" width="100px"/>
            </Grid>
       </Box>
    )
}

export default PurseBlock
