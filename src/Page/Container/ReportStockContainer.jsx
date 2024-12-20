import ReportStock from "../UIContainer/ReportStock";
import React, { useState, useEffect } from 'react';
import { mapInvestorDataCompobox, mapReportSoHuuCP } from "../../Utils/mapData";
import * as investorService from "../../Services/InvestorService";
import { getReportSoHuCP } from "../../Services/ReportService";
import * as validation from "../../Utils/ValidationHanler";

const ReportStockContainer = () => {
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([]);

    const onFind = async() => {
        try{
            validation.inputNullValidation({values:selectedOption?.value, notification:"Bạn phải chọn một nhà đầu tư"});

            const response = await getReportSoHuCP({idNDT: selectedOption.value});
            if(response.isSuccess){
                const dataProcess = await mapReportSoHuuCP(response.data.data);
                setData(dataProcess);
            }
        }catch(error){
            alert(error);
        }
    }

    const initData = async() => {
        const response = await investorService.getInvestor();
        if(response.isSuccess){
            const dataProcess = await mapInvestorDataCompobox(response.data.data);
            setOptions(dataProcess);
        }
    }

    useEffect(() => {
        initData();
    }, []);


    return(
        <ReportStock data={data} 
                     handleRowClick={()=>{}} 
                     selectedOption={selectedOption} 
                     setSelectedOption={setSelectedOption} 
                     options={options}
                     onFind={onFind}
        />
    )
}

export default ReportStockContainer;