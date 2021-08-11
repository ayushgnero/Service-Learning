import axios from "axios";
import "../Pagecss/login0.css";
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
                  <p class="para1">Please enter your Email</p>
                  <input required onChange={this.handleChange} type="email" name="email" placeholder="Email" className="formloginfgt" id="email" style={{ cursor: "text" }} />
                  <button type="submit" class="login">Login</button>
                </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
}

export default forgotpassword;
