import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/Header/header.component";
import SignInandSignOutPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { Switch, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={SignInandSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
