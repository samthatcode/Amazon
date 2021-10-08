import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/checkout">
            
            <Checkout />
          </Route>

            {/* Make sure your default root is at the bottom like this., Otherwise it won't get listed to */}
            
          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
