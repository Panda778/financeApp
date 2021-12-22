import HeadTags from "../App/Components/HeadTags/HeadTags";
import Layout from "../App/Components/Layout/Layout";
import LoginForm from "../App/Components/LoginForm/LoginForm";
import { useEffect, useState } from "react";
import LendingLayout from "../App/Components/Layout/LendingLayout/LendingLayout";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  loginUser,
  reverseUser,
  UserStatus,
} from "../App/Redux/feachers/userSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Progress from "../App/Components/Progress/Progress";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const status = useSelector(UserStatus);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (status === "success") {
      router.push("/me/main");
    }
  }, [status]);
  return (
    <LendingLayout>
      <HeadTags title="login" />

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Paper
          sx={{
            width: "50%",
            height: "685px",
            borderRadius: 5,
            margin: "25px 0 0 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <img
                src="https://minimal-kit-react.vercel.app/static/logo.svg"
                style={{ width: "50px", marginBottom: 10 }}
                alt=""
              />
              <Typography sx={{ marginTop: 1.5 }}>
                Do you have an account ?
                <Link href={"/register"} passHref>
                  <Typography
                    color={"green"}
                    sx={{ cursor: "pointer", paddingLeft: 1 }}
                    component={"span"}
                  >
                    Get started
                  </Typography>
                </Link>
              </Typography>
            </Box>
            <Box sx={{ maxWidth: "464px"}}>
              <Typography variant={"h4"} sx={{lineHeight:'1.5', paddingLeft:'40px', paddingRight:'40px', margin:'80px 0 40px', fontWeight:'bold'}} component={"h4"}>
                Hi, Welcome back
              </Typography>
              <img
                src="https://minimal-kit-react.vercel.app/static/illustrations/illustration_login.png"
                alt=""
              />
            </Box>
          </Container>
        </Paper>
        <LoginForm
          handleSubmit={handleSubmit}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </Box>
    </LendingLayout>
  );
}
