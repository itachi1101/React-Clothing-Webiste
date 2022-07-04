import React from "react";
import { Link } from "react-router-dom";
//higher order component
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    {console.log(currentUser)}
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link style={{ color: "black" }} className="option" to="/shop">
        SHOP
      </Link>
      <Link style={{ color: "black" }} className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link style={{ color: "black" }} className="option" to="/signIn">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
// function allowing us to access the state
// state here the root reduer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
