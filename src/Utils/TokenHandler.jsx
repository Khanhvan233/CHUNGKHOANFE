


export const  saveAccessToken = async(token) => {
    localStorage.setItem('access_token', token); 
};

export const getAccessToken = async() => {
    return localStorage.getItem('access_token'); 
};

export const removeAccessToken = async() => {
    localStorage.removeItem('access_token'); 
};