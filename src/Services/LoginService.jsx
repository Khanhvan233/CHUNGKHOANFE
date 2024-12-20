import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";
import * as tokenHanler from "../Utils/TokenHandler";

export const Login = async({company, role, username, password}) => {
    try {
        const data = {
            site: isNaN(Number(company)) ? company : Number(company),
            role:role,
            username: username,
            password: password,
        }
        const urlCall = URL + "auth/login";
        const response = await CallAPI({url:urlCall, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const getLoginName = async({IDNV}) => {
    try {
        const data = {
            IDNV:IDNV,
        }
        const token = await tokenHanler.getAccessToken();
        const urlCall = URL + "auth/getLoginName";
        const response = await CallAPI({url:urlCall, data:data, token:token});
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const addLoginName = async({lgname, passWord, username}) => {
    try {
        const data = {
            "lgname" : lgname,
            "passWord" : passWord,
            "username" : username
        }
        const token = await tokenHanler.getAccessToken();
        const urlCall = URL + "auth/createLogin";
        const response = await CallAPI({url:urlCall, data:data, token:token});
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const deleteLoginName = async({lgname, username}) => {
    try {
        const data = {
            "lgname" : lgname,
            "username" : username
        }
        const token = await tokenHanler.getAccessToken();
        const urlCall = URL + "auth/deleteLogin";
        const response = await CallAPI({url:urlCall, data:data, token:token});
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}