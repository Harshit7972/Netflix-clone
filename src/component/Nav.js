import {React,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.scss";
import img from "../data/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../data/small-logo.9f5c301b95282293ee47.png"

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    
  }, []);
  return (
    <>
      
        <nav className={`nav ${show && "nav_black"}`}>
        <img src={img} alt="logo" className='big-logo' />
        <img src={logo} alt="logo" className='small-logo'/>
          <ul>
            <li><Link className="link_btn" to="/">Home</Link></li>
            <li><Link className="link_btn"  to="/tv">TV showes</Link></li>
            <li><Link className="link_btn"  to="/movies">Movies</Link></li>
          </ul>
          <IoSearchOutline />
        </nav>
      
    </>
  );
};

export default Nav;
