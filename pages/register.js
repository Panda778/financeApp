import { useState } from "react";
import Layout from "../App/Components/Layout/Layout"
import RegisterForm from "../App/Components/RegisterForm/RegisterForm";



const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [commitPas,setCommitPas]= useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password ,commitPas};
        dispatch(loginUser(data));
        
      
      };
    return (
        <Layout>
            <RegisterForm handleSubmit={handleSubmit} email={email} commitPas={commitPas} password={password} setEmail={setEmail} setPassword={setPassword} setCommitPas={ setCommitPas}/>
        </Layout>
    )
}

export default Register