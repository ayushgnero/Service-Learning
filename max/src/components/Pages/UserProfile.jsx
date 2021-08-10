import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar"
import PageIndicator from "../PageIndicator/PageIndicator"
import '../Pagecss/UserProfile.css';
import {UserDetails} from "../DBMS/Users.js";
const UserProfile = () =>
{
  let name = UserDetails;
  return (
    <div className="App">

      <Navbar />
      <PageIndicator />
      <div className="mainBody">
        <div className="userDisplay">
            <img  class = "img" src = "https://wallpaperaccess.com/full/1134174.jpg" />
            <h1 className = "Username">{name[0].Student[0].Details[0].username}</h1>
            <h3 className = "UserEmail">{name[0].Student[0].Details[0].useremail}</h3>
        </div>
        <div className = "UserDetails">
          <div className ="Left">
            <p className = "Head-L">Gender</p>
            <h2 className = "Content-L">{name[0].Student[0].Details[0].gender}</h2>
            <hr className = "Underline-L"></hr>
            <p className = "Head-L">Address</p>
            <h2 className = "Content-L">{name[0].Student[0].Details[0].address}</h2>
            <hr className = "Underline-L"></hr>
            <p className = "Head-L">Member Type</p>
            <h2 className = "Content-L">{name[0].Student[0].Details[0].MemberType}</h2>
            <hr className = "Underline-L"></hr>
          </div>
          <div className="Right">
            <p className = "Head-R">Phone Number</p>
            <h2 className = "Content-R">{name[0].Student[0].Details[0].phone}</h2>
            <hr className = "Underline-R"></hr>
            <p className = "Head-R">City</p>
            <h2 className = "Content-R">{name[0].Student[0].Details[0].city}</h2>
            <hr className = "Underline-R"></hr>
            <p className = "Head-R">Birth Date</p>
            <h2 className = "Content-R">{name[0].Student[0].Details[0].birth}</h2>
            <hr className = "Underline-R"></hr>
          </div>
        </div>
        <div className ="UserTimeline">
          <button className="Events">Upcomming Events</button>
          <button className="Events">Past Events</button>
          <div className="Eventdiv">
            <h1></h1>
            <div className="Eventinfo grid-container">
              <div class="grid-item">
                <h1 className = "EventContent">{name[0].Events[0].Date}</h1>
                <h3 className = "UserEmail2">{name[0].Events[0].Time}</h3>
              </div>
              <div className="grid-item ">
                <h1 className="Subject">
                  {name[0].Events[0].Subject}
                </h1>
              </div>
              <div className="Unit">{name[0].Events[0].Unit}</div>

            </div>
            <div className="Eventinfo grid-container">
              <div class="grid-item">
                <h1 className = "EventContent">{name[0].Events[0].Date}</h1>
                <h3 className = "UserEmail2">{name[0].Events[0].Time}</h3>
              </div>
              <div className="grid-item ">
                <h1 className="Subject">
                  {name[0].Events[0].Subject}
                </h1>
              </div>
              <div className="Unit">{name[0].Events[0].Unit}</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
