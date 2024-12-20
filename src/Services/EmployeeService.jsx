import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";
import * as tokenHanler from "../Utils/TokenHandler";

export const getEmployee = async() => {
    try {
        const urlCall = URL + "employee/get";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const addEmployee = async({ho, ten, ngaySinh, diaChi, gioiTinh, sdt, daNghiViec}) => {
    try {
        const data = {
            "ho": ho,
            "ten": ten,
            "ngaySinh": ngaySinh,
            "diaChi": diaChi,
            "gioiTinh": gioiTinh,
            "sdt": sdt,
            "daNghiViec": daNghiViec
        }
        const urlCall = URL + "employee/add";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const deleteEmployee = async({id}) => {
    try {
        const data = {
            "IDNV": id,
        }
        const urlCall = URL + "employee/delete";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const updateEmployee = async({IDNV,ho, ten, ngaySinh, diaChi, gioiTinh, sdt, daNghiViec}) => {
    try {
        const data = {
            "IDNV" : IDNV,
            "ho": ho,
            "ten": ten,
            "ngaySinh": ngaySinh,
            "diaChi": diaChi,
            "gioiTinh": gioiTinh,
            "sdt": sdt,
            "daNghiViec": daNghiViec
        }
        const urlCall = URL + "employee/update";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const getEmployeeSan = async() => {
    try {
        const urlCall = URL + "employee/getNVSan";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

