import React from "react";
import { Link } from "react-router-dom";

const myDiv = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor:"aqua"
  
};

const Navbar = () => {
  return (
    <div style={myDiv}>
      <Link style={{textDecoration : "none"}} to="/movies"><h2>Movies</h2></Link>
      <Link style={{textDecoration : "none"}} to="/favorites"><h2>Favorites</h2></Link>
    </div>
  );
};

export default Navbar;
