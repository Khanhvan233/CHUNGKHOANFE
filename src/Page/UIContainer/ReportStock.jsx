

import TableComponent from '../../Components/TableComponent';
import Select from 'react-select';
import ButtonCustom from '../../Components/ButtonCustom';


const ReportStock = ({data,handleRowClick, selectedOption, setSelectedOption,options, onFind}) => {

    const titles = ['MACP', 'Số lượng', 'Đơn giá', 'Trị giá'];

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

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
    
    return(
        <div className='listContainer'>
            <div className="title1">Tra cứu số lượng cổ phiếu của nhà đầu tư</div>

            <div className="grid-container11">
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    placeholder="Nhà đầu tư"
                    styles={customStyles}
                />
                <div className="grid-item">
                    <ButtonCustom children="Tìm" className="input" onClick={onFind}/>
                </div>
            </div>

            <TableComponent titles={titles} data={data} handleRowClick={handleRowClick} />

        </div>

    )
}

export default ReportStock;