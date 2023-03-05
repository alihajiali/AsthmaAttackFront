import { useState } from "react";
import {toast} from "react-toastify"



//-----------------------( get users )---------------------------
 const apigetusers =async ()=>{
  
    var requestgetuser = {
      method: 'GET',
      redirect: 'follow'
    };

    const respon =await fetch("http://alihajiali.ir:8081/user/", requestgetuser)
    var respon2 = await respon.json()
     return respon2;
}

//-----------------------( register user )---------------------------
const apiregisteruser = async(username , password , email , phone)=>{

    var myHeadersRegister = new Headers();
    myHeadersRegister.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username":username, 
        "password":password, 
        "email":email, 
        "phone_number":phone
      });

    var requestregister = {
      method: 'POST',
      headers: myHeadersRegister,
      body: raw,
      redirect: 'follow'
    };

    const respon3 = await fetch("http://alihajiali.ir:8081/user/", requestregister)
    if(respon3.status===201){
      toast.success(`${username}  عزیز عملیات ثبت نام شما با موفقیت انجام شد   ` ,{theme:"colored"})
    }else{
      toast.error( ` ${username} عزیز در روند  ثبت نام شما مشکلی رخ داده` ,{theme:"colored"})
    }
    
    return respon3;
   
}


//-----------------------( get login code )---------------------------
const apigetlogincode = async(username , password)=>{
  
      var myHeadersloginCode = new Headers();
      myHeadersloginCode.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "username": username,
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeadersloginCode,
        body: raw,
        redirect: 'follow'
      };

      const respon5 = await fetch("http://alihajiali.ir:8081/login", requestOptions)

      if(respon5.status===200){
        toast.success(`${username} عزیز شما با موفقیت وارد شدید`,{theme:"colored"})
      }else{
        toast.error( `${username} عزیز لطفا یکبار دیگر تلاش کنید` ,{theme:"colored"})
      }
      return respon5;
}
//-----------------------( update user )---------------------------
const apiupdateuser =async (username , newusername , code)=>{

    var requestOptionsupdateuser = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const respon7 =await fetch(`http://alihajiali.ir:8081/update_user?username=${username}&code=${code}&new_username=${newusername}`, requestOptionsupdateuser)
    const respon8 = await respon7.json();
    return respon8
}

//-----------------------( delete user )---------------------------
const apideleteuser =async (username , code)=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": username,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const respon9 = fetch(`http://alihajiali.ir:8081/delete_user?username=${username}&code=${code}`, requestOptions)
    const respon10 = respon9.json()
    return respon10;
     
}

//-----------------------( activate user )---------------------------
const apiactivateuser =async (username , code)=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": username
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const respon11 = await fetch(`http://alihajiali.ir:8081/active_phone_numver?username=${username}&code=${code}`, requestOptions)
     const respon12 = await respon11.json()
     return respon12;
}

//-----------------------( get code )---------------------------
const apigetcode =async (username )=>{

      var myHeadersgetcode = new Headers();
      myHeadersgetcode.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "username": username
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeadersgetcode,
        body: raw,
        redirect: 'follow'
      };
      
      const respon13 = await fetch("http://alihajiali.ir:8081/update_user/active_phone_numver/", requestOptions)
      const respon14 = await respon13.json();
      return respon14;
}



export default {
    apigetusers ,
    apigetlogincode,
    apiregisteruser,
    apiupdateuser,
    apideleteuser,
    apiactivateuser,
    apigetcode,
};
