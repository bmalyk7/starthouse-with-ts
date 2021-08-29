import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './navbar.css';
import {PostContext} from "../../context";

const Navbar: React.FC = () => {
  const {title, show} = useContext(PostContext)
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="navbar__links_item" to="/posts">Posts</Link>
        {show ? <span className="navbar__post">{title}</span> : ''}
      </div>
    </div>
  );
};

export default Navbar;