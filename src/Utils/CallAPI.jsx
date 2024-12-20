import axios from 'axios';

const CallAPI = async ({url, method = 'POST', data = null, params = null, token = null}) => {
    const config = {
        method,
        url,
        data, 
        params,
        headers: {}
    };

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios(config);

    return response;
};

export default CallAPI;
