import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar";
import PageIndicator from "../PageIndicator/PageIndicator";
import DropZone from '../dropzone/DropZone';
import axios from 'axios'
class bulkuser extends React.Component
{
  constructor(){
        super();
        this.state={
          full_name:'',
          college:'',
          degree:'',
          email:'',
          registration_no:'',
          Class:'',
          role:'',
          course:'',
          phone_number:'',
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
      console.log(this.state)
      axios
      .post(`http://127.0.0.1:8000/rest-auth/registration/`, {
        full_name: this.state.full_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        college: this.state.college,
        degree: this.state.degree,
        registration_no: this.state.registration_no,
        Class: this.state.Class,
        role: this.state.role,
        course: this.state.course,
      },{
      headers: { 'Content-Type': 'application/json;application/x-www-form-urlencoded;charset=utf-8' } })
      // .then(res => { if (res.status === 200) { console.log(res) } }).catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
      .then((res) => {
        // redirect to Updating page
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
        if (error.message == "Request failed with status code 400") {
          this.setState({
            ...this.state,
            err: "This Email Id is taken. Try a different one.",
          });
        } else throw error;
      });


        this.setState({
          full_name:'',
          college:'',
          degree:'',
          email:'',
          registration_no:'',
          Class:'',
          role:'',
          course:'',
          phone_number:''
        });
    }
  render(){
    document.body.style.overflow = "hidden"
  return(
    <div>
    <Navbar />
    <div className = "Status">
      <h1 className = "StatusText">Admin Dashboard</h1>
      <h3 className = "StatusText">Add Users</h3>
    </div>
    <div className="mainBody">
      <h1></h1>
      <div className ="form">
        <h2 className="headbulkuser">
          STUDENTS LIST
        </h2>
        <h3 className= "subbulkuser">
        Filter the results based on the following
        </h3>
        <h3  className= "subbulkuser">
        the following parameters
        </h3>
        <div className= "grid-container2">
          <div className="grid-item2">
          <p className="titlebulkuser">Full Name
          </p>
          <input value={this.state.full_name} name="full_name" onChange={this.changeHandler} type="text" className="inputbulkuser"></input>
          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">College
          </p>
          <input value={this.state.college} name="college" onChange={this.changeHandler} type="text" className="inputbulkuser"></input>
          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Degree
          </p>
          <input value={this.state.degree} name="degree" onChange={this.changeHandler} type="text" className="inputbulkuser"></input>
          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Email
          </p>
          <input value={this.state.email} name="email" onChange={this.changeHandler} type="email" className="inputbulkuser"></input>

          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Registration Number
            </p>
          <input value={this.state.registration_no} name="registration_no" onChange={this.changeHandler} type="text" className="inputbulkuser"></input>

          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Class
          </p>
          <input value={this.state.Class} name="Class" onChange={this.changeHandler} type="text" className="inputbulkuser"></input>

          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Role
          </p>
          <input value={this.state.role} name="role" onChange={this.changeHandler} type="text" className="inputbulkuser"></input>
          </div>
        <div className="grid-item2">
          <p className="titlebulkuser">Course
          </p>
          <input value={this.state.course} name="course" onChange={this.changeHandler} type="text" className="inputbulkuser"></input>
          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Phone Number
            </p>
          <input value={this.state.phone_number} name="phone_number" onChange={this.changeHandler} type="text" className="inputbulkuser"></input>

          </div>
        </div>
        <div className="formsbutton">
          <div className="grid-container1">

            <input type="submit" onClick={this.submitForm} className="grid-item3 sub" />

          </div>
        </div>
      </div>
      <div>
        <div className="content1">
          <DropZone/>
        </div>
      </div>
      </div>
    </div>
    )
  }
}
export default bulkuser;
