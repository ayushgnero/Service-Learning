import React,{Component} from 'react';
import PageIndicator from "../PageIndicator/PageIndicator";
import Navbar from "../Navbar/Navbar"
import {leaderboard} from "../DBMS/leaderboard.js";

class results extends Component{
  constructor(props){
    super(props);
    this.state = {
      j:leaderboard,
    };
  }
  renderTableData() {
      return this.state.j.map((table, index) => {
         const { id, name, age, email,marks } = table //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
               <td>{marks}</td>
            </tr>
         )
      })
   }

  render(){
    let k = leaderboard;
    console.log(k[0].marks);
    return(
      <div>
        <Navbar/>
          <div className = "Status">
            <h1 className = "StatusText">Results</h1>
          </div>
          <div class="mainback1">
            <div  class="questions1">
              <table id="table">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Marks</th>
                </tr>
                <tbody>
                  {this.renderTableData()}
               </tbody>
              </table>

            </div>
          </div>
      </div>
    )
  }
}

export default results;
