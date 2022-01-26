import React, { useState } from 'react';
import Header from './Header';
import Login from './Login';
const AddProduct = () => {
    const [name, setName] = useState("")
    const [file_path, setfile] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    

    let val = localStorage.getItem("user-info")
    if(!val){
      return <Login/>
      
}

   const addProduct= async()=> {
        const formData = new FormData();
        formData.append('name',name);
        formData.append('file',file_path);
        formData.append('description',description);
        formData.append('price',price);


         fetch("http://localhost:8000/api/product",{
            method:"POST",
            body:formData,
        });
        console.log('worked');
       
    }
    return (
        
        
        <div>
             <Header/>
             <div className='col-sm-6 offset-sm-3'>
            <br/>
            <input onChange={(e)=>setName(e.target.value)} type="text" className='form-control' placeholder='Name' />
            <br/>
            <input onChange={(e)=>setfile(e.target.files[0])} type="file"  className='form-control' placeholder='File' />
            <br/> 
            <input onChange={(e)=>setDescription(e.target.value)} type="text"  className='form-control' placeholder='Description' />
            <br/>
             <input onChange={(e)=>setPrice(e.target.value)} type="text"  className='form-control' placeholder='Price' />
            <br/>
            <button onClick={addProduct} className='btn btn-primary offset-sm-5'>Add Product</button>
             </div>
        </div>
    );
};

export default AddProduct;