import React from "react";
import { Pie as PieJs } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Typography, Box, Paper, Container } from "@mui/material";

const data = {
  labels: ["America", "Asia", "Europe", "Africa"],
  datasets: [
    {
      data: [300, 50, 100, 200],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "green"],
		  hoverBackgroundColor: ["#fefefe", "#00000", "#fffff", "yellow"],
		  
	 
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
	  legend: {
	   
      position: "bottom",
		  display: true,	
	
	  },
	 
	 
  },
};

const PieChart = () => (
  <Paper
     elevation={3}
    sx={{
      width: "319px",
      height: "400px",
      borderRadius: 5,
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",

        paddingTop: 4,
      }}
    >
      <Typography
        sx={{ fontSize: 15, fontWeight: 700, fontFamily: "Monserrat" }}
      >
        User growth (New Users)
      </Typography>
    </Box>
    <Box sx={{ width: 280, height: "auto", margin: " 0 auto", paddingTop: 3 }}>
			<Pie data={data} options={options} width={100} height={100} />
			
    </Box>
  </Paper>
);

export default PieChart;
