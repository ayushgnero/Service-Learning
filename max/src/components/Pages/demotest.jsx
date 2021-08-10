import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar"
import "../Pagecss/BulkUpload.css";
import "../Pagecss/UserProfile.css";

class demotest extends Component{
  constructor(props){
    super(props);
    this.state = {
      i: 1
    };
    this.Submit1 = this.Submit1.bind(this);
  }
  Submit1(){
    this.props.history.push('/question');
  }

  render(){
    let divStyle =
    {
      color:'black',
      justifyContent: 'center', //Centered vertically
      alignItems: 'center',
      paddingTop:270,
      fontSize: 27,
      textAlign: 'center', // Centered horizontally
      flex:1
    };
    let divStyle1 =
    {
      color:'black',
      justifyContent: 'center', //Centered vertically
      alignItems: 'center',
      fontSize: 17,
      textAlign: 'center', // Centered horizontally
      flex:1
    };
    return(
      <div>
        <div className = "Status">
          <h1 className = "StatusText">Demo Test</h1>
          <div class="mainback1">
            <h1 style={divStyle}>This is a demo Test on Intemediate Physics</h1>
            <br></br>
            <h3 style={divStyle1}>Please click on the Button to take the Test</h3>
            <br></br>
            <button className ="b4" onClick={this.Submit1}>Submit</button>
          </div>

        </div>
      </div>
    )
  }

}

export default demotest
