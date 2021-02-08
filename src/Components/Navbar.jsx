import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav> 
    <Link to="/">Home</Link>
    <Link to="/works">Works</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navbar;