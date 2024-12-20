
import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";
import * as tokenHanler from "../Utils/TokenHandler";



export const getReportSoHuCP = async({idNDT}) => {
    try {
        const data = {
            "idNDT": idNDT,
        }
        const urlCall = URL + "report/getSohuu";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const getTotalBalance = async({idNDT}) => {
    try {
        const data = {
            "idNDT" : idNDT,
        }
        const urlCall = URL + "bank/getTotalBalance";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const getSaoKe = async({idNDT=0, StartDate, EndDate}) => {
    try {
        const data = {
            "idNDT" : idNDT,
            "StartDate" : StartDate,
            "EndDate" : EndDate
        }
        const urlCall = URL + "report/getSaoKe";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const getCTKHOPLENH = async({MACP, idNDT=0}) => {
    try {
        const data = {
            "idNDT" : idNDT,
            "MACP" : MACP
        }
        const urlCall = URL + "report/getCTKHOPLENH";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}