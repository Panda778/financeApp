import { Container, Grid } from "@mui/material";
import React from "react";
import FourthGridChart from "../../Components/Charts/FourthGridChart/FourthGridChart";
import GridChart from "../../Components/Charts/GridChart/GridChart";

import SecondGridChart from "../../Components/Charts/SecondGridChart/SecondGridChart";
import ThirdGridChart from "../../Components/Charts/ThirdGridChart/ThirdGridChart";
import PurseBlock from "../../Components/PurseBlock/PurseBlock";

function HomePageContainer() {
  return (
    <Container>
      <PurseBlock />

      <GridChart />

      <SecondGridChart />

      <ThirdGridChart />
      <FourthGridChart/>
    
    </Container>
  );
}

export default HomePageContainer;
