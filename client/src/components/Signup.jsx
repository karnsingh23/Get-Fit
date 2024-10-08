import React from "react";

const SignUp = () => {
  return (
    <div>
      <h1>Create New Account 👋</h1>
      <p>Please enter details to create a new account</p>
      <div>
        <label>
          Full name:
          <input type="text" placeholder="Enter your full name" />
        </label>
        <label>
          Email Address:
          <input type="email" placeholder="Enter your email address" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <label>
          Re-type Password:
          <input type="password" placeholder="Enter your password" />
        </label>

        <span>already have an account? signin</span>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default SignUp;
