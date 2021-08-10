max/src/App.js
```js

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import login from "./components/Pages/login";
import forgotpassword from "./components/Pages/forgotpassword";
import PageIndicator from "./components/PageIndicator/PageIndicator";
import UserProfile from "./components/Pages/UserProfile";
import Dashboard from "./components/Pages/Dashboard";
import bulkuser from "./components/Pages/BulkUser";
import bulkupload from "./components/Pages/BulkUpload";
import DropZone from "./components/dropzone/DropZone"

import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

function App() {
  return <Router>

  <Switch>
    <Route exact path = "/" component = {login} />
    <Route exact path = "/Dashboard" component = {Dashboard} />
    <Route exact path = "/bulkuser" component = {bulkuser} />
    <Route exact path = "/bulkupload" component = {bulkupload} />
    <Route exact path = "/login" component = {login} />
    <Route exact path = "/forgotpassword" component = {forgotpassword} />
    <Route exact path = "/UserProfile" component = {UserProfile} />



  </Switch>
  </Router>
}

export default App;

```
max/src/components/Navbar/MenuItems.js
```js
export const MenuItems = [
  {
    title: 'Dashboard',
    url: 'Dashboard',
    cName:'nav-links'
  },
  {
    title: 'Assessments',
    url: 'bulkupload',
    cName:'nav-links'
  },
  {
    title: 'Resources',
    url: '#3',
    cName:'nav-links'
  },
  {
    title: 'Scores',
    url: '#4',
    cName:'nav-links'
  },
  {
    title: 'Student History',
    url: '#5',
    cName:'nav-links'
  },
  {
    title: 'Profile',
    url: '/UserProfile',
    cName:'nav-links'
  },
]

```
max/src/components/DBMS/DashboardItems.js

```js
export const DashboardItems = [
  {
    sno:'1',
    title: 'Create Assessments',
    url: '/bulkupload',
    cName:'nav-links'
  },
  {
    sno:'2',
    title: 'Review Assessments',
    url: '/reviewassessments',
    cName:'nav-links'
  },
  {
    sno:'3',
    title: 'Student History',
    url: '/studenthistory',
    cName:'nav-links'
  },
  {
    sno:'4',
    title: 'Resources',
    url: '/resources',
    cName:'nav-links'
  },
  {
    sno:'5',
    title: 'Upload Profile',
    url: '/bulkupload',
    cName:'nav-links'
  },
]

```
max/src/components/Pagecss/BulkUpload.css
```css
.mainback1{
  background-color: #fff;
  margin-top: 3.5%;
  width: 90%;
  border-radius: 1.2rem;
  padding: 1.2rem;
  height: 76vh;
  margin-left: auto;
  margin-right: auto;
}
.mainback2{
  background-color: #fff;
  margin-top: 3.5%;
  width: 90%;
  border-radius: 1.2rem;
  padding: 1.2rem;
  height: 76vh;
  margin-left: auto;
  margin-right: auto;
}
.questions
{
  padding: 0 0 3% 3%;
  margin-left: 1%;
  width:70%;
  background-color: #E5EAF0;
  float:left;
  height: 70vh;
  border-radius: 1.2rem;
  pointer-evnts: none;
}
.grid-container3 {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.grid-item4
{
  margin-top: 10%;
  background-color: #fff;
  font-size: 0.4rem;
  width:80%;
  border-radius: 0.5rem;
}
.grid-item5
{
  background-color: #E5EAF0;
  text-align: center;
  margin:30% 0 0 30%;
  width:42%;
  border-radius: 50%;
  font-size: 0.4rem;
}
.qustion-uploaded
{
  float: left;
  width:20%;
  height: 76vh;
  margin-left: 5%;
}

.question-numbers
{
  background-color:#eafafd;
  pointer-events: none;
  width: 95%;
  height: 75%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.2rem;
  padding: 2%;
}
.hr
{
  margin-top: -3%;
  color: #E5EAF0;
  width: 90%;
}
.b1
{
  margin-top: 7%;
  background-color: #0077b6;
  color: #fff;
  width:65%;
  margin-left: 20%;
  border-radius: 2rem;

  cursor: pointer;
}
.b2
{
  margin-top: 1%;
  float: left;
  background-color: #0077b6;
  color: #fff;
  width:13rem;
  border-radius: 2rem;
  cursor: pointer;
}
.b3
{
  margin-top: 15%;
  margin-left: 15%;
  height: 2rem;
  padding-top: 3%;
  float: left;
  background-color: #0077b6;
  color: #fff;
  width:15rem;
  border-radius: 2rem;
  cursor: pointer;
  text-align: center;
}
.dropdown-content
{
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 0.5rem;
}
.dropdown-content a
{
  color: black;
  padding: 12px 16px;
  font-size: 1rem;
  text-decoration: none;
  display: block;
  border-radius: 0.5rem;
}

.dropdown-content a:hover
{
  background-color: #eafafd;
  border-radius: 0.5rem;
}

.dropdown:hover .dropdown-content
{
  display: block;
  border-radius: 0.5rem;
}
.a
{

  margin-top: 2.68%;
  margin-left: 5.8%;
}
.b
{
  margin-top: 2.68%;
  margin-left: 21.8%;
}
.question112
{
  padding: 0 0 3% 3%;
  width:15%;
  background-color: #E5EAF0;
  float:left;
  height: 70vh;
  border-radius: 1.2rem;
  pointer-events: none;
}
.grid-container15 {
  display: grid;
  grid-template-columns: auto;
}
.top1
{
  margin-top: 13%;
}
.content1{
  width:100%;
  margin-top: 12%;
  margin-left: 18%;
}
.content2
{
    pointer-events: auto;
  width: 7rem;
  margin-top: 35%;
  z-index: 99999;
}
.dashtext
{
  text-decoration:none;
  margin-top: 20%;
  color:#000;
  font-size: 2rem;
}

```
max/src/components/Pagecss/UserProfile.css

