import React, { Component } from "react";
import "./InputContainer.css";

export default class InputContainer extends Component {
  state = {
    name: "",
    position: "",
    email: "",
    mobile: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.mobile === "" ||
      this.state.position === "" 
    ) {
      alert("All fields are mandatory");
      return;
    }
    this.props.addContact(this.state);
    this.setState({ name: "", email: "", mobile: "", position: ""});
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.add} className="container-input">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
            pattern="[A-Z a-z]*"
            minLength="1"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            onChange={(e) => this.setState({ mobile: e.target.value })}
            value={this.state.mobile}
            pattern="[0-9]{10}"
            maxLength="10"
          />
          <input
            type="tel"
            name="position"
            placeholder="Work Type"
            onChange={(e) => this.setState({ position: e.target.value })}
            value={this.state.position}
            pattern="[A-Z a-z]*"
            maxLength="15"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
