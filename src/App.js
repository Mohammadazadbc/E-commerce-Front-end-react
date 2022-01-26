import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header";
import AddProduct from "./AddProduct";
import Login from "./Login"
import UpdataProduct from "./UpdataProduct"
import Register from "./Register"
import Protected from "./Protected";
import Productlist from "./ProductList/Productlist";
import SearchProduct from "./SearchProduct";

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/add" element={<Protected Cmp={AddProduct} /> /* <AddProduct/>*/ } />
        <Route path="/" element={<Protected Cmp={Productlist} /> /* <AddProduct/>*/ } />

        <Route path="/update" element={<Protected Cmp={UpdataProduct} />  /* <UpdataProduct/> */ } />
        <Route path="/search" element={<Protected Cmp={SearchProduct} />  /* <UpdataProduct/> */ } />
        <Route path="/login" element={ < Login/> } />
        <Route path="/register" element={ < Register/> } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
