import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { UserDatas } from "../../Redux/feachers/userSlice";
import { walletData } from "../../Redux/feachers/walletSlice";
import PurseBlockItem from "../PurseBlockItem/PurseBlockItem";

function PurseBlock() {
  const userData = useSelector(UserDatas);
  console.log(userData);
  const wallet = useSelector(walletData);
  return (
    <Box>
      <h1>Hello,Welcome Back : {userData.name}</h1>

      <Grid columnGap={2} flexWrap="wrap" container>
        {wallet.map((item, id) => {
          return <PurseBlockItem id={item.id} key={id} item={item} />;
        })}
      </Grid>
    </Box>
  );
}

export default PurseBlock;
