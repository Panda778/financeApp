import { useState } from "react";
import HeadTags from "../App/Components/HeadTags/HeadTags";
import Layout from "../App/Components/Layout/Layout"
import LendingLayout from "../App/Components/Layout/LendingLayout/LendingLayout";
import RegisterForm from "../App/Components/RegisterForm/RegisterForm";
import WelcomePage from "../App/Components/WelcomPage/WelcomePage";



const Welcome = () => {

    return (
        <LendingLayout>
            <HeadTags title={'welcome'}></HeadTags>
            
            <WelcomePage/>
        </LendingLayout>
    )
}

export default Welcome