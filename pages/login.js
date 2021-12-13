import HeadTags from "../App/Components/HeadTags/HeadTags";
import Layout from "../App/Components/Layout/Layout"
import LoginForm from "../App/Components/LoginForm/LoginForm";
import { useState } from "react";
import LendingLayout from "../App/Components/Layout/LendingLayout/LendingLayout";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        dispatch(loginUser(data));
        
      
      };
    return (
        <LendingLayout>
            <HeadTags title='login'/>
            <LoginForm handleSubmit={handleSubmit} email={email} password={password} setEmail={setEmail} setPassword={ setPassword}/>
        </LendingLayout>
    );
}