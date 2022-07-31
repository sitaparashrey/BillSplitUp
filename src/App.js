import Header from './Header.js';
import './App.css';
import Trip from './Trip.js';
import Cards from './Cards.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Calc from './Calc.js';
import Result from './Result.js';
import Register from './Register.js';
import Log from './Log';
import ForgetPassword from './ForgetPassword.js';
import Footer from './Footer.js';
import Home from './Home.js';

function App() {
  return (
    <div>
      <Router>
      <br/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route> 
        <Route path='/login'>
          <Log />
        </Route> 
        <Route path='/forgetpassword'>
          <ForgetPassword/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/trip'>
          <Cards/>
        </Route>
        <Route path='/create'>
          <Trip/>
        </Route>
        <Route path='/:id/add'>
          <Calc />
        </Route>
        <Route path='/result' >
          <Result />
        </Route>
      </Switch>
      </Router>
    </div>
   
  );
}

export default App;
