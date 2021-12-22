import {
  Button,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
  Box,
  Grid,
  Checkbox,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import Progress from "../Progress/Progress";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { UserStatus } from "../../Redux/feachers/userSlice";
const RegisterForm = ({
  handleSubmit,
  email,
  password,
  setPassword,
  setEmail,
  name,
  setName,
  secondName,
  setSecondName,
}) => {
const status =useSelector(UserStatus)

  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "primary",
          maxWidth: "70%",
          margin: "6% auto",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant={"h5"}>Get started absolutely free.</Typography>
            <Typography component={"p"} color={"GrayText"}>
              Free forever. No credit card needed.
            </Typography>
          </Box>
          <Box>
            <img
              style={{ width: "60px" }}
              src="https://minimal-kit-react.vercel.app/static/logo.svg"
              alt=""
            />
          </Box>
        </Box>

        <Grid sx={{ marginTop: 3 }} columnGap={8} container>
          <Grid xs={3} item>
            {" "}
            <Button
              color="primary"
              sx={{
                border: "1px solid gray",
                width: "100%",
                ":hover": {
                  backgroundColor: "rgba(145, 158, 171, 0.08)",
                },
              }}
            >
              <GoogleIcon fontSize="medium" sx={{ color: "#DF3D2F" }} />
            </Button>
          </Grid>
          <Grid xs={3} item>
            {" "}
            <Button
              color="primary"
              sx={{
                border: "1px solid gray",
                width: "100%",
                ":hover": {
                  backgroundColor: "rgba(145, 158, 171, 0.08)",
                },
              }}
            >
              <FacebookIcon fontSize="medium" sx={{ color: "blue" }} />
            </Button>
          </Grid>
          <Grid xs={3} item>
            {" "}
            <Button
              color="primary"
              sx={{
                border: "1px solid gray",
                width: "100%",
                ":hover": {
                  backgroundColor: "rgba(145, 158, 171, 0.08)",
                },
              }}
            >
              <TwitterIcon fontSize="medium" sx={{ color: "lightblue" }} />
            </Button>
          </Grid>
        </Grid>

        <Typography
          color="GrayText"
          sx={{
            width: "100%",
            paddingTop: 5,
            textAlign: "center",
            borderBottom: " 1px solid #000",
            lineHeight: "0.1em",
          }}
        >
          <span style={{ background: "#fff" }}>OR</span>
        </Typography>

        <Box>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
            }}
          >
            <FormControl
              sx={{
                marginTop: 3,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                sx={{ marginTop: 1, width: "48%", borderRadius: 20 }}
                value={name}
                fullWidth
                placeholder={"Name"}
                variant="outlined"
                id="outlined-basic"
                label="Name"
                required={true}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              >
                Name
              </TextField>
              <TextField
                sx={{ marginTop: 1, width: "48%", borderRadius: 5 }}
                value={secondName}
                fullWidth
                placeholder={"Surname"}
                variant="outlined"
                id="outlined-basic"
                label="Surname"
                onChange={(e) => setSecondName(e.target.value)}
              >
                Second name
              </TextField>
            </FormControl>
            <FormControl>
              <TextField
                sx={{ marginTop: 3, width: "100%" }}
                value={email}
                placeholder={"email"}
                variant="outlined"
                id="outlined-basic"
                label="email"
                onChange={(e) => setEmail(e.target.value)}
              >
                Email
              </TextField>
            </FormControl>
            <FormControl>
              <TextField
                sx={{ marginTop: 3, width: "100%" }}
                value={password}
                placeholder={"password"}
                variant="outlined"
                id="outlined-basic"
                label="password"
                onChange={(e) => setPassword(e.target.value)}
              >
                password
              </TextField>
            </FormControl>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox defaultChecked sx={{ color: "#00AA55" }} />
              <Typography component={"span"} color={"InfoText"}>
                Remember me
              </Typography>
            </Box>

            <Button
              onClick={handleSubmit}
              sx={{
                marginTop: 3,
                paddingY: 1,
                backgroundColor: "#00AA55",
                color: "#fff",
              }}
              type="submit"
              variant="contained"
              fullWidth
            >
               {status === 'loading' ? <Progress /> :
            
            'send'
          }
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
