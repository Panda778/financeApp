import HeadTags from "../App/Components/HeadTags/HeadTags";
import Layout from "../App/Components/Layout/Layout";
import LoginForm from "../App/Components/LoginForm/LoginForm";
import { useEffect, useState } from "react";
import LendingLayout from "../App/Components/Layout/LendingLayout/LendingLayout";
import { useDispatch } from "react-redux";
import {
  loginUser,
  reverseUser,
  UserStatus,
} from "../App/Redux/feachers/userSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
      router.push('/me/main')
    if (email && password.trim().length) {
      return false;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
   
        router.push('/me/main')
    }
  }, []);
  return (
    <LendingLayout>
      <HeadTags title="login" />
      <LoginForm
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </LendingLayout>
  );
}
