import React, { useState } from 'react';
import {Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import Login from './Login';
const Header = () => {
    let user = JSON.parse(localStorage.getItem("user-info"))
    const [logStatu ,setLogStatu] = useState(false);

    function logOut(){
        localStorage.clear()
        setLogStatu(true)
        window.location.reload();
    }
    if(logStatu){
        return <Login/>
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
            <Nav className="me-auto">
                {

                 localStorage.getItem("user-info")?
                 <>
                 <Nav.Link href="/">Product list</Nav.Link>
                 <Nav.Link href="/add">Add Product</Nav.Link>
                 <Nav.Link href="/update">Update Products</Nav.Link> 
                 <Nav.Link href="/search">Search Products</Nav.Link> 
                 </>
                 :
                 <>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
                 </>
                
                }

                    { 
                    localStorage.getItem("user-info") ?
                <Nav>
                    <NavDropdown title={ user && user.name} >
                        <NavDropdown.Item onClick={logOut} >Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>: null
                    }
          
            </Nav>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;