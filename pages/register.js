import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Layout from "../App/Components/Layout/Layout"
import LendingLayout from "../App/Components/Layout/LendingLayout/LendingLayout";
import RegisterForm from "../App/Components/RegisterForm/RegisterForm";
import { singUpUser, UserDatas, UserStatus } from "../App/Redux/feachers/userSlice";


const Register = () => {
const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState('')
    const [secondName, setSecondName] = useState('')


    const rout = useRouter()
    const status = useSelector(UserStatus)
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(singUpUser({
            email, password, name, secondName
        }))
        if (email && password && name && secondName.trim().length) {
            return false
        }
      
    };
 console.log(status);

    useEffect(() => {
        if (status === 'success') {
           rout.push('/me/main')
        } else {
            Error('wqeqeqwe')
       }
    },[status])
   
    return (
        <LendingLayout>
            <RegisterForm handleSubmit={handleSubmit} email={email} name={name} password={password} setEmail={setEmail} setPassword={setPassword} setName={setName} secondName={secondName} setSecondName={setSecondName }/>
        </LendingLayout>
    )
}

export default Register