import './Calc.css';
import {useState} from 'react';
import {useLocation} from "react-router-dom";
import calculate from './calculateamount.js';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {Button, Container,Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.js';
let k=0;

function Calc(props)
{ 
    const cardstyle={
        margin: '20px 10px',
        height: '15em'
    }
    //to get current trip details
    const location=useLocation();
    const history=useHistory();
    const tripdetails=location.state.props;

    //trip id
    let id=tripdetails._id;

    let [j,Setdata]=useState();
    let [name,Setname]=useState();
    let [details,Setdetail]=useState([]);
    const no=[];
    for(let i=1;i<=tripdetails.noofmember;i++)
    {
        no.push(i);
    }
    
    // const getdetails=(e)=>{   
    //     e.preventDefault();
    // }

    const submit =(e)=>{
        e.preventDefault();
        k++;
        let z=(k%tripdetails.noofmember);
        if(z==0)
        {
            z=tripdetails.noofmember;
        }
        const t={
            "tripname": id,
            "amount" : j,
            "p" :z-1,
            "name":name
        }
        details.push({"amount" : j, "p" :z-1, "name":name});
        axios.post('http://localhost:3000/detail/add',t)
        .then(res=>
            {
                console.log("Details Added");
            })
        .catch(err=>
            {
                console.log(err + "ERROR FOUND");
            })
    }

    let senddata=new Array(tripdetails.noofmember);
    const finalsubmit=(e)=>{
        e.preventDefault();
        
        for(let h=0;h<senddata.length;h++)
        {
            for(let i=0;i<details.length;i++)
            {
                if(details[i].p===h)
                {
                    senddata[h]=details[i].amount;
                }
            }
        }
        let dp=new Array(senddata.length);
        for(let i=0;i<senddata.length;i++)
        {
           dp[i]={};
        }
        dp=calculate(senddata);
        const t={ dp:dp, d:details};
        history.push({pathname: '/result', state: {props:t}});
    }

    return(
        <div >
            <Header/>
            <Container className='py-5'>
            <h1 >
                {/* {tripdetails.tripname} */}
            </h1>
            <div class="row">
            {
                 
                no.map(item =>
                {
                   
                    return (
                       
                        // <div class="col-lg-3 col-md-6 py-3"> 
                        // <Card border="info" style={{ width: '18rem' }}>
                        //     <Card.Header>Header</Card.Header>
                        //     <Card.Body>
                        //     <Card.Title>Info Card Title</Card.Title>
                        //     <Card.Text>
                        //         Some quick example text to build on the card title and make up the bulk
                        //         of the card's content.
                        //     </Card.Text>
                        //     </Card.Body>
                        // </Card>
                        // </div>
                       
                        <div className="card">
                        <div className="content">    
                            <div className="Header"><h4><b>
                                Member {item}
                                </b>
                                </h4>
                            </div>
                            <form onSubmit={submit}>
                            <span>Name</span>
                            <input type='text'  onChange={e=>(Setname(e.target.value))}/>
                            <label>Amount Paid</label>
                            <input type='number'  onChange={e=>(Setdata(e.target.value))}/>
                            <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                //     <Card style={cardstyle}>
                //     <Form >
                //         {/* <Card.Body>Register</Card.Body> */}
                //     <Form.Group  controlId="formBasicEmail">
                //         <Form.Label  >Name</Form.Label>
                //         <Form.Control type="text" onChange={e=>Setname(e.target.value)} />
                //         {/* <Form.Check type="text" /> */}
                //     </Form.Group>

                //     <Form.Group className="mb-3" controlId="formBasicPassword">
                //         <Form.Label  >Amount</Form.Label>
                //         <Form.Control type="number" onChange={e=>Setdata(e.target.value)} />
                //         {/* <Form.Check type="number"onChange={e=>Setmember(e.target.value)}  value={noofmember}/> */}
                //     </Form.Group>
                //     <Form.Group  className="mb-3">
                //     <Button variant="outline-info" type="submit" >
                //         Submit
                //     </Button>
                //     </Form.Group>
                    
                // </Form>
                // </Card>
                    );
                })   
            }</div> 
              
               </Container>
               <Button onClick={finalsubmit}>Calculate</Button>
            </div>
    );
}
export default Calc;