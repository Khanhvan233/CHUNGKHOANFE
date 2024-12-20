
import Investor from "../UIContainer/Investor";
import React, { useState, useEffect } from 'react';
import * as investorService from "../../Services/InvestorService";
import { mapInvestorData, mapBankData, mapBankAccountData } from "../../Utils/mapData";
import * as bankService from "../../Services/BankService";
import * as validation from "../../Utils/ValidationHanler";

const InvestorContainer = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [name, setName] = useState(null);
    const [matknh, setMatknh] = useState(null);
    const [dayOfBitrh, setDayOfBitrh] = useState(null);
    const [address, setAddress] = useState(null);
    const [sex, setSex] = useState(null);
    const [password, setPassword] = useState(null);
    const [dataNDT, setDataNDT] = useState([]);
    const [dataTKNH, setDataTKNH] = useState([]);
    const [ho, setHo] = useState(null);
    const [cmnd, setCmnd] = useState(null);
    const [email, setEmail] = useState(null);
    const [placeOfBirth, setPlaceOfBirth] = useState(null);
    const [passwordCommand, setPasswordCommand] = useState(null);
    const [ngaycap, setNgayCap] = useState(null);
    const [sodu, setSoDu] = useState(null);
    const [tenTKNH, setTenTKNH] = useState(null);
    const [maNDT, setMaNDT] = useState(null);
    const [options, setOptions] = useState([]);

    const initBank = async() => {
        const response = await bankService.getBanks();
        if(response.isSuccess){
            const dataProcess = mapBankData(response.data.data);
            setOptions(dataProcess);
        }
    }

    const initBankAcount = async(idNDT) => {
        const response = await bankService.getBankAccount({idNDT:idNDT});
        if(response.isSuccess){
            const dataProcess = await mapBankAccountData(response.data.data);
            setDataTKNH(dataProcess);
        }
    }

    const initDta = async() => {
        const response = await investorService.getInvestor();
        if(response.isSuccess){
            const dataProcess = await mapInvestorData(response.data.data);
            setDataNDT(dataProcess);
        }
    }

    const handleRowClick = async(rowData) => {
        setName(rowData["Tên"]?.trim() || null);
        setHo(rowData["Họ"]?.trim() || null);
        setMaNDT(rowData["MATK"] || null);
        setDayOfBitrh(rowData["Ngày sinh"] || null);
        setAddress(rowData["Địa chỉ"] || null);
        setSex(rowData["Giới tính"] || null);
        setPassword(rowData["Mật khẩu"] || null);
        setPasswordCommand(rowData["Mật khẩu đặt lệnh"] || null);
        setCmnd(rowData["CMND"] || null);
        setEmail(rowData["Email"] || null);
        setPlaceOfBirth(rowData["Nơi sinh"] || null);
        setNgayCap(rowData["Ngày Cấp"] || null);
        initBankAcount(rowData["MATK"]);
       
    }

    const onRefresh = () => {
        setName('');
        setHo('');
        setMatknh('');
        setDayOfBitrh('');
        setAddress('');
        setSex('');
        setPassword('');
        setPasswordCommand('');
        setCmnd('');
        setEmail('');
        setPlaceOfBirth('');
        setNgayCap('');
        initDta();
    }

    const onAdd = async() => {
        try{
            validation.inputNullValidation({values:ho, notification:"Họ không để trống"});
            validation.inputNullValidation({values:name, notification:"Tên không để trống"});
            validation.inputNullValidation({values:dayOfBitrh, notification:"NGày sinh không để trống"});
            validation.inputNullValidation({values:address, notification:"Địa chỉ không để trống"});
            validation.inputNullValidation({values:email, notification:"Email không để trống"});
            validation.inputNullValidation({values:cmnd, notification:"CMND không để trống"});

            const response = await investorService.addInvestor({ho:ho, ten:name, ngaySinh:dayOfBitrh, diaChi:address,
                                                                gioiTinh:sex,noisinh:placeOfBirth,email:email,cmnd:cmnd,
                                                                ngaycap:ngaycap,matkhau:password, matkhaudatlenh:passwordCommand
                                                                });

            if(response.isSuccess){
                alert('Thêm thành công');
                initDta();
            }else{
                alert('Thêm thất bại');
            }


        }catch(error){
            alert(error)
        }
    }

    const onUpdate = async() => {
        try{
            validation.inputNullValidation({values:ho, notification:"Họ không để trống"});
            validation.inputNullValidation({values:name, notification:"Tên không để trống"});
            validation.inputNullValidation({values:dayOfBitrh, notification:"NGày sinh không để trống"});
            validation.inputNullValidation({values:address, notification:"Địa chỉ không để trống"});
            validation.inputNullValidation({values:email, notification:"Email không để trống"});
            validation.inputNullValidation({values:cmnd, notification:"CMND không để trống"});
            validation.inputNullValidation({values:maNDT, notification:"Bạn chưa chọn dòng nào"});

            const response = await investorService.updateInvestor({idNDT:maNDT,ho:ho, ten:name, ngaySinh:dayOfBitrh, diaChi:address,
                                                                        gioiTinh:sex,noisinh:placeOfBirth,email:email,cmnd:cmnd,
                                                                        ngaycap:ngaycap,matkhau:password, matkhaudatlenh:passwordCommand
                                                                    });

            if(response.isSuccess){
                alert('Sửa thành công');
                initDta();
            }else{
                alert('Sửa thất bại');
            }
        }catch(error){
            alert(error);
        }

        
    }

    const onDelete = async() => {
        try{
            validation.inputNullValidation({values:maNDT, notification:"Bạn chưa chọn dòng nào"});

            const response = await investorService.deleteInvestor({id:maNDT});
            if(response.isSuccess){
                alert('Xóa thành công');
                initDta();
            }else{
                alert('Xóa thất bại');
            }
        }catch(error){
            alert(error);
        }
    }

    const handleRowClickNH = async(rowData) => {
        setMatknh(rowData['MATK']);
        setTenTKNH(rowData['Tên tài khoản']);
        setSoDu(rowData['Số dư']);
        const defaultOption = options.find(option => option.label === rowData['Ngân hàng']);
        setSelectedOption(defaultOption);

    }

    const onRefreshNH = async() => {
        setMatknh('');
        setTenTKNH('');
        setSoDu('');
        initBankAcount(maNDT);
    }

    const onAddNH = async() => {
        try{
            validation.inputNullValidation({values:maNDT, notification:"Bạn chưa chọn dòng nào"});
            validation.inputNullValidation({values:matknh, notification:"Bạn chưa chọn dòng nào"});
            validation.inputNullValidation({values:sodu, notification:"Số dư không dược để trống"});
            const response = await bankService.addBankAccount({matk:matknh, tentaikhoan:tenTKNH, idndt:maNDT, sodu:sodu, idnganhang:selectedOption.value});
            if(response.isSuccess){
                alert('Thêm thành công');
                initBankAcount(maNDT);
            }else{
                alert('Thêm thất bại');
            }

        }catch(error){
            alert(error)
        }

        
    }

    const onDeleteNH = async() => {
        try{
            validation.inputNullValidation({values:maNDT, notification:"Bạn chưa chọn dòng nào"});
            validation.inputNullValidation({values:matknh, notification:"Bạn chưa chọn dòng nào"});

            const response = await bankService.deleteBankAccount({matk:matknh});
            if(response.isSuccess){
                alert("Xóa thành công");
                initBankAcount(maNDT);
            }else{
                alert("Xóa thất bại");
            }

        }catch(error){
            alert(error)
        }

        
    }

    const onUpdateNH = async() => {
        try{
            validation.inputNullValidation({values:maNDT, notification:"Bạn chưa chọn dòng nào"});
            validation.inputNullValidation({values:matknh, notification:"Bạn chưa chọn dòng nào"});
            validation.inputNullValidation({values:sodu, notification:"Số dư không dược để trống"});

            const response = await bankService.updateBankAccount({matk:matknh, tentaikhoan:tenTKNH, idndt:maNDT, sodu:sodu, idnganhang:selectedOption.value});
            if(response.isSuccess){
                alert('Cập nhật thành công');
                initBankAcount(maNDT);
            }else{
                alert('Cập nhật thất bại');
            }

        }catch(error){
            alert(error)
        }
        
    }

    useEffect(() => {
        initDta();
        initBank();
    },[]);

    return(
        <Investor options={options} 
                  setSelectedOption={setSelectedOption} selectedOption={selectedOption}
                  ho={ho} setHo={setHo}
                  setName={setName} name={name}
                  setCmnd={setCmnd} cnmd={cmnd}
                  setAddress={setAddress} address={address}
                  setDayOfBitrh={setDayOfBitrh} dayOfBitrh={dayOfBitrh}
                  setEmail={setEmail} email={email}
                  setPlaceOfBirth={setPlaceOfBirth} placeOfBirth={placeOfBirth}
                  setPassword={setPassword} password={password}
                  setSex={setSex} sex={sex}
                  setMaTKNH={setMatknh} maTKNH={matknh}
                  setPasswordCommand={setPasswordCommand} passwordCommand={passwordCommand}
                  setNgayCap={setNgayCap} ngayCap={ngaycap}
                  setSoDu={setSoDu} soDu={sodu}
                  setTenTKNH={setTenTKNH} tenTKNH={tenTKNH}
                  dataNDT={dataNDT} dataTKNH={dataTKNH}
                  handleRowClick={handleRowClick}
                  onRefresh={onRefresh}
                  onAdd={onAdd}
                  onDelete={onDelete} onUpdate={onUpdate}
                  handleRowClickNH={handleRowClickNH}
                  onRefreshNH={onRefreshNH}
                  onAddNH={onAddNH} onDeleteNH={onDeleteNH} onUpdateNH={onUpdateNH}
        />
    )
}

export default InvestorContainer;







