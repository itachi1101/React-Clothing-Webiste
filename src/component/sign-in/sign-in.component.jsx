import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
         
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label='email'
            handleChange={this.handleChange}
            required
          />
          
          <FormInput
            name="passowrd"
            type="password"
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
         
          <input type="sumbmit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
export default SignIn;
