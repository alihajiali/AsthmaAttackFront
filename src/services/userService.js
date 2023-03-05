import http from "./httpServices";
import config from "./config.json";



export const getUsers = () => {
    return http.apigetusers();
};

// export const getUser = (userId) => {
//     return http.get(`${config.baseurl}/api/course/${userId}`);
// };
export const newUser = (username , password , email , phone) => {
    return http.apiregisteruser(username , password , email , phone);
};

export const deleteUser = (username , code) => {
    return http.apideleteuser(username , code);
};
export const loginUser = (username , password)=>{
    const res = http.apigetlogincode(username , password)
    return res
}
export const updateUser = (username  , newusername , code) => {
    return http.apiupdateuser(username , newusername , code);
};

export const getCode = (username) => {
    return http.apigetcode(username);
};

export const activeUsername = (username , code) => {
    return http.apiactivateuser(username , code);
};