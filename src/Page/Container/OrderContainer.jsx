
import Sell from "../UIContainer/Order";
import React, { useState, useEffect } from 'react';
import * as mapData from "../../Utils/mapData";
import * as stockService from "../../Services/StockService";
import * as bankService from "../../Services/BankService";
import * as validation from "../../Utils/ValidationHanler";
import { addOrder } from "../../Services/OrderService";

const OrderContainer = ({isSell = true}) => {
    const [options, setOptions] = useState([]);
    const [optionsTKNH, setOptionsTKNH] = useState([]);
    const [price, setPrice] = useState(null);
    const [priceHight, setPriceHight] = useState(null);
    const [priceLow, setPriceLow] = useState(null);
    const [slCoPhieu, setSlCoPhieu] = useState(null);
    const [tongMoney, setTongMoney] = useState(null);

    const [formData, setFormData] = useState({
        stock: "",
        orderType: "LO",
        account: "",
        quantity: "",
        price: "",
        password: "",
      });

    const initData = async() => {
        const response = await stockService.getStock();
        if(response.isSuccess){
            const dataProcess = await mapData.mapStockCompoboxData(response.data.data);
            setOptions(dataProcess);
        }
    }

    const initDataTKNH = async() => {
        const response = await bankService.getBankAccount({idNDT:0});
        if(response.isSuccess){
            const dataProcess = await mapData.mapBankAccountCompoboxData(response.data.data);
            setOptionsTKNH(dataProcess);
        }
    }

    const initDataPrice = async(macp) => {
        const response = await stockService.getStockPriceNow({macp:macp});
        if(response.isSuccess){
            const price = response.data.data;
            setPrice(price.price);
            setPriceLow(price.priceLow);
            setPriceHight(price.priceHight);
            setSlCoPhieu(price.maxSL);
        }
    }

    const handleChange = (selectedOption) => {
        setFormData((prevData) => ({
          ...prevData,
          stock: selectedOption ? selectedOption.value : "",
        }));
        initDataPrice(selectedOption.value);
      };

    const handleChange1 = (selectedOption) => {
        setTongMoney(selectedOption.SODU);
        setFormData((prevData) => ({
            ...prevData,
            account: selectedOption ? selectedOption.value : "",
        }));
    };

    useEffect(() => {
        initData();
        initDataTKNH();
    }, []);

    const onSell = async() => {
        try{
            validation.inputNullValidation({values:formData.account, notification:"Bạn phải chọn tài khoản"});
            validation.inputNullValidation({values:formData.orderType, notification:"Bạn phải chọn loại giao dịch"});
            validation.inputNullValidation({values:formData.password, notification:"Bạn phải nhập mật khẩu"});
            validation.inputNullValidation({values:formData.price, notification:"Bạn phải nhập giá"});
            validation.inputNullValidation({values:formData.quantity, notification:"Bạn phải nhập số lượng"});
            validation.inputNullValidation({values:formData.stock, notification:"Bạn phải chọn cổ phiếu"});
            const gia = parseFloat(formData.price);
            const soLuong = parseFloat(formData.quantity);
            if(isSell){
                if(soLuong < 0 || soLuong > slCoPhieu || gia < 0){
                    throw new Error('Giá hoặc số lượng không hợp lệ');
                }
            }else{
                if(soLuong * gia > tongMoney){
                    throw new Error('Số tiền mua đã vượt qua số tiền trong tài khoản');
                }
            }
            
            const response = await addOrder({matknh:formData.account, macp:formData.stock, loailenh:formData.orderType, loaigd:isSell ?'B':'M', soluong: soLuong, gia:gia});
            if(response.isSuccess){
                alert('Thành công');
            }else{
                alert('Thất bại');
            }
            
        }catch(error){
            alert(error);
        }
    }

    return(
        <Sell options={options} 
              formData={formData} 
              setFormData={setFormData} 
              optionsTKNH={optionsTKNH}
              price={price}
              priceHight={priceHight}
              priceLow={priceLow}
              handleChange={handleChange}
              maxSL={slCoPhieu}
              onSell={onSell}
              isSell={isSell}
              handleChange1={handleChange1}
              tongMoney={tongMoney}
        />
    )
}

export default OrderContainer;
