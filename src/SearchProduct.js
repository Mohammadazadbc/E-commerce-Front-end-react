import React, { useState } from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';

const SearchProduct = () => {
    const [pro, setPro] = useState([]);

    async function  search (key) {
           fetch('http://127.0.0.1:8000/api/search/'+key)
            .then(resp=>resp.json())
            .then((data)=>{
                setPro(data)
            })
        }
    return (
        <div>
            <Header/>
            <div className='col-sm-6 offset-sm-3' >
            <h1 className='offset-sm-3'>Search Product</h1>
            <br/>
            <input onChange={(e)=>search(e.target.value)} type="text" className='form-control' placeholder='Search Product...' />
            </div>
            <br/>

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
                    pro.map((val)=>
                        <tr>
                        <td>{val.id} </td>
                        <td>{val.name} </td>
                        <td>{val.price} </td>
                        <td>{val.description} </td>
                        <td> <img style={{width:100}} src={"http://localhost:8000/"+val.file_path}/>  </td>
                      
                    </tr>

                    )
                }
            </Table>
        </div>
    );
};

export default SearchProduct;