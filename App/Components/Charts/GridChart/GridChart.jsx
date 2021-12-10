import { Grid } from "@mui/material";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import React from "react";
import { LineChart } from "../LineChart/LineChart";

function GridChart() {
  return (
    <Grid flexWrap={'wrap'} columnGap={6} sx={{marginTop:5}} container>
      <Grid xs={8} item>
        <LineChart/>
      </Grid>
      <Grid xs={2} item>
        <PieChart />
      </Grid>
    </Grid>
  );
}

export default GridChart;
