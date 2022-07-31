import {Button, Container,Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from 'D:\\My Web Sites\\React\\Splitup\\src\\images\\Split-up.svg';

function Header()
{
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
                    </Container>
                </Navbar>
         </Container>
    );
}
export default Header;