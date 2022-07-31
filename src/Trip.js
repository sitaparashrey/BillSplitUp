import {useState} from 'react';
import axios from 'axios';
import { useHistory,useParams } from "react-router-dom";
import {Button, Container,Form, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header1 from './Header.js';

function Trip1 (response)
{   
    const cardstyle={
        margin: '20px 10px',
        height: '20em'
    }
    const [noofmember,Setmember] = useState('');
    const [tripname,Settrip]=useState('');
    let history = useHistory();
         const onSubmit1 =(e)=>
        {
            e.preventDefault();   
            const t={
                noofmember:noofmember,
                tripname:tripname
            }
            axios.post('http://localhost:3000/trip/add' ,t,{ withCredentials: true })
            .then(res=>
                {
                    // temp=res.data._id;
                    console.log(res);
                    // setState(res.data._id);
                    // console.log(articleId + "JJJ");
                    // history.push(`/${temp}/add`,{params:'H'}) ------ if we do this then params is not passing ..don't know why?
                    history.push('/member/add',{props:res.data})
                },       
            )
            .catch(err=> console.log("ERROR" + err));  
          
        }
    return(
        
        <div>
            <Header1/>
        {/* <form onSubmit={onSubmit1}>
        
            <div className="content1">    
                <div className="Header1">
                    <h4>
                    SPLITUP
                    </h4>
                </div>
                <div className="data">
                    <h4>Trip Name</h4>
                    <input type="text" value={tripname} onChange={e=>Settrip(e.target.value)}/>
                    <h4>Number of Members</h4>
                    <input type="number" value={noofmember} onChange={e=>Setmember(e.target.value)}/>
                </div>
            </div>
            <div>
            {/* <Link to={'/'+ dataid +'/add'}>  */}
          {/* <input type="submit"  onClick={onSubmit1}  value="Submit" className="btn btn-primary"/> */}
                {/* </div> */}
                {/* </form> */} 
                <Container>
                    <Card style={cardstyle}>
      <Form >
          <Form.Group className="py-5" controlId="formBasicEmail">
            <Form.Label  >Trip Name</Form.Label>
            <Form.Control type="text" onChange={e=>Settrip(e.target.value)} value={tripname}/>
            {/* <Form.Check type="text" /> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label  >Number Of Members</Form.Label>
            <Form.Control type="number" onChange={e=>Setmember(e.target.value)}  value={noofmember}/>
            {/* <Form.Check type="number"onChange={e=>Setmember(e.target.value)}  value={noofmember}/> */}
          </Form.Group>
          <Form.Group  className="mb-3">
          <Button variant="outline-info" type="submit" onClick={onSubmit1}>
            Submit
          </Button>
          </Form.Group>
          
      </Form>
      </Card>
      </Container>
        </div>
       
       

    );
}
export default Trip1;