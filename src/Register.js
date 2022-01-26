import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import Header from './Header';

const Register = () => {
const [name, setName] =useState("");
const [email, setEmail] =useState("");
const [ConEmail, setConEmail] =useState("");
const [password, setPassword] =useState("");
const [regStatus, setRegStatus] = useState(false);




const singeUp = async()=>{
    
    if(email ===ConEmail){

        let result  =  fetch('http://127.0.0.1:8000/api/user',{
            method:"POST",
            body:JSON.stringify({
                name:name,
                email:email,
                email_verified_at:ConEmail,
                password:password
            }),
            headers:{
                 "Content-Type":"application/json"
            }
            
        }).then(resp=>resp.json())
        .then((data)=>{
            let result  =  data;
             localStorage.setItem("user-info",JSON.stringify(result));
        
            console.log("user added")
            setRegStatus(true)
          
            
        })
      
    }
    else{
        console.log('Email not match')
    }
}

//    let val = localStorage.getItem("user-info")
//     if(val){
//        
//         window.location.reload();
//     }
    
    
    if(regStatus){
        return <AddProduct/>
    }
    


    return (
        <> 
             <Header/>
        <div className='col-sm-6 offset-sm-3'>
            <h1>Register page</h1>
            <input onChange={(e)=>setName(e.target.value)} type="text" className='form-control' placeholder='name' />
            <br/>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control' placeholder='Email' />
            <br/>
            <input onChange={(e)=>setConEmail(e.target.value)} type="email" className='form-control' placeholder='Confirm Email'/>
            <br/>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" className='form-control' placeholder='password'/>
            <br/>
            <button onClick={singeUp} className='btn btn-primary offset-sm-5 ' type='button'>Sign Up</button>
        </div>
        </>
    );
};

export default Register;