import { Paper, Typography } from "@mui/material";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/system";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Sun", "Sun"],
  datasets: [
    {
      label: ["text1", "text2", "text2", "text2", "text2", "text2"],
      data: [102, 150, 130, 140, 50, 60, 70, 200, 90, 100],
      backgroundColor: [
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
      ],
      borderColor: [
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
        "#00AA55",
      ],

      borderWidth: 1,
    },
  ],
};
const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  scales: {
    y: {
      display: true,
    },
    x: {
      display: false,
    },
  },
  elements: {
    bar: {
      borderWidth: 1,
      borderRadius: 20,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const BarChart = () => {
  return (
    <Paper
       elevation={3}
      sx={{
    
        height: "auto",
        borderRadius: 5,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",

          paddingTop: 1,
        }}
      >
        <Typography
          sx={{ fontSize: 15, fontWeight: 700, fontFamily: "Monserrat" }}
        >
          User growth (New Users)
        </Typography>
        <EventAvailableOutlinedIcon color="primary"></EventAvailableOutlinedIcon>
      </Box>
      <Box
        sx={{
          width: "45%",
          boxSizing: "border-box",
          
          marginLeft: 2,
        }}
      >
        <Bar data={data} options={options} width={100} height={100} />
      </Box>
    </Paper>
  );
};

export default BarChart;
