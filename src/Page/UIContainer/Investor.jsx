
import TableComponent from '../../Components/TableComponent';
import '../../Styles/Home.css';
import '../../Styles/Investor.css';
import InputCustom from '../../Components/InputCustom';
import ButtonCustom from '../../Components/ButtonCustom';
import Select from 'react-select';


const Investor = ({handleRowClick, onAdd, handleRowClickNH,onRefreshNH, onRefresh,
                   onDelete, onUpdate, 
                   selectedOption, setSelectedOption, options,
                   ho,setHo,name, setName, dayOfBitrh, setDayOfBitrh, 
                   placeOfBirth, setPlaceOfBirth, address, setAddress,
                   sex, setSex, email, setEmail, cnmd, setCmnd, 
                   ngayCap, setNgayCap, password, setPassword, 
                   passwordCommand, setPasswordCommand, maTKNH, setMaTKNH,
                   tenTKNH, setTenTKNH, soDu, setSoDu, onAddNH, onDeleteNH, onUpdateNH, dataNDT, dataTKNH
                    }) => {
    const titles = ['MATK', 'Họ','Tên', 'Ngày sinh', 'Nơi sinh', 'Địa chỉ', 'Giới tính', 'Email', 'CMND', 'Ngày Cấp', 'Mật khẩu', 'Mật khẩu đặt lệnh'];
    const titlesBank = ['MATK', 'Tên tài khoản','Ngân hàng', 'Số dư'];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            height: 20, 
            fontSize: '12px', 
            padding: '0 5px', 
        }),
        option: (provided) => ({
            ...provided,
            fontSize: '12px', 
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '12px', 
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '12px', 
        }),
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className='listContainer'>
            <div className="title1">Danh sách nhà đầu tư</div>
            <div className="grid-container">
                <InputCustom placeholder='Họ' text={ho} setText={setHo}/>
                <InputCustom placeholder='Tên' text={name} setText={setName}  />
                <InputCustom placeholder='Ngày Sinh' text={dayOfBitrh} setText={setDayOfBitrh}/>
                <InputCustom placeholder='Nơi sinh'  text={placeOfBirth} setText={setPlaceOfBirth}/>
                <InputCustom placeholder='Địa chỉ'  text={address} setText={setAddress}/>
                <InputCustom placeholder='Giới tính' text={sex} setText={setSex} />
                <InputCustom placeholder='Email' text={email} setText={setEmail} />
                <InputCustom placeholder='CMND' text={cnmd} setText={setCmnd}/>
                <InputCustom placeholder='Ngày Cấp' text={ngayCap} setText={setNgayCap}/>
                <InputCustom placeholder='Mật khẩu' text={password} setText={setPassword}/>
                <InputCustom placeholder='Mật khẩu đặt lệnh' text={passwordCommand} setText={setPasswordCommand} />
            </div>

            <div className="grid-container">
                <div className="grid-item">
                        <ButtonCustom children="Thêm" className="input" onClick={onAdd}/>
                    </div>
                    <div className="grid-item">
                        <ButtonCustom children="Xóa" className="input" onClick={onDelete}/>
                    </div>
                    <div className="grid-item">
                        <ButtonCustom children="Sửa" className="input" onClick={onUpdate}/>
                    </div>
                    <div className="grid-item">
                        <ButtonCustom children="Làm mới" className="input" onClick={onRefresh}/>
                    </div>
            </div>
            
            <TableComponent titles={titles} data={dataNDT} handleRowClick={handleRowClick} />


            <div className="title1">Danh sách tài khoản ngân hàng</div>
            <div className="grid-container">
                <InputCustom placeholder='Mã tài khoản ngân hàng' text={maTKNH} setText={setMaTKNH}/>
                <InputCustom placeholder='Tên tài khoản' text={tenTKNH} setText={setTenTKNH}/>
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    placeholder="Ngân hàng"
                    styles={customStyles}
                />
                <InputCustom placeholder='Số dư' text={soDu} setText={setSoDu}/>
            </div>

            <div className="grid-container">
                <div className="grid-item">
                        <ButtonCustom children="Thêm" className="input" onClick={onAddNH}/>
                    </div>
                    <div className="grid-item">
                        <ButtonCustom children="Xóa" className="input" onClick={onDeleteNH}/>
                    </div>
                    <div className="grid-item">
                        <ButtonCustom children="Sửa" className="input" onClick={onUpdateNH}/>
                    </div>
                    <div className="grid-item">
                        <ButtonCustom children="Làm mới" className="input" onClick={onRefreshNH}/>
                    </div>
            </div>
            
            <TableComponent titles={titlesBank} data={dataTKNH} handleRowClick={handleRowClickNH} />
           
        </div>
    )
}

export default Investor;