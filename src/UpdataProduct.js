import React, { useEffect, useState } from 'react';
import Header from './Header';

import Login from './Login';
const UpdataProduct = ({proId}) => {
    let val = localStorage.getItem("user-info")
    const [Name,setName] = useState("");
    const [Description,setDescription] = useState("");
    const [Price,setPrice] = useState("");
    const [data,setData] = useState([]);

    const showList = async()=> {
         fetch(`http://127.0.0.1:8000/api/singproduct/${proId}`)
         .then(resp=>resp.json())
         .then((data)=>{
             setData(data)
         })
        
    }

    useEffect(()=>{
        showList();
    },[])

    if(!val){
      return <Login/>
}
 

    const updateProduct = async()=>{
     fetch(`http://127.0.0.1:8000/api/update/${proId}`,{
         method:"PATCH",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name:Name,
            description: Description,
            price: Price
         })
     }).then(resp=>resp.json())
     .then((data)=>{
         if(data.message =="data has been updated"){
             alert("data has been changed");
         }
         else{
             console.log("some prob");
         }

     })  

    }

    return (
        <div>
             <Header/>
            <h>Updata product</h>
            
            <div className='col-sm-6 offset-sm-3'>
            <br/>
            <input  onChange={(e)=>setName(e.target.value)} value={data.name}  type="text" className='form-control' placeholder='Name' />
            <br/>
            <input  value={data.description}  onChange={(e)=>setDescription(e.target.value)} type="text"  className='form-control' placeholder='Description' />
            <br/>
             <input  value={data.price} onChange={(e)=>setPrice(e.target.value)} type="text"  className='form-control' placeholder='Price' />
            <br/>
            <img className='' style={{width:150}} src={"http://127.0.0.1:8000/"+data.file_path} />
            <br/>
            <button onClick={updateProduct} className='btn btn-primary offset-sm-5'>Save Changes</button>
             </div>
        </div>
    );
};

export default UpdataProduct;