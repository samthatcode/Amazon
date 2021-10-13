import React, { useState } from "react";
import "./signup.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { firebaseApp } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    // do some fancy firebase register shitttt.....
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        if (user) {
          history.push("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup__logo"
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div>
        <div className="signup__container">
          <h1>Sign-Up</h1>

          <form action="">
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <p>
            By signing-in you agree to AMAZON CLONE Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button onClick={register} className="signup__registerButton">
            Create Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
