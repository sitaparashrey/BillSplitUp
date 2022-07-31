import { useLocation } from "react-router-dom";
import {Toast, ToastContainer} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Result()
{
    const location=useLocation();
    const dp=location.state.props.dp;
    let nam=location.state.props.d;
    let values=[];
    let data=[];
    nam.forEach((item)=>{
        data[item.p]=item.name
    });
    for(let i=0;i<dp.length;i++)
    {
        for(let j=0;j<dp.length;j++)
        {
            if(dp[i][j].toFixed(2)>0)
            {
                values.push({"from" : data[i],"give":data[j],"amount":dp[i][j].toFixed(2)});
                
            }
        }
    }
    return(
        <div className="container">
            <ToastContainer className="py-5">
                {
                    values.map((item,index)=>{
                        return(
                            
                            <Toast>
                                <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">{item.from} - {item.give}</strong>
                                </Toast.Header>
                                <Toast.Body>{item.from} gives Amount <strong>{item.amount}</strong> to {item.give} </Toast.Body>
                            </Toast>

                        );
                    })
                }
            </ToastContainer>
      </div>
    );
}
export default Result;