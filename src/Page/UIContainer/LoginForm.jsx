import React, { useEffect, useState } from 'react'
import '../../Styles/LoginForm.css';
import { ImUserTie } from "react-icons/im";
import { FaUnlock } from "react-icons/fa6";
import InputCustom from '../../Components/InputCustom';


const LoginForm = ({ company,role,setCompany, setRole, userName, setUsername, password, setPassword, handleSubmit}) => {
  const companyOptions = [
    {label : 'Công Ty 010', value :1},
    {label : 'Công Ty 020', value :2},
    {label : 'Sàn HNX', value :3}
  ] 
  function handleSelectedCompany(event){
    setCompany(event.target.value)
  }
  const roleOptions = [
    {label : 'Nhân Viên', value :"NV"},
    {label : 'Nhà Đầu tư', value :"NDT"},
  ] 
  function handleSelectedRole(event){
    setRole(event.target.value)
  }
  
  // use thís to make own body 
  useEffect(() => {
    document.body.classList.add('login-page');
    return () => document.body.classList.remove('login-page');
  }, []);
  
  return (
    <div className='wrapper'>
    <div >
      <h1>Login</h1>
      <div className="wrapperselect">
        <select className='select-box' onChange={handleSelectedCompany} value={company}>
          {companyOptions.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <select className='select-box' onChange={handleSelectedRole} value={role}>
          {roleOptions.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className='input-box'>
        <InputCustom type= 'text' placeholder='UserName' text={userName} setText={setUsername} />
        <ImUserTie className='icon'/>
      </div>

      <div className='input-box'>
        <InputCustom type = 'password' placeholder='Password' text={password} setText={setPassword} />
        <FaUnlock className='icon'/>  
      </div>

      <button onClick={handleSubmit}>Login</button>
    </div>
    
  </div>
  )
}

export default LoginForm