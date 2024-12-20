
import Employee from "../UIContainer/Employee";
import React, { useState, useEffect } from 'react';
import * as employeeService from "../../Services/EmployeeService";
import { mapEmployeeData } from '../../Utils/mapData';
import * as validation from "../../Utils/ValidationHanler";
import * as loginService from "../../Services/LoginService";


const EmployeeSanContainer = () => {
    const [data, setData] = useState([]);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [id, setID] = useState(null);

    const initData = async() => {
        const response = await employeeService.getEmployeeSan();
        const processData = mapEmployeeData(response.data.data);
        setData(processData);
    }

    const handleRowClick = async(rowData) => {
        setPassword('');
        setID(rowData["ID"]);
        const response = await loginService.getLoginName({IDNV:rowData["ID"]})
        if(response.isSuccess){
            if(response.data.data.userName === null){
                setLogin('');
            }else{
                setLogin(response.data.data.userName);
            }
        }else{
            setLogin('');
        }
    }

    const onAddLogin = async() => {
        try{
            validation.inputNullValidation({values:id, notification:"Chưa chọn dòng xóa"});
            validation.inputNullValidation({values:login, notification:"Login name không để trống"});
            validation.inputNullValidation({values:password, notification:"Mật khẩu không để trống"});
            const response = await loginService.addLoginName({lgname:login, passWord:password, username:id.toString()});
            if(response.isSuccess){
                alert("Tạo tài khoản thành công");
            }else{
                alert("Tạo tài khoản thất bại");
            }
        }catch(error){
            alert(error);
        }
    }

    const onDeleteLogin = async() => {
        try{
            validation.inputNullValidation({values:id, notification:"Chưa chọn dòng xóa"});
            validation.inputNullValidation({values:login, notification:"Login name không để trống"});
            const response = await loginService.deleteLoginName({lgname:login, username:id.toString()});
            if(response.isSuccess){
                alert("Xóa tài khoản thành công");
            }else{
                alert("Xóa tài khoản thất bại");
            }
        }catch(error){
            alert(error);
        }
        
    }

    useEffect(() => {
        initData();
    }, []);

    return(
        <Employee isEmployee={false} 
                  data={data} 
                  handleRowClick={handleRowClick} 
                  login={login} setLogin={setLogin}
                  password={password} setPassword={setPassword}
                  onAddLogin={onAddLogin} onDeleteLogin={onDeleteLogin}
        />
    )
}

export default EmployeeSanContainer