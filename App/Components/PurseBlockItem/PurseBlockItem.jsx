import { SaveAltOutlined } from "@mui/icons-material";
import { Grid, Box, Typography, Button } from "@mui/material";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteWallet, handleChangeWallet } from "../../Redux/feachers/walletSlice";

function PurseBlockItem({ item ,id}) {
  const dispatch = useDispatch()
  
  return (
    <Grid
      
      xs={3}
      md={3.8}
      lg={2.85}
      xl={2.75}
      sx={{
        backgroundColor: "green",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        marginY:1,
        borderRadius: 5,
        boxSizing: "border-box",
        width: 'auto'
      }}
      item
    >
      <Box>
        <AndroidOutlinedIcon fontSize="large" />
      </Box>
      <Typography variant="h4">{item.name}</Typography>
      <Typography component="span">{item.currency}</Typography>
      <Button onClick={()=>dispatch(deleteWallet({walletId: id}))}>
        delete
      </Button>
      <Button onClick={()=>dispatch(handleChangeWallet({walletId: id}))}>
        edit
      </Button>
    </Grid>
  );
}

export default PurseBlockItem;
