import './Cards.css';
import {Link,useParams}  from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.js';

function Cards(response)
{
       let x=useParams();
       let[data1,Setdata]=useState([]);
        useEffect(() => {
            
             axios.get(`http://localhost:3000/trip/`,{ withCredentials: true })
              .then(response => {
                  console.log(response);
                Setdata( response.data );
              })
              .catch((error) => {
                console.log(error + "get request faliure");
              })
          })
    return(
        // <Container className='py-5'>
        <div className="info">
           <Header/>
        <div className="card">
            <div className="content">    
                <div className="Header"><h4><b>
                    Add Trip
                    </b>
                    </h4>
                </div>
                <div className="data">
                    <Button  href={ '/create'} variant="outline-info">Add Trip</Button>
                </div>
            </div>
        </div>
        {/* <div className="trip"> */}
            {
                data1.map(item =>
                {
                    // return (<Tripcards trip={item.trip} membercount={item.id}/>);
                    //creates card for each item
                    return (
                        <div className="card">
                        <div className="content">    
                            <div className="Header"><h4><b>
                               {item.tripname}
                                </b>
                                </h4>
                            </div>
                            <div className="data">
                               Members : {item.noofmember}
                            </div>
                            <div className="data">
                              Total Cost : {item.total_cost}
                            </div>
                        </div>
                    </div>
                    );
                })
            }
        </div>
        

    );
}
export default Cards;