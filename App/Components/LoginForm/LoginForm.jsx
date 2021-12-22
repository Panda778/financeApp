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
import PieChart from "../Charts/PieChart/PieChart";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const LoginForm = ({
  handleSubmit,
  email,
  password,
  setPassword,
  setEmail,
}) => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "primary",
          width: "70%",
          margin: "0 auto",
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
            <Typography variant={"h5"}>Sign in to Minimal</Typography>
            <Typography component={"p"} color={"GrayText"}>
              Enter your details below.
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
            <FormControl sx={{ marginTop: 3 }}>
              <TextField
                sx={{ marginTop: 1, width: "100%" }}
                value={email}
                fullWidth
                autoFocus
                placeholder={"email"}
                variant="outlined"
                id="outlined-basic"
                label="email"
                onChange={(e) => setEmail(e.target.value)}
              >
                email
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

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox defaultChecked sx={{ color: "#00AA55" }} />
                <Typography component={"span"} color={"InfoText"}>
                  Remember me
                </Typography>
              </Box>
            </FormControl>

            <Button
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
              send
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
