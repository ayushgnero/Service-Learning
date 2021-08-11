import './App.css';
import Navbar from "./components/Navbar/Navbar";
import login from "./components/Pages/login";
import forgotpassword from "./components/Pages/forgotpassword";
import PageIndicator from "./components/PageIndicator/PageIndicator";
import UserProfile from "./components/Pages/UserProfile";
import Dashboard from "./components/Pages/Dashboard";
import bulkuser from "./components/Pages/BulkUser";
import bulkupload from "./components/Pages/BulkUpload";
import DropZone from "./components/dropzone/DropZone";
import question from "./components/Pages/question";
import results from "./components/Pages/results";
import leaderboards from "./components/Pages/leaderboards";
import test from "./components/Pages/test";
import demotest from "./components/Pages/demotest";

import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

function App() {
  return <Router>

  <Switch>
    <Route exact path = "/Dashboard" component = {Dashboard} />
    <Route exact path = "/" component = {login} />
    <Route exact path = "/bulkuser" component = {bulkuser} />
    <Route exact path = "/bulkupload" component = {bulkupload} />
    <Route exact path = "/login" component = {login} />
    <Route exact path = "/forgotpassword" component = {forgotpassword} />
    <Route exact path = "/UserProfile" component = {UserProfile} />
    <Route exact path = "/question" component = {question} />
    <Route exact path = "/results" component = {results} />
    <Route exact path = "/leaderboards" component = {leaderboards} />
    <Route exact path = "/test" component = {test} />
    <Route exact path = "/demotest" component = {demotest} />




  </Switch>
  </Router>
}

export default App;
