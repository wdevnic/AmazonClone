import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {auth} from "../firebase";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from '../stateManagement/StateProvider';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';


const promise= loadStripe('pk_test_51IdNv1Ki4CXRTBEHlJKKXwa2ntBdG2GHbNK5SEK2a5EBKcg7XIY8hM7aQyjENVnKjlqCwOwSBiTFRX9kY1O8SQTR00WKcfA777')

function App() {

  const[, dispatch] = useStateValue();

  useEffect(() => {

   auth.onAuthStateChanged( authUser => {

    if(authUser){

      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else{
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  
  
  
  }) // listener for logout and login
  }, [dispatch])

  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/"> {/* default route last */}
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
