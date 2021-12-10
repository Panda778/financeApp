

import { SaveAltOutlined } from '@mui/icons-material'
import { Grid,Box, Typography } from '@mui/material'
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import React from 'react'

function PurseBlockItem({ colors, Maxwidth,lg,xs }) {
    console.log(colors)
    return (
        <Grid xs={xs} lg={lg} sx={{ backgroundColor: colors, height: 'auto',maxWidth: Maxwidth, display: 'flex',
         flexDirection:'column', alignItems:'center', justifyContent:'centers', paddingTop:8 ,paddingBottom:10, borderRadius:5, boxSizing:'border-box'}} item>
            <Box>
                <AndroidOutlinedIcon   fontSize="large" />
            </Box>
            <Typography variant='h4'>
               714k
            </Typography>
            <Typography component='span'>
            Weekly Sales
            </Typography>
            
        </Grid>
    )
}

export default PurseBlockItem
