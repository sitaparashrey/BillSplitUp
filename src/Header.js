import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import {Button, Container,Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import logo from '..\\images\\Split-up.svg';

function Header()
{
    let history=useHistory();
    function logout()
    {
        axios.get('http://localhost:3000/auth/logout',{ withCredentials: true })
        .then(response=>{
            console.log("LOGGED OUT")
            history.push('/')
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    return(
        <Container>
                <Navbar bg="light" variant="success" fixed="top" >
                    <Container>
                    <Navbar.Brand href="/">
                        <img
                        alt=""
                        src={logo}
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    BILL SPLIT UP
                    </Navbar.Brand>
                    <Nav classname="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
         </Container>
    );
}
export default Header;
