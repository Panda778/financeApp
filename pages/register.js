import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LendingLayout from "../App/Components/Layout/LendingLayout/LendingLayout";
import RegisterForm from "../App/Components/RegisterForm/RegisterForm";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import {
  singUpUser,
  UserDatas,
  UserStatus,
} from "../App/Redux/feachers/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");

  const rout = useRouter();
  const status = useSelector(UserStatus);
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      singUpUser({
        email,
        password,
        name,
        secondName,
      })
    );
  };
  console.log(status);

  useEffect(() => {
    if (status === "success") {
      rout.push("/me/main");
    } else {
      Error("wqeqeqwe");
    }
  }, [status]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Paper
          sx={{
            width: "50%",
            height: {
              xl: "900px",
              lg: "700px",
            },
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
                style={{ width: "50px" }}
                alt=""
              />
              <Typography sx={{ marginTop: 1.5 }}>
                Already have an account?
                <Link href={"/login"} passHref>
                  <Typography
                    color={"green"}
                    sx={{ cursor: "pointer", paddingLeft: 1 }}
                    component={"span"}
                  >
                    Login
                  </Typography>
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "464px",
                marginTop: { xl: 15, lg: 10 },
                marginBottom: { xl: 15, lg: 10 },
              }}
            >
              <Typography
                fontWeight={"700"}
                sx={{
                  lineHeight: "1.5",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  margin: "80px 0 40px",
                }}
                variant={"h4"}
                component={"h4"}
              >
                Manage the job more effectively with Minimal
              </Typography>
              <img
                src="https://minimal-kit-react.vercel.app/static/illustrations/illustration_register.png"
                alt=""
              />
            </Box>
          </Container>
        </Paper>
        <RegisterForm
          handleSubmit={handleSubmit}
          email={email}
          name={name}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          setName={setName}
          secondName={secondName}
          setSecondName={setSecondName}
        />
      </Box>
    </>
  );
};

export default Register;
