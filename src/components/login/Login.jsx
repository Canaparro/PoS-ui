import React from "react";
import { Modal } from "../modal/modal";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onSub = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  };

  render() {
    return (
      <Modal>
        <form onSubmit={this.onSub}>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <input type="submit" value="submit" />
        </form>
      </Modal>
    );
  }
}

export default Login;
