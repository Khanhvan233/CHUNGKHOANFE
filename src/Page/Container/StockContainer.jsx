import Stock from "../UIContainer/Stock";
import * as stockService from "../../Services/StockService";
import React, { useState, useEffect } from 'react';
import { mapStockData, mapStockPriceData } from "../../Utils/mapData";
import * as validation from "../../Utils/ValidationHanler";


const StockContainer = () => {
    const [dataStock, setDataStock] = useState([]);
    const [macp, setMacp] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [fax, setFax] = useState(null);
    const [name, setName] = useState(null);
    const [numCP, setNumCP] = useState(null);
    const [dataStockPrice, setDataStockPrice] = useState([]);
    const [price, setprice] = useState(null);
    const [macpPrice, setMacpPrice] = useState(null);
    const [priceHight, setPriceHight] = useState(null);
    const [priceLow, setPriceLow] = useState(null);
    const [date, setDate] = useState(null);
    const [IDPrice, setIDPrice] = useState(null);

    const initData = async() => {
        const response = await stockService.getStock();
        if(response.isSuccess){
            const dataProcess = await mapStockData(response.data.data);
            setDataStock(dataProcess);
        }
    }

    const initDataPrice = async(MACP) => {
        const response = await stockService.getStockPrice({macp:MACP});
        if(response.isSuccess){
            const dataProcess = await mapStockPriceData(response.data.data);
            setDataStockPrice(dataProcess);
        }
    }

    useEffect(() => {
        initData();
    }, []);

    const handleRowClick = async(rowData) => {
        setMacp(rowData.MACP ?? '');
        setPhone(rowData["Số điện thoại"] ?? '');
        setAddress(rowData["Địa chỉ"] ?? '');
        setEmail(rowData.Email ?? '');
        setFax(rowData.Fax ?? '');
        setName(rowData["Tên công ty"] ?? '');
        setNumCP(rowData["Số lượng cổ phiếu"] ?? '');
        initDataPrice(rowData.MACP);
    }

    const onAdd = async() => {
        try{
            validation.inputNullValidation({values:macp, notification:"Không được để trống mã cổ phiếu"});
            validation.inputNullValidation({values:name, notification:"Không được để trống tên công ty"});
            validation.inputNullValidation({values:address, notification:"Không được để trống địa chỉ"});
            const response = await stockService.addStock({macp:macp, ten_cong_ty:name, dia_chi: address, sdt:phone, fax:fax, email:email, tong_so_luong_cp:numCP});
            if(response.isSuccess){
                alert("Thêm thành công ");
                initData();
            }else{
                alert("Thất bại");
            }
        }catch(error){
            alert(error);
        }
        
    }

    const onDelete = async() => {
        try{
            validation.inputNullValidation({values:macp, notification:"Không được để trống mã cổ phiếu"});
            const response = await stockService.deleteStock({macp:macp});
            if(response.isSuccess){
                alert('Xóa thành công');
                onRefresh();
            }else{
                alert("Xóa thất bại");
            }
        }catch(error){
            alert(error);
        }
        
    }

    const onRefresh = () => {
        setMacp('');
        setPhone('');
        setAddress('');
        setEmail('');
        setFax('');
        setName('');
        setNumCP('');
        initData();
    }

    const onUpdate = async() => {
        try{
            validation.inputNullValidation({values:macp, notification:"Không được để trống mã cổ phiếu"});
            validation.inputNullValidation({values:name, notification:"Không được để trống tên công ty"});
            validation.inputNullValidation({values:address, notification:"Không được để trống địa chỉ"});

            const response = await stockService.updateStock({macp:macp, ten_cong_ty:name, dia_chi: address, sdt:phone, fax:fax, email:email, tong_so_luong_cp:numCP});
            if(response.isSuccess){
                alert("Cập nhật thành công ");
                initData();
            }else{
                alert("Thất bại");
            }
        }catch(error){
            alert(error);
        }
       
    }

    const handleRowClickPrice = async(rowData) => {
        setprice(rowData["Giá tham chiều"]);
        setMacpPrice(rowData["MACP"]);
        setPriceHight(rowData["Giá trần"]);
        setPriceLow(rowData["Giá sàn"]);
        setDate(rowData["Ngày"]);
        setIDPrice(rowData["ID"]);
    }

    const onRefreshPrice = () => {
        setprice('');
        setMacpPrice('');
        setPriceHight('');
        setPriceLow('');
        setDate('');
        setIDPrice('');
        initDataPrice(macpPrice);
    }

    const onAddPrice = async() => {
        try{
            validation.inputNullValidation({values:macpPrice, notification:"Không được để trống"});
            validation.inputNullValidation({values:priceLow, notification:"Không được để trống"});
            validation.inputNullValidation({values:priceHight, notification:"Không được để trống"});
            validation.inputNullValidation({values:price, notification:"Không được để trống"});
            validation.inputNullValidation({values:date, notification:"Không được để trống"});

            const response = await stockService.addStockPrice({macp:macpPrice, ngay:date, giasan:priceLow, giatran:priceHight, giathamchieu:price});
            if(response.isSuccess){
                alert('Thêm thành công');
                initDataPrice(macpPrice);
            }else{
                alert('Thất bại');
            }
        }catch(error){
            alert(error);
        }
    }

    const onDeletePrice = async() => {
        try{
            validation.inputNullValidation({values:macpPrice, notification:"Không được để trống"});
            const response = await stockService.deleteStockPrice({magia:IDPrice});
            if(response.isSuccess){
                alert("Xóa thành công");
                onRefreshPrice();
            }else{
                alert("Xóa thành công");
            }
        }catch(error){
            alert(error);
        }
        
    }

    const onUpdatePrice = async() => {
        try{
            validation.inputNullValidation({values:macpPrice, notification:"Không được để trống"});
            validation.inputNullValidation({values:priceLow, notification:"Không được để trống"});
            validation.inputNullValidation({values:priceHight, notification:"Không được để trống"});
            validation.inputNullValidation({values:price, notification:"Không được để trống"});
            validation.inputNullValidation({values:date, notification:"Không được để trống"});
            
            const response = await stockService.updateStockPrice({idGia:IDPrice ,macp:macpPrice, ngay:date, giasan:priceLow, giatran:priceHight, giathamchieu:price});
            if(response.isSuccess){
                alert('Sửa thành công');
                initDataPrice(macpPrice);
            }else{
                alert('Thất bại');
            }
        }catch(error){
            alert(error);
        }
        
    }

    return(
        <Stock 
            dataStock={dataStock} 
            setMacp={setMacp} macp={macp}
            setPhone={setPhone} phone={phone}
            setAddress={setAddress} address={address}
            setEmail={setEmail} email={email}
            setFax={setFax} fax={fax}
            setName={setName} name={name}
            setNumCP={setNumCP} numCP={numCP}
            handleRowClick={handleRowClick} onRefresh={onRefresh}
            onAdd={onAdd} onDelete={onDelete} onUpdate={onUpdate}
            dataStockPrice={dataStockPrice}
            price={price} setprice={setprice}
            setMacpPrice={setMacpPrice} macpPrice={macpPrice}
            setPriceHight={setPriceHight} priceHight={priceHight}
            setPriceLow={setPriceLow} priceLow={priceLow}
            setDate={setDate} date={date} handleRowClickPrice={handleRowClickPrice} 
            onRefreshPrice={onRefreshPrice} onAddPrice={onAddPrice}
            onDeletePrice={onDeletePrice} onUpdatePrice={onUpdatePrice}/>
    )
}

export default StockContainer;