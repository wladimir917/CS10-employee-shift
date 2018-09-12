import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardBody } from "reactstrap";
import "../../styles/signin.css";

import { signin } from "../../store/User/actions.js";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.signin(this.state.email, this.state.password);
  };

  inputChangeHandler = event => {
    // render user input
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Card className="card">
        <form onSubmit={this.submitHandler}>
          <CardBody className="card-body">
            <div>
              <CardTitle>Email Address</CardTitle>
              <input
                value={this.state.email}
                onChange={this.inputChangeHandler}
                name="email"
                type="text"
              />
            </div>
            <div>
              <CardTitle>Password</CardTitle>
              <input
                value={this.state.password}
                onChange={this.inputChangeHandler}
                name="password"
                type="text"
              />
            </div>
            <div>
              <button type="submit">Sign in</button>
            </div>
          </CardBody>
        </form>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.user.errors) {
    errors = Object.keys(state.user.errors).map(field => {
      return { field, message: state.user.errors[field] };
    });
  }
  return {
    errors,
    isAuthenticated: state.user.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (username, password) => {
      return dispatch(signin(username, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
