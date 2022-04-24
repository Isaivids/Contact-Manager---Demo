
import React, { Component } from 'react'
import './InputContainer.css';

export default class InputContainer extends Component {
  state = {
    name: "",
    position: "",
    email: "",
    mobile: ""
  };

  add =(e)=>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email === "" || this.state.mobile === "" || this.state.position === ""){
      alert("All fields are mandatory");
      return;
    }
    this.props.addContact(this.state);
    this.setState({name: "", email: "" , mobile: "", position: ""})
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.add} className="container-input">
          <div>
          <label>Name</label>
          <input type="text" name="name" placeholder='Add Name' onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name}/>
          </div>
          <div>
          <label>Email</label>
          <input type="text" name="email" placeholder='Add email' onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email}/>
          </div>
          <div>
          <label>mobile</label>
          <input type="tel" name="mobile" placeholder='Add Mobile' onChange={(e)=>this.setState({mobile: e.target.value})} value={this.state.mobile}/>
          </div>
          <div>
          <label>Position</label>
          <input type="tel" name="position" placeholder='Add position' onChange={(e)=>this.setState({position: e.target.value})} value={this.state.position}/>
          </div>
          <button>Add</button>
          
        </form>
      </div>
    )
  }
}
