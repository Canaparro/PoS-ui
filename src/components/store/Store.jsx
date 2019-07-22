import React from "react";

class Store extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: "" });
  };

  onChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>Nome da loja: {this.props.storeName}</div>
        <label htmlFor="storeName">Nome da loja</label>
        <input
          type="text"
          name="storeName"
          value={this.state.name}
          onChange={this.onChange}
        />
        <input type="submit" value="Cadastrar loja" />
      </form>
    );
  }
}

export default Store;
