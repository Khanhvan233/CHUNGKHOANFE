import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";
import * as tokenHanler from "../Utils/TokenHandler";

export const getStock = async() => {
    try {
        const urlCall = URL + "stock/getStocks";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const addStock = async({macp, ten_cong_ty, dia_chi, sdt, fax, email, tong_so_luong_cp}) => {
    try {
        const data = {
            "macp": macp,
            "ten_cong_ty": ten_cong_ty,
            "dia_chi": dia_chi,
            "sdt": sdt,
            "fax": fax,
            "email": email,
            "tong_so_luong_cp": tong_so_luong_cp,
            "id_san": "HNX"
        }
        const urlCall = URL + "stock/addStock";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const deleteStock = async({macp}) => {
    try {
        const data = {
            "macp": macp,
        }
        const urlCall = URL + "stock/deleteStock";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const updateStock = async({macp, ten_cong_ty, dia_chi, sdt, fax, email, tong_so_luong_cp}) => {
    try {
        const data = {
            "macp": macp,
            "tencongty":ten_cong_ty,
            "diachi": dia_chi,
            "sdt": sdt,
            "fax":fax,
            "email": email,
            "tongsoluongcp": tong_so_luong_cp,
            "idsan": "HNX"
        }
        const urlCall = URL + "stock/updateStock";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const getStockPrice = async({macp}) => {
    try {
        const data = {
            "macp": macp,
        }
        const urlCall = URL + "price/getPrice";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const addStockPrice = async({macp, ngay, giasan, giatran, giathamchieu}) => {
    try {
        const data = {
            "ngay": ngay,
            "giasan": giasan,
            "giatran": giatran,
            "giathamchieu": giathamchieu,
            "idcophieu": macp
        }
        const urlCall = URL + "price/addPrice";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const deleteStockPrice = async({magia}) => {
    try {
        const data = {
            "magia" : magia
        }
        const urlCall = URL + "price/deletePrice";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}

export const updateStockPrice = async({idGia,macp, ngay, giasan, giatran, giathamchieu}) => {
    try {
        const data = {
            "id": idGia,
            "ngay": ngay,
            "giasan": giasan,
            "giatran": giatran,
            "giathamchieu": giathamchieu,
            "idcophieu": macp
        }
        const urlCall = URL + "price/updatePrice";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}


export const getStockPriceNow = async({macp}) => {
    try {
        const data = {
            "macp": macp,
        }
        const urlCall = URL + "price/getPriceNow";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}