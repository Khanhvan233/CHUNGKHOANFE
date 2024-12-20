import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

const TableComponent = ({ titles, data, handleRowClick }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Cắt dữ liệu để chỉ hiển thị số dòng cho trang hiện tại
    const currentData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    // Hàm định dạng tiền VND
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value || 0);
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {titles.map((title, index) => (
                            <TableCell
                                key={index}
                                sx={{
                                    backgroundColor: 'lightblue', // Đặt màu nền
                                    color: 'darkblue', // Đặt màu chữ
                                    fontWeight: 'bold', // In đậm chữ
                                }}
                            >
                                {title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentData.map((row, rowIndex) => (
                        <TableRow key={rowIndex} onClick={() => handleRowClick(row)}>
                            {titles.map((title, colIndex) => (
                                <TableCell key={colIndex}>
                                    {/* Kiểm tra nếu tiêu đề là 'Đơn giá', 'Trị giá', 'Giá khớp', 'Số dư' thì định dạng thành VND */}
                                    {['Đơn giá', 'Trị giá', 'Giá khớp', 'Số dư','Giá trần','Giá sàn','Giá tham chiều'].includes(title)
                                        ? formatCurrency(row[title])
                                        : row[title]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};

export default TableComponent;
