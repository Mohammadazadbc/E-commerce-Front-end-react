import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UpdataProdcut from "../UpdataProduct"
const Productlist = () => {
    const [data, setData]= useState([]);
    const [update, setUpdate] = useState(false);
    const [proId, setProId] = useState();

    const showList = async()=> {
        let result = await fetch('http://127.0.0.1:8000/api/product');
        result = await result.json()
        setData(result);
    }

    useEffect( async ()=>{
        showList();
    },[]);

    const  deleteProduct =(id)=>{
        fetch(`http://127.0.0.1:8000/api/product/${id}`,{
            method:"DELETE",
        }).then(resp=>resp.json())
        .then((data)=>{
            console.log(data);
            showList();
        })
    }
    function  updateData(id) {
        setUpdate(true)
        setProId(id)
    }
    if(update){
        return <UpdataProdcut proId={proId} />
    }
    
    return (
        <div>
            <Header/>
            <h1>Product list</h1>
            <div className='m-3' >

          
            <Table >
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                    <td>Operation</td>
                </tr>
                {
                    data.map((val)=>
                        <tr>
                        <td>{val.id} </td>
                        <td>{val.name} </td>
                        <td>{val.price} </td>
                        <td>{val.description} </td>
                        <td> <img style={{width:100}} src={"http://localhost:8000/"+val.file_path}/>  </td>
                        <td>
                            <span onClick={()=>deleteProduct(val.id)} className='btn bg-danger text-light'>Delete</span> 
                            <span onClick={()=> updateData(val.id)} className='btn bg-success ms-3 text-light'>Update</span>
                         </td>
                    </tr>

                    )
                }
            </Table>
            </div>
        </div>
    );
};

export default Productlist;