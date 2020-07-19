import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch ,Route, Link } from "react-dom";
  
function App() {
  return (
<Router>

 <div className="App">
   <Switch>
    <Route path="/checkout" >
      <h1> Checkout </h1>
    </Route>
    <Route path="/login" >
      <h1> Login page </h1>
    </Route>
    <Route path="/" >
      <h1> HOME PAGE </h1>
    </Route>
 </Switch>
</div>
</Router>

  );
}

export default App;
{ /*  We Need React-Router */}

{ /* localhost.com/ */}
    { /* localhost.com/ checkout*/}
  { /* localhost.com/login */}