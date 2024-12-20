import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";
import * as tokenHanler from "../Utils/TokenHandler";

export const getInvestor = async() => {
    try {
        const urlCall = URL + "ndt/getNDT";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const addInvestor = async({ho, ten, ngaySinh, diaChi, gioiTinh, noisinh, email, cmnd, ngaycap, matkhau, matkhaudatlenh}) => {
    try {
        const data = {
            "ho": ho,
            "ten": ten,
            "ngaysinh": ngaySinh,
            "noisinh": noisinh,
            "gioitinh": gioiTinh,
            "diachi": diaChi,
            "email": email,
            "cmnd": cmnd,
            "ngaycap": ngaycap,
            "matkhau": matkhau,
            "matkhaudatlenh": matkhaudatlenh
        }
        const urlCall = URL + "ndt/add";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const deleteInvestor = async({id}) => {
    try {
        const data = {
            "idNDT": id,
        }
        const urlCall = URL + "ndt/delete";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const updateInvestor = async({idNDT,ho, ten, ngaySinh, diaChi, gioiTinh, noisinh, email, cmnd, ngaycap, matkhau, matkhaudatlenh}) => {
    try {
        const data = {
            "idNDT" : idNDT,
            "ho": ho,
            "ten": ten,
            "ngaysinh": ngaySinh,
            "noisinh": noisinh,
            "gioitinh": gioiTinh,
            "diachi": diaChi,
            "email": email,
            "cmnd": cmnd,
            "ngaycap": ngaycap,
            "matkhau": matkhau,
            "matkhaudatlenh": matkhaudatlenh
        }
        const urlCall = URL + "ndt/update";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}
