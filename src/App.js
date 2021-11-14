import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import Payment from "./Payment";
import { getAuth, onAuthStateChanged, } from "firebase/auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
/* npm i @stripe/react-stripe-js  npm i @stripe/stripe-js 
Blaze Plan on Firebase
*/


const promise = loadStripe(
  "pk_test_51JkzWhG405z3R6GKWTvlOOSEdxay7uwLVJ53FHmWl9572qYeR8AjtndPgAp41iENi6ltWDGL5pgbKk92YdRv09qe00FQy59cq0"
);


function App() {

  const auth = getAuth();
  const user = auth.currentUser;

  // Get the currently signed-in user
  onAuthStateChanged(auth, (user) => {

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(" the user signed in");

      // ...
    } else {
      console.log("no user has signed in yet!");
      // User is signed out

    }
  });

  // You can also get the currently signed-in user by using the currentUser property. If a user isn't signed in, currentUser is null

  if (user) {
    console.log("user signed in");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    console.log("No user is signed in");
    // No user is signed in.
  }

  // Get a user's profile

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }

  // Get a user's provider-specific profile information
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }



  return (

    <Router>
      <div className="App">

        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>

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

          {/* Make sure your default root is at the bottom like this., Otherwise it won't get listed to */}

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
