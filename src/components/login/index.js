import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../redux/reducers/login/action";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (username, password) => {
      dispatch(login(username, password));
    }
  };
};

const ConnectedLogin = connect(
  null,
  mapDispatchToProps
)(Login);

export default ConnectedLogin;
