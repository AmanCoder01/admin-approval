import axios from "axios";


const domainUrl = "https://admin-approval-app.vercel.app/api/";
const localUrl = "http://localhost:3000/api/";
const SignupApi = async (data) => {
    return await axios.post(`${domainUrl}register`, data, { withCredentials: true });
}
const LoginApi = async (data) => {
    return await axios.post(`${domainUrl}login`, data, { withCredentials: true });
}

const getUserDetails = async (data) => {
    let token = getToken();
    return await axios.get(`${domainUrl}admin/dashboard`,
        {
            withCredentials: true,
            headers: {
                auth: token
            }
        });
}

const approveUser = async (data) => {
    let token = getToken();
    return await axios.post(`${domainUrl}admin/dashboard/approve`, data,
        {
            withCredentials: true,
            headers: {
                auth: token
            }
        });
}

const deleteUser = async (data) => {
    let token = getToken();
    return await axios.post(`${domainUrl}admin/dashboard/delete`, data,
        {
            withCredentials: true,
            headers: {
                auth: token
            }
        });
}



function getToken() {
    let user = localStorage.getItem("user");
    if (!user) return
    const token = JSON.parse(user);
    return token;
}


export { SignupApi, LoginApi, getUserDetails,approveUser }