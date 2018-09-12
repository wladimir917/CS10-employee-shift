import React, { Component } from "react";

class Settings extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      phone: "",
      old_password: "",
      new_password: ""
    }
  }

  inputChangeHandler = event => {
    console.log("state text", event.target)
    const {email, phone, old_password, new_password } = event.target;
    this.setState({ [name] : value })
  }

  render() {
    <form onSubmit={this.submitForm}>
      <div>
        <label>Email</label>
        <input
        value = {this.state.email}
        onChange = {this.inputChangeHandler}
        name = 'email'
        type = 'text'
        />
      </div>
      < div >
      <label> Phone</label>
        <input
      value = {
        this.state.email
      }
      onChange = { this.inputChangeHandler}
      name = 'email'
      type = 'text' 
        />
      </div>

      <input type="checkbox" name="msg" value="Email" />
      <input type="checkbox" name="msg" value="Email" />

      <div>
        <label>Old Password</label>
        <input
        value = {this.state.old_password}
        onChange = {this.inputChangeHandler}
        name = 'old_password'
        type = 'password'
        />
      </div>
      <div>
        <label>New Password</label>
        <input
        value = {this.state.new_password}
        onChange = {this.inputChangeHandler}
        name = 'new_password'
        type = 'password'
        />
      </div>
      <div>
        <button type = 'submit'>Save</button>
      </div>
    </form>
  }
}

export default Settings;
