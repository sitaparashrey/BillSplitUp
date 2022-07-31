const { Container ,Button,Form} = require("react-bootstrap");
// import {,Carousel} from 'react-bootstrap';

function ForgetPassword()
{
    return (
        <Container className="py-5">
      <Form action="http://localhost:3000/auth/forgetpassword" method="POST">
      <Form.Text className="text-muted">
              Enter Your Registered Mail ID
            </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label  >Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  name="email"/>
          </Form.Group>
          <Form.Group  className="mb-3">
          <Button variant="outline-info" type="submit">
            Submit
          </Button>
          </Form.Group>
      </Form>
      
      </Container>
    );
}

export default ForgetPassword;