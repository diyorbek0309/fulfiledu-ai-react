import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <br />
      <button>
        <Link to="/login">Login</Link>
      </button>
      <ul>
        <li>
          <Link to="/students/1">Diyorbek</Link>
        </li>
        <li>
          <Link to="/students/2">Abbosbek</Link>
        </li>
        <li>
          <Link to="/students/3">Dilshodbek</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
