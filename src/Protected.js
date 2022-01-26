import React from 'react';
import Login from "./Login"
const Protected = (props) => {
   
    let Cmp =props.Cmp
//   let val = localStorage.getItem('user-info')

//   if(!val){
//       return <Login/>
//   }
    return (
        <div>
            <Cmp/>
        </div>
    );
};

export default Protected;