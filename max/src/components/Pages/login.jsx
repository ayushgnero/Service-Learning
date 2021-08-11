import React,{Component} from 'react';
// import '../Bootstrap/bootstrap.min.css';
// import '../Bootstrap/login.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "../Pagecss/login0.css";
import axios from "axios";
class login extends Component{
   state = {
      email: "",
      password: "",
      error: "",
    };
    handleSubmit = (e) => {
      console.log(this.state.email);
      e.preventDefault();
      console.log(this.state);
      if( this.state.email === "ayushgnero@gmail.com" && this.state.password ==="1234" )
      {
        this.props.history.push("/Dashboard");
      }
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
      <div>
        <div class="flex-container">
          <div class="column"></div>
          <div class="column1"></div>
          <div class = "div-front">
            <div class="flex-container1">
              <div class="leftlogin"></div>
                <div class="logo"></div>
                <h1 class="schoolname">Adarsh Public School</h1>
                <div class="line-1"></div>
                <h1 class="cityname">Kurawar</h1>
                <h1 class="statename">Madhya Pardesh</h1>
              <div class="rightlogin"></div>
                <form onSubmit={this.handleSubmit} to="/Dashboard">
                  <p class="para">Please enter your Email and Password to login</p>
                  <input required onChange={this.handleChange} type="email" name="email" placeholder="Email" className="formlogin" id="email" style={{ cursor: "text" }} />
                  <input required onChange={this.handleChange} type="password" name="password" placeholder="Password" className="formlogin1" id="password" style={{ cursor: "text" }} />
                  <button type="submit" class="login">Login</button>
                </form>
                <a class = 'fgtpass' href = "/forgotpassword"> Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}}
export default login;
