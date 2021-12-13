import { Paper, Typography, Box } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
function WelcomePage() {
  return (
    <Box sx={{ width: "700px", height: "auto", margin: "5% auto" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography variant={"h5"} component={"p"}>
          Welcome To finance App
        </Typography>
        <img src="/logo.svg" width="80px" alt="" />
      </Box>

      <Box
        sx={{
          width: "300px",
          margin: "20% auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          sx={{
            color: "#fff",
            textTransform: "uppercase",
            textDecoration: "none",
            background: "#60a3bc",
            borderRadius: "50px",
                      display: "inline-block",
                      padding:'10px 30px',
            border: "none",
            transition: "all 0.4s ease 0s",
            ":hover": {
              textShadow: " 0px 0px 6px rgba(255, 255, 255, 1)",
              transition: "all 0.4s ease 0s",
            },
          }}
          color="info"
          variant={"contained"}
        >
          <Link href={"/login"} passHref>
            <Typography>log in</Typography>
          </Link>
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "uppercase",
            textDecoration: "none",
                      background: "#60a3bc",
            padding:'10px 30px',
            borderRadius: "50px",
            display: "inline-block",
            border: "none",
            transition: "all 0.4s ease 0s",
            ":hover": {
              textShadow: " 0px 0px 6px rgba(255, 255, 255, 1)",
              transition: "all 0.4s ease 0s",
            },
          }}
          color="info"
          variant={"contained"}
        >
          <Link href={"/register"} passHref>
            <Typography>register</Typography>
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default WelcomePage;
