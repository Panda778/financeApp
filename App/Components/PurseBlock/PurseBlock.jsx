

import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PurseBlockItem from '../PurseBlockItem/PurseBlockItem'

function PurseBlock() {
    return (
        <Box>
            <h1>Hello,Welcome Back</h1>



            <Grid  columnGap={3} justifyContent={'space-around'} flexWrap='nowrap' container>
                <PurseBlockItem lg='2.7' xs='3' colors="rgb(200,250,205)" Maxwidth="20%" />
                <PurseBlockItem lg='2.7' xs='3' colors="rgb(208,242,254)" width="100px" />
                <PurseBlockItem  lg='2.7' xs='3' colors="rgb(255,247,204)" width="100px" />
                <PurseBlockItem lg='2.7' xs='3'  colors="rgb(255,231,217)" width="100px"/>
            </Grid>
       </Box>
    )
}

export default PurseBlock
