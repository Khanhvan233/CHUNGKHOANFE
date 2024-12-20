export const inputNullValidation = ({ values, notification }) => {
    // Kiểm tra nếu values là null hoặc undefined
    if (values === null || values === undefined) {
        throw new Error(notification);
    }
    
    // Xử lý nếu values là một chuỗi
    if (typeof values === 'string') {
        const valueProcess = values.trim();
        if (valueProcess.length === 0) {
            throw new Error(notification);
        }
    }
    
    // Xử lý nếu values là một số
    else if (typeof values === 'number') {
        if (isNaN(values) || values === 0) {
            throw new Error(notification);
        }
    }

    // Các loại dữ liệu không mong muốn khác
    else {
        throw new Error("Invalid input type");
    }
};
