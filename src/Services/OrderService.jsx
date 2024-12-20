import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";
import * as tokenHanler from "../Utils/TokenHandler";


export const addOrder = async({matknh, macp, loailenh, loaigd='B', soluong, gia}) => {
    try {
        const data = {
            "matknh": matknh,
            "macp": macp,
            "loailenh": loailenh,
            "loaigd": loaigd,
            "soluong": soluong,
            "gia": gia
        }
        const urlCall = URL + "order/addOrder";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}