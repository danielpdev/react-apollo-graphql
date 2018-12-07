import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/songs/new">Create</Link>
      </li>
    </ul>
  </nav>
  );

export default Header;