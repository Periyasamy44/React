import React, {useState } from "react";
import { Link } from "react-router-dom";



export default function SigninScreen(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {email,password};
    console.log(data)
  };


  return (
    <div >
      <span><Link to="/">Back to Home</Link></span>
      <form className="form " onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer?
            <Link to="/register">Create Your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
