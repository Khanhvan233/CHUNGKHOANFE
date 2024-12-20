

import StockOfNDT from "../UIContainer/StockOfNDT";
import * as reportStockService from "../../Services/ReportService";
import React, { useState, useEffect } from 'react';
import { mapReportSoHuuCP, mapStockReportKhopData , mapStockReportCTKhopData} from "../../Utils/mapData";
import * as validation from "../../Utils/ValidationHanler";



const StockOfNDTContainer = () => {
    const [dataStockSH, setDataStockSH] = useState([]);
    const [dataStockKhop, setDataStockKhop] = useState([]);
    const [dataStockKhopCT, setDataStockKhopCT] = useState([]);
    const [numOfAccount, setNumOfAccount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null); 
    const [selectedDateEnd, setSelectedDateEnd] = useState(null); 

    const initData = async() => {
        const response = await reportStockService.getReportSoHuCP({idNDT: 0});
        if(response.isSuccess){
            const dataProcess = await mapReportSoHuuCP(response.data.data);
            setDataStockSH(dataProcess);
        }
    }

    const getTotalBalance = async() => {
        const response = await reportStockService.getTotalBalance({idNDT:0});
        if(response.isSuccess){
            setNumOfAccount(response.data.data.total);
        }
    }

    useEffect(() => {
        initData();
        getTotalBalance();
    }, []);

    const onSaoKe = async() => {
        const response = await reportStockService.getSaoKe({StartDate: selectedDate, EndDate:selectedDateEnd});
        if(response.isSuccess){
            const dataProcess = await mapStockReportKhopData(response.data.data);
            setDataStockKhop(dataProcess);
            alert('Thành công');
        }else{
            alert('Thất bại');
        }
    }

    const handleRowClick = async(rowData) => {
        const response = await reportStockService.getCTKHOPLENH({MACP:rowData['MACP']});
        if(response.isSuccess){
            const dataProcess = await mapStockReportCTKhopData(response.data.data);
            setDataStockKhopCT(dataProcess);
        }
    }

    return(
        <StockOfNDT 
            dataStockSH={dataStockSH} 
            numOfAccount={numOfAccount} 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate}
            setSelectedDateEnd={setSelectedDateEnd} 
            selectedDateEnd={selectedDateEnd}
            onSaoKe={onSaoKe}
            dataStockKhop={dataStockKhop}
            handleRowClick={handleRowClick}
            dataStockKhopCT={dataStockKhopCT}
        />
    )
}

export default StockOfNDTContainer;