import axios from "axios";
import "../Pagecss/login.css";
import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class forgotpassword extends Component{
   state = {
      email: ""
   }
   handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      //post api call to backend
      axios
        .post("https://pure-retreat-17538.herokuapp.com/rest-auth/password/reset/", {
          email: this.state.email,
        })
        .then((res) => {
          console.log(res);
         //  var token = res.data.access;
         //  sessionStorage.setItem("tree", token);
         //  this.props.tokenAuth(sessionStorage.getItem("token"));
         //  this.props.history.push("/");
        })
        .catch((err) => {
          console.log(err.message);
         //  if (err.message === "Request failed with status code 400"||"Request failed with status code 401")
         //    this.setState({
         //      ...this.state,
         //      error: "Invalid Email or password",
         //    });
         //  console.log(this.state.error);
        });
    };
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
    render() {
  return (
    <>
    <div class="sidenav">
         <div class="login-main-text">
			<img src="../img/forgot.jpeg" class="logo"/>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
				<div class="logo">
					<h1>Logo</h1>
					<br/>
				 </div>
               <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                  <input
                  required
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control label111 login-input"
                  id="email"
                  style={{ cursor: "text" }}
                />
                  </div>
                  <button type="submit" class="btn btn-blue">Send Request</button>
               </form>
            </div>
         </div>
      </div>
      </>
  )
}
}

export default forgotpassword;
