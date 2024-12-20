import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";
import * as tokenHanler from "../Utils/TokenHandler";

export const getBanks = async() => {
    try {
        const urlCall = URL + "bank/getBank";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const getBankAccount = async({idNDT}) => {
    try {
        const data ={
            "idNDT" : idNDT
        }
        const urlCall = URL + "bank/getBankAccount";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data});
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const addBankAccount = async({matk, tentaikhoan, idndt, idnganhang, sodu}) => {
    try {
        const data = {
            "matk": matk,
            "tentaikhoan": tentaikhoan,
            "idndt": idndt,
            "idnganhang": idnganhang,
            "sodu": sodu
        }
        const urlCall = URL + "bank/addBankAccount";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const deleteBankAccount = async({matk}) => {
    try {
        const data = {
            "matk": matk
        }
        const urlCall = URL + "bank/deleteBankAccount";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const updateBankAccount = async({matk, tentaikhoan, idndt, idnganhang, sodu}) => {
    try {
        const data = {
            "matk": matk,
            "tentaikhoan": tentaikhoan,
            "idndt": idndt,
            "idnganhang": idnganhang,
            "sodu": sodu
        }
        const urlCall = URL + "bank/updateBankAccount";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}