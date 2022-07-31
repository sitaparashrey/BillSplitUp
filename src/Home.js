import {Button} from 'react-bootstrap';
import HomeHeader from './Homeheader';
import './home.css';

function Home()
{
    return (
        <div>
          {/* <HomeHeader/> */}
          <section id="home" class="sec1 cflex">
            <div class="mainhead rflex">
                <span class="idea">Bill</span>Split-UP
            </div>
            <div class="typingtxt cflex mp8">           
            <div class="wrapper rflex">
            <div class="static-txt">IT ALL STARTS WITH</div>
            <ul class="dynamic-txts">
              <li><span>LIFE</span></li>
              <li><span>TRAVEL</span></li>
              <li><span>MEMORIES</span></li> 
            </ul>
            </div>
          </div>
          <Button variant="outline-dark" type="submit" href="/login">
          Login
        </Button>
        </section>
      </div>
    );
}

export default Home;