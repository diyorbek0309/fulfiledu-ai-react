import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      Login
      <button>
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
