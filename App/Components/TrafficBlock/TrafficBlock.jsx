import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Paper, Grid, Typography, Box } from "@mui/material";
function TrafficBlock() {
  return (
    <Paper
      sx={{ borderRadius: 5 }}
      elevation={5}
    >
      <Box sx={{ paddingTop: 2, marginLeft: 2 }}>
        <Typography component={"p"} variant="h6">
          Traffic by Site
        </Typography>
      </Box>

      <Box sx={{paddingBottom:6}}> 
        <Grid
          columnGap={3}
          rowGap={2}
          marginLeft={2}
          container
          sx={{ paddingTop: 1 }}
        >
          <Grid
            sx={{
              border: 1,
              borderColor: "#E4E8EB",
              textAlign: "center",
                          borderRadius: 2,
             
            }}
            xs={5}
            item
          >
            <Box sx={{ paddingTop: "15px", paddingBottom: "15px" }}>
              <FacebookIcon sx={{ color: "blue" }} fontSize="large" />
              <Typography variant={"h6"} component={"p"}>
                16.83k
              </Typography>
              <Typography color="gray" component={'p'} fontSize='10px'>FaceBook</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            sx={{
              border: 1,
              borderColor: "#E4E8EB",
              textAlign: "center",
              borderRadius: 2,
            }}
            item
          >
            <Box sx={{ paddingTop: "15px", paddingBottom: "15px" }}>
              <GoogleIcon sx={{ color: "#DF3D2F" }} fontSize="large" />
              <Typography variant={"h6"} component={"p"}>
                1.27k
              </Typography>
              <Typography color="gray" component={'p'} fontSize='10px'>Google</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            sx={{
              border: 1,
              textAlign: "center",
              borderColor: "#E4E8EB",
              borderRadius: 2,
            }}
            item
          >
            <Box sx={{ paddingTop: "15px", paddingBottom: "15px" }}>
              <LinkedInIcon sx={{ color: "#035F97" }} fontSize="large" />
              <Typography variant={"h6"} component={"p"}>
                89.36k
              </Typography>
              <Typography color="gray" component={'p'} fontSize='10px'>Linkedin</Typography>
            </Box>
          </Grid>
          <Grid
            xs={5}
            sx={{
              border: 1,
              textAlign: "center",
              borderColor: "#E4E8EB",
              borderRadius: 2,
            }}
            item
          >
            <Box sx={{ paddingTop: "15px", paddingBottom: "15px" }}>
              {" "}
              <TwitterIcon sx={{ color: "lightblue" }} fontSize="large" />
              <Typography variant={"h6"} component={"p"}>
                228
              </Typography>
              <Typography color="gray" component={'p'} fontSize='10px'>Twitter</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default TrafficBlock;
