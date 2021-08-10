import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar";
import PageIndicator from "../PageIndicator/PageIndicator";
import '../Pagecss/UserProfile.css';
import axios from 'axios';
import '../Pagecss/BulkUpload.css';
import {DashboardItems} from "../DBMS/DashboardItems.js";
import DropZone from '../dropzone/DropZone';
class bulkupload extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      profilePic: null,
    };
    this.inpuElement = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({profilePic: e.target.files[0]});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    var token = sessionStorage.getItem("tree")
    axios.post("https://pure-retreat-17538.herokuapp.com/File/",{
      excel: this.state.file
    },
    {headers: {Authorization: `JWT ${token}`}}
    ).then((response) => {
      alert(response)
      console.log(response)
      console.log(this.state.user)
    })
    .catch((err) => {
      alert(err);
    });
  }
  render(){
    return(
      <div>
        <Navbar />
        <div className = "Status">
          <h1 className = "StatusText">Bulk Upload</h1>
          <h3 className = "StatusText">Upload</h3>
        </div>
        <div class="dropdown">
          <button class="b2 Events">Select Semester</button>
          <div class="dropdown-content a">
          {DashboardItems.map((item, index) => {
                        return (
                            <a>{item.title}</a>
                            // <li key={index}>
                            //     <a className={item.cName} href={item.url}>
                            //     {item.title}
                            //     </a>
                            // </li>
                        )
                    })}
          </div>
        </div>
        <div class="dropdown">
          <button class="b2 Events">Select Subject</button>
          <div class="dropdown-content b">
          {DashboardItems.map((item, index) => {
                        return (
                            <a>{item.title}</a>
                            // <li key={index}>
                            //     <a className={item.cName} href={item.url}>
                            //     {item.title}
                            //     </a>
                            // </li>
                        )
                    })}
          </div>
        </div>
          <div class="mainback1">
              <DropZone/>

              <input ref={(input) => { this.inpuElement = input; }} onChange={this.handleSubmit} className="inputfile" name="file" id="file" type="file" accept=".xlsx"/>
              <label className ="b5" for="file">Choose a file</label>
          </div>
      </div>
    )
  }
}

export default bulkupload;
