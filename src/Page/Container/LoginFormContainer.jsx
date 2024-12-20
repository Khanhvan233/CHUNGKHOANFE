import "../UIContainer/LoginForm";
import LoginForm from "../UIContainer/LoginForm";
import React, { useEffect, useState } from 'react';
import * as loginService from "../../Services/LoginService";
import * as tokenHandler from "../../Utils/TokenHandler";
import { useNavigate } from 'react-router-dom';
import { ConfigVariable } from "../../config";


const LoginFormContainer = () => {
    const navigate = useNavigate();
    const [company, setCompany] = useState('1')
    const [role, setRole] = useState("NV")
    const [userName, setUsername] = useState('')
    const [password, setPassWord] = useState('')

    const handleSubmit = async() => {
        const data = await loginService.Login({company:company, role:role, username:userName, password:password});
        if(data.isSuccess){
            await tokenHandler.saveAccessToken(data.data.data.access_token);
            if(company === '3'){
                const dataToSend = {role: ConfigVariable.roleSoGD};
                navigate('/home', { state: dataToSend });
            }else if(role === 'NV'){
                const dataToSend = {role: ConfigVariable.NV};
                navigate('/home', { state: dataToSend });
            }else if(role === "NDT"){
                const dataToSend = {role: ConfigVariable.roleNDT};
                navigate('/home', { state: dataToSend });
            }
        }else{
            alert('Đăng nhập thất bại');
        }
    }

    return (
        <LoginForm 
            role={role}
            company={company}
            setCompany={setCompany} 
            setRole={setRole} 
            userName={userName} 
            setUsername={setUsername} 
            password={password}
            setPassword={setPassWord}
            handleSubmit={handleSubmit}
        />
    )
}

export default LoginFormContainer;