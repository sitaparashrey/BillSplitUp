import {Button, Container,Row,Col,Form,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import pic1 from '.\\images\\pexels-aleksandar-pasaric-2341830.jpg'
import Header from './Homeheader.js';
function Home()
{
    return (
        <div>
            <Header/>
          <Container className="d-grid gap-3">
            <Row className="py-5">
            <Col>
            <Form action="http://localhost:3000/auth/login" method="POST">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label  >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  name="email"/>
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
            <Form.Group  className="mb-3">
            <Form.Text  className="text-muted">
                <a href="/forgetpassword">
                Forget Password</a>
                </Form.Text>
                </Form.Group>
            <Form.Group  className="mb-3">
            <Form.Text className="text-muted">
                Do not Have an Account?
                </Form.Text>
                </Form.Group>
                <Form.Group  className="mb-3">
            <Button variant="outline-dark" type="submit" href="/register">
            Register
            </Button>
            </Form.Group>
            
            </Form>
            </Col>
            <Col>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Finance </h3>
                <p>Want to Split Your Bill Easily ?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic1}
                alt="Second slide"
                />

                <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                <p>Want to Keep track of Your Expenditure?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic1}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Get Your Evaluation Fast And Easily</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </Col>
            </Row>
            </Container>
      </div>
    );
}

export default Home;



