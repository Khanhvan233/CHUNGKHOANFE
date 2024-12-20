

export const mapEmployeeData = (backendData) => {
    const propertyMapping = {
        "ID": "ID",
        "HO": "Họ",
        "TEN": "Tên",
        "NGAYSINH": "Ngày sinh",
        "DIACHI": "Địa chỉ",
        "GIOITINH": "Giới tính",
        "SDT": "Số điện thoại",
        "DANGHIVIEC": "Trạng thái",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                if (key === "DANGHIVIEC") {
                    mappedData[propertyMapping[key]] = employee[key] === 0 ? "Đang làm việc" : "Đã nghỉ việc";
                } else {
                    mappedData[propertyMapping[key]] = employee[key];
                }
            }
        }

        return mappedData;
    });
};

export const mapInvestorData = (backendData) => {
    const propertyMapping = {
        "MATK": "MATK",
        "HO": "Họ",
        "TEN": "Tên",
        "NGAYSINH": "Ngày sinh",
        "NOISINH": "Nơi sinh",
        "DIACHI": "Địa chỉ",
        "GIOITINH": "Giới tính",
        "EMAIL": "Email",
        "CMND": "CMND",
        "NGAYCAP": "Ngày Cấp",
        "MATKHAU": "Mật khẩu",
        "MATKHAUDATLENH": "Mật khẩu đặt lệnh"
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};

export const mapBankData = (backendData) => {
    const propertyMapping = {
        "ID": "value",
        "TENNGANHANG": "label",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};

export const mapBankAccountData = (backendData) => {
    const propertyMapping = {
        "MATK": "MATK",
        "TENTAIKHOAN": "Tên tài khoản",
        "TENNGANHANG": "Ngân hàng",
        "SODU": "Số dư",
        "IDNGANHANG" : "ID Ngan hàng"
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};

export const mapInvestorDataCompobox = (backendData) => {
    const propertyMapping = {
        "MATK": "value",
        "TEN": "label",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};


export const mapReportSoHuuCP = (backendData) => {
    const propertyMapping = {
        "GIA": "Đơn giá",
        "GIATRI": "Trị giá",
        "MACP": "MACP",
        "SOLUONG": "Số lượng",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};

export const mapStockData = (backendData) => {
    const propertyMapping = {
        "DIACHI": "Địa chỉ",
        "EMAIL": "Email",
        "FAX": "Fax",
        "MACP": "MACP",
        "SDT": "Số điện thoại",
        "TENCONGTY": "Tên công ty",
        "TONGSOLUONGCP": "Số lượng cổ phiếu",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};


export const mapStockPriceData = (backendData) => {
    const propertyMapping = {
        "GIASAN": "Giá sàn",
        "GIATHAMCHIEU": "Giá tham chiều",
        "GIATRAN": "Giá trần",
        "ID": "ID",
        "IDCOPHIEU": "MACP",
        "NGAY": "Ngày",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};


export const mapStockReportKhopData = (backendData) => {
    const propertyMapping = {
        "GIAKHOP": "Giá khớp",
        "LOAIGD": "Loại giao dịch",
        "LOAILENH": "Loại lệnh",
        "MACP": "Mã CP",
        "NGAYKHOP": "Ngày giờ khớp",
        "SOLUONGKHOP": "Số lượng khớp",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};

export const mapStockReportCTKhopData = (backendData) => {
    const propertyMapping = {
        "GIAKHOP": "Giá khớp",
        "NGAYKHOP": "Thời gian",
        "SOLUONGKHOP": "Số lượng khớp",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};


export const mapStockCompoboxData = (backendData) => {
    return backendData.map((item) => ({
        value: item.MACP,
        label: item.MACP,
    }));
};


export const mapBankAccountCompoboxData = (backendData) => {
    const propertyMapping = {
        "MATK": "value",
        "TENTAIKHOAN": "label",
        "SODU": "SODU", 
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};






