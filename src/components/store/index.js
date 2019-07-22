import { connect } from "react-redux";
import Store from "./Store";
import { createStore } from "../../redux/reducers/store/actions";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: name => {
      dispatch(createStore(name));
    }
  };
};

const mapStateToProps = state => {
  return {
    storeName: state.store.name
  };
};

const connectedStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Store);

export default connectedStore;
