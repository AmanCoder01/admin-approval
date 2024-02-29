import axios from "axios";


const SignupApi = async (data) => {
    return await axios.post('http://localhost:3000/api/register', data, { withCredentials: true });
}
const LoginApi = async (data) => {
    return await axios.post('http://localhost:3000/api/login', data, { withCredentials: true });
}

const getUserDetails = async (data) => {
    let token = getToken();
    return await axios.get('http://localhost:3000/api/admin/dashboard',
        {
            withCredentials: true,
            headers: {
                auth: token
            }
        });
}

const approveUser = async (data) => {
    let token = getToken();
    return await axios.post('http://localhost:3000/api/admin/dashboard/approve', data,
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