import React from "react";
import { Link } from "react-router-dom";
//higher order component
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./header.styles.scss";
const Header = ({ currentUser }) => (
  <div className="header">
    {console.log(currentUser)}
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
// function allowing us to access the state
// state here the root reduer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
