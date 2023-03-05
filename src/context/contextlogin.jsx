import { createContext } from "react";

export const ContextUser = createContext({
    email:"",
    setEmail:()=>{},
    password:"",
    setPassword:()=>{},
    userName:"",
    setUserName:()=>{},
    phone:"",
    setPhone:()=>{}
});
