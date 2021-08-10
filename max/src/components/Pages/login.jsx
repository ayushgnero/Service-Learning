import React,{Component} from 'react';
// import '../Bootstrap/bootstrap.min.css';
// import '../Bootstrap/login.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "../Pagecss/login.css";
import axios from "axios";
class login extends Component{
   state = {
      email: "",
      password: "",
      error: "",
    };
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      //post api call to backend
      axios
        .post("https://pure-retreat-17538.herokuapp.com/api/token/", {
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res.data.access);
          var token = res.data.access;
          sessionStorage.setItem("tree", token);
          this.props.history.push("/Dashboard");

         //  this.props.tokenAuth(sessionStorage.getItem("token"));
         //  this.props.history.push("/");
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message === "Request failed with status code 400"||"Request failed with status code 401")
            this.setState({
              ...this.state,
              error: "Invalid Email or password",
            });
          console.log(this.state.error);
        });
    };
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
    render(){
document.body.style.overflow = "hidden"
return(
    <>
    <div class="sidenav">
         <div class="login-main-text">
         </div>
    </div>
      <div class="main11">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
				<div class="logo11">
					<h1 class="logo12">Logo</h1>
					<br/>
				 </div>
             <form onSubmit={this.handleSubmit} to="/Dashboard">
                  <div className="form-group">
                     <label className="label111">Email</label>
                <br/>
                <input
                  required
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control1"
                  id="email"
                  style={{ cursor: "text" }}
                />
                </div>
                  <div className="form-group">
                  <label className="label111">Password</label>
                     <input
                  required
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control1"
                  id="password"
                  style={{ cursor: "text" }}
                />
                </div>
				  <div class="form-group">
            <br/>
					<a class="forget-pass" href="/forgotpassword">Forget your Password?</a><br/>
				  </div>
                  <button type="submit" class="btn1 ">Login</button>
               </form>
            </div>
         </div>
      </div>
      </>
  )
}}
export default login;