```css

.mainBody{
  margin:0;
  padding: 2% 0 0 4%;
  align-items: center;
  align-content: center;
  z-index: 0;
}
.userDisplay{
  float: left;
  height:20rem;
  border-radius: 1.2rem;
  width: 25rem;
  background: #fff;
  padding: 1%;
  z-index: 1;
}
.img{

  padding: 0%;
  display: block;
  margin-top: 7%;
  margin-left: auto;
  margin-right: auto;
  height: 12em;
  border : 2px solid #023E8A;
  border-radius: 50%;
}
.Username{
  pointer-events: none;
  color: #023E8A;
  display: block;
  padding-top:2%;
  font-size: 1.5rem;
  margin-top: 0;
  text-align: center;
}
.UserEmail{
  pointer-events: none;
  color:#0077B6;
  display: block;
  font-size: 0.8rem;
  margin-top: 0;
  text-align: center;
}
.UserDetails{
  pointer-events: none;
  float: left;
  margin-left: 2%;
  height:20rem;
  border-radius:1.2rem;
  width: 80rem;
  background: #fff;
  padding: 1%;
  z-index: 1;

}
.UserTimeline{
  pointer-events: none;
  margin-top:2%;
  display: inline-block;
  height:21rem;
  border-radius:1.2rem;
  width: 109.5rem;
  background: #fff;
  padding: 1%;
  z-index: 1;

}
.Head-L
{
  margin-left: 20%;
  margin-top: 7%;
  color: #2088BF;
  font-size: 0.8rem;
  line-height: 5%;
}
.Content-L
{
  line-height: 5%;
  margin-left: 20%;
  color: #023E8A;
  font-size: 1.7rem;
}
.Underline-L
{
  margin-left: 20%;
  width:70%;
  margin-bottom: 5%;
}
.Head-R
{
  margin-left: 5%;
  color: #2088BF;
  margin-top: 7%;
  font-size: 0.8rem;
  line-height: 5%;
}
.Content-R
{
  line-height: 5%;
  margin-left: 5%;
  color: #023E8A;
  font-size: 1.7rem;
}
.Underline-R
{
  margin-left: 5%;
  width:70%;
  margin-bottom: 5%;
}
.Left{
  float: left;
  width:49%;
}
.Right
{
  float:left;
  width:49%;

}
.Events
{
  background-color: #ADE8F4;
  color:#023E8A;
  margin-left: 5%;
  width:20rem;
  height: 2rem;
  border:0px solid transparent;
  border-radius: 10px;
}
.Eventdiv
{
  margin-top: 1%;
  background-color: #E0F9FF;
  height: 17rem;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}
.Eventinfo
{
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  width:80%;
  background-color: #fff;
  height:5rem;
  border-radius: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #fff;
}
.grid-container1 {
  display: grid;
  grid-template-columns: auto auto auto;
}
.grid-container2 {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.grid-item {
  margin-top: 2%;
  align-items: center;
  width:90%;
  height:4rem;
  text-align: center;
  border-right: 1px solid black;
}
.grid-item1 {
  font-size: 0.8rem;
  background-color: #fff;
  height: 9rem;
  margin-top: 10%;
  align-items: center;
  padding-top: 15%;
  width:80%;
  border-radius: 10px;
  text-align: center;
  pointer-events: all;
  z-index: 999999;
}
.grid-item3 {
  font-size: 0.8rem;
  background-color: #fff;
  height: 2rem;
  margin-left: 70%;
  margin-right: auto;
  margin-top: 5%;
  align-items: center;
  width:70%;
  border-radius: 5px;
  text-align: center;
}
.grid-item2 {
  margin-left: auto;
  margin-right: auto;
  font-size: 0.8rem;
  height: 4rem;
  margin-top: 5%;
  align-items: center;
  width:80%;
  border-radius: 10px;
  text-align: center;
}
.EventContent{
  color: #023E8A;
  display: block;
  text-align: right;
  padding-top:5%;
  font-size: 1rem;
  margin-top: 0;
  text-align: center;
}
.UserEmail2{
  text-align: right;
  color:#0077B6;
  display: block;
  font-size: 0.7rem;
  margin-top: -2%;
  text-align: center;
}

.Subject{
  font-size: 2rem;
  text-align: center;
  margin-top: 2%;
  margin-left: -3%;
  padding-right: 15%;
  color:#023E8A;
}

.Unit{
  color:#0077B6;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15%;
}
.form{
    margin-left: auto;
    margin-right: auto;
    height: 35vh;
    border-radius: 20px;
    background-color: #E5EAF0;
    width: 80%;
}
.upload{
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  height: 25vh;
  background-color: #CAF1F8;
  width: 80%;
}
.textbulkuser{
  margin-left: 10%;
}
.headbulkuser{
  padding-top: 2%;
  font-size: 1rem;
  margin-left: 5%;
}
.subbulkuser{
  line-height: 0.4rem;
  font-size: 0.8rem;
}
.titlebulkuser{
  text-align: left;
  font-size: 0.7rem;
  line-height: 0;
}
.inputbulkuser{
  border: 1px solid #aeaeae;
  margin-left: -15%;
  height:1.8rem;
  border-radius: 5px;
  width:80%;
  text-align: left;
}
.formsbutton{
  width:40%;
  margin-left: auto;
  margin-right: auto;
}
.vi{
  background-color: #F5FDFF;
  border: 1px solid #0177B7;
}
.sub{
  border:none;
  background-color: #0177B7;
  color:#fff;
}
.cf{
  border: none;
  background-color: transparent;
  color:#f00;
}
.cloudupload
{
  height: 2rem;
  background-color: #AEE8F4;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color:#000C53;
}
.clouduploadtext{
  line-height: 0;
  font-size: 1.4rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.clouduploadtext1
{
  text-align: center;
  margin-left: 0;
  color:#6C8995;
  margin-top:5%;
  font-size: 1.5rem;
}
.auploaduser{
  color:#090654;
  text-decoration: none;
}
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

```
max/src/components/Pages/Dashboard.jsx

```js
import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar"
import PageIndicator from "../PageIndicator/PageIndicator"
import {DashboardItems} from "../DBMS/DashboardItems.js";
import "../Pagecss/BulkUpload.css";
import "../Pagecss/UserProfile.css";

const Dashboard = () =>
{
  return(
    <div>
      <Navbar />
        <div className = "Status">
          <h1 className = "StatusText">Dashboard</h1>
        </div>
      <div className ="mainBody">
        <div className="grid-container1">
          {DashboardItems.map((item, index) => {
                        return (
                          <div className =" grid-item1" href={item.url}>
                            <a className="dashtext" href={item.url} >{item.title}</a>
                          </div>
                        )
                    })}
        </div>
      </div>
    </div>

  )
}
export default Dashboard;

```
