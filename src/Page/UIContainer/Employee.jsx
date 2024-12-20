
import TableComponent from '../../Components/TableComponent';
import '../../Styles/Employee.css';
import '../../Styles/Home.css';
import InputCustom from '../../Components/InputCustom';
import ButtonCustom from '../../Components/ButtonCustom';
import Select from 'react-select';


const Employee = ({ handleRowClick, 
                    selectedOption, setSelectedOption, 
                    name, setName, 
                    dayOfBitrh, setDayOfBitrh, 
                    address, setAddress ,
                    sex, setSex,
                    phone, setPhone,login, setLogin, password, setPassword,
                    onAdd, onDelete, onUpdate, data, ho, setHo, options, onAddLogin, onDeleteLogin, isEmployee=true}) => {
    
    var titles;             
    if(isEmployee){
        titles = ['ID', 'Họ','Tên', 'Ngày sinh', 'Địa chỉ', 'Giới tính', 'Số điện thoại', 'Trạng thái'];
    }else{
        titles = ['ID', 'Họ','Tên', 'Ngày sinh', 'Địa chỉ', 'Giới tính', 'Số điện thoại'];
    }
    
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            height: 20, // Chiều cao của input
            fontSize: '12px', // Cỡ chữ
            padding: '0 5px', // Padding cho input
        }),
        option: (provided) => ({
            ...provided,
            fontSize: '12px', // Cỡ chữ trong danh sách
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '12px', // Cỡ chữ khi chọn giá trị
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '12px', // Cỡ chữ của placeholder
        }),
    };

    return (
        <div className='listContainer'>
            {isEmployee && (
                <div>
                    <div className="title1">Danh sách nhân viên</div>
                    <div className="grid-container12">
                        <InputCustom placeholder='Họ' text={ho} setText={setHo} />
                        <InputCustom placeholder='Tên' text={name} setText={setName} />
                        <InputCustom placeholder='Ngày Sinh' text={dayOfBitrh} setText={setDayOfBitrh} />
                        <InputCustom placeholder='Địa chỉ' text={address} setText={setAddress} />
                        <InputCustom placeholder='Giới tính' text={sex} setText={setSex} />
                        <InputCustom placeholder='Số điện thoại' text={phone} setText={setPhone} />
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            options={options}
                            placeholder="Trạng thái"
                            styles={customStyles}
                        />
                    </div>
                    <div className="grid-container12">
                        <div className="grid-item">
                                <ButtonCustom children="Thêm" className="input" onClick={onAdd}/>
                            </div>
                            <div className="grid-item">
                                <ButtonCustom children="Xóa" className="input" onClick={onDelete}/>
                            </div>
                            <div className="grid-item">
                                <ButtonCustom children="Sửa" className="input" onClick={onUpdate}/>
                            </div>
                    </div>
                </div>
            )}
            

            <div className="title1">Quản lý tài khoản</div>
            <div className="grid-container11">
                <InputCustom placeholder='Login Name' text={login} setText={setLogin} />
                <InputCustom placeholder='Mật khẩu' text={password} setText={setPassword} />
            </div>

            <div className="grid-container11">
                <div className="grid-item">
                        <ButtonCustom children="Thêm" className="input" onClick={onAddLogin}/>
                    </div>
                    <div className="grid-item">
                        <ButtonCustom children="Xóa" className="input" onClick={onDeleteLogin}/>
                    </div>
            </div>
            

            <TableComponent titles={titles} data={data} handleRowClick={handleRowClick} />
        </div>
    )
}

export default Employee;