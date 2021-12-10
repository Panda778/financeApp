import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GridChart from "../../Components/Charts/GridChart/GridChart";

import SecondGridChart from "../../Components/Charts/SecondGridChart/SecondGridChart";
import NewsBlock from "../../Components/NewsBlock/NewsBlock";
import PurseBlock from "../../Components/PurseBlock/PurseBlock";

function HomePageContainer() {
  return (
    <Container>
      <PurseBlock />

      <GridChart />

      <SecondGridChart />

      <NewsBlock />
    </Container>
  );
}

export default HomePageContainer;
