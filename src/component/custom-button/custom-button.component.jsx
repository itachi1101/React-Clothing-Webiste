import React from "react";
import "./custom-button.styles.scss";
function CustomButton({ children,isGoogleSignIn, ...otherProps }) {
  console.log(children);
  return (
    <button className={`custom-button ${isGoogleSignIn?'google-sign-in':''}`} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
