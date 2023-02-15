import React, { useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase";

function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert("Invalid Email or Password"));
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        navigate("/");
      })
      .catch((error) => alert("Invalid Email or Password"));
  };

  return (
    <div className="login">
      <div className="login__top">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png?20220213013322"
            alt="Logo"
          />
        </Link>

        <div className="login__wrapper">
          <div className="login__container">
            <h1>Sign In</h1>

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

              <button
                onClick={signIn}
                type="submit"
                className="login__signInBtn"
              >
                Continue
              </button>
            </form>

            <p>
              By continuing, you agree to Amazon Clone's{" "}
              <span>Conditions of Use</span> and <span>Privacy Notice</span>.
            </p>
          </div>

          <div className="login__divider">
            <p>New to Amazon?</p>
          </div>

          <button
            onClick={register}
            type="submit"
            className="login__registerBtn"
          >
            Create your Amazon Account
          </button>
        </div>
      </div>

      <div className="login__bottom">
        <div className="login__bottomDivider">
          <div className="login__bottomDividerInner"></div>
        </div>

        <div className="login__bottomLineOne">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>

        <div className="login__bottomLineTwo">
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
