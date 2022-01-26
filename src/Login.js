import React, { useState } from 'react';
import AddProduct from './AddProduct';
import Header from './Header';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [logStatu, setLogStatu] = useState(false)
   
       let val = localStorage.getItem("user-info")
          if(val){
            return <AddProduct/>
         
    }

    const login = async ()=>{
        
         fetch('http://127.0.0.1:8000/api/login',{
            method:"POST",
            headers:{
                "Content-Type":"application.json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then(resp =>resp.json())
        .then((data)=>{
            if(data  /* data.message =="welcome"*/){
                let val = data;
                localStorage.setItem("user-info", JSON.stringify(val));
                console.log("your loged in");
                setLogStatu(true)
            }
            else{
                console.log("email or password not match!")
            }
        
        })
    }
    if(logStatu){
        return <AddProduct/>
    }
    
    return (
        <div>
             <Header/>
            <h1>Login page</h1>
            <div className='col-sm-6 offset-sm-3'>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' className='form-control'/>
            <br/>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='form-control'/>
            <br/>
            <button onClick={login} className='btn btn-primary offset-sm-5'>Login</button>

            </div>
        </div>
    );
};

export default Login;