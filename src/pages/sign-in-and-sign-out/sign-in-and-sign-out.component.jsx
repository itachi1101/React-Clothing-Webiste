import React from "react";
import "./sign-in-and-sign-out.styles.scss";
import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";
function SignInandSignOutPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
export default SignInandSignOutPage;
