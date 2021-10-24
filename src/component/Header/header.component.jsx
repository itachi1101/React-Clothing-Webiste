import React from "react";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./header.styles.scss";
const Header = ({currentUser}) => (
  <div className="header">
   { console.log(currentUser)}
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser?
        <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signIn'>SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;
