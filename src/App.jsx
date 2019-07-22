import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ConnectedStore from "./components/store/index";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import ConnectedLogin from "./components/login";

const index = () => {
  return (
    <div className="container">
      <Navbar />
      <ConnectedStore />
    </div>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={index} />
        <Route path="/login" exact component={ConnectedLogin} />
      </BrowserRouter>
    );
  }
}
