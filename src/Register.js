import React, { useEffect, useState } from "react";
import {Button, Container,Row,Col,Form,Card} from 'react-bootstrap';
import logo from 'D:\\My Web Sites\\React\\Splitup\\src\\images\\Split-up.svg';
import Header from './Homeheader.js';
import CardHeader from "react-bootstrap/esm/CardHeader";

function Register()
{
    const  style1={
        display:'flex',
        // flexDirection :'column'
    }
    const cardstyle={
        width: '18em',
        height: '30em',
        margin: '50px 10px'
    };
    return (
        <div className="container">
            <Header/>
            <Container>
                <Card className="d-flex p-2"  style={cardstyle}>
                    <CardHeader>
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        />
                    </CardHeader>
                    <Card.Body>
                    <Form action="http://localhost:3000/auth/r" method="POST">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label  >Username</Form.Label>
                        <Form.Control type="text" placeholder="john_s"  name="username"/>
                        <Form.Text className="text-muted">
                        Make sure your Username is unique.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label  >Email address</Form.Label>
                        <Form.Control type="email" placeholder="abc@gmail.com"  name="email"/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label  >Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  name="password"/>
                    </Form.Group>
                    <Form.Group  className="mb-3">
                    <Button variant="outline-info" type="submit">
                        Submit
                    </Button>
                    </Form.Group>
                    
                    </Form>
                    </Card.Body>
                    </Card>
            </Container>
            
        </div>

    );
}
export default Register;