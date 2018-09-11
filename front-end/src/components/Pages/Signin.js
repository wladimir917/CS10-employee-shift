import React, { Component } from "react"; 
import {Card, CardTitle, CardBody} from 'reactstrap';
import '../../styles/signin.css';




class Signin extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  submitHandler = e => { //submit the form
    e.preventDefault();

  }

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name] : value });
  }


  render() {
    return (
      <Card className='card'>
        <form onSubmit={this.submitHandler}>
        < CardBody className='card-body' >
          <div>
            <CardTitle>Email Address</CardTitle>
            <input
            value = {this.state.email}
            onChange = {this.inputChangeHandler}
            name = 'email'
            type = 'text'
            />
          </div>
          <div>
            <CardTitle>Password</CardTitle>
            <input 
            value = {this.state.password}
            onChange = {this.inputChangeHandler}
            name = 'password'
            type = 'text'
            />
          </div>
          <div>
            <button type = 'submit'>Sign in</button>
          </div>
          </CardBody>
        </form>
      </Card>
    );
  }
}

export default Signin;
