import React,{Component} from 'react';
import PageIndicator from "../PageIndicator/PageIndicator";
import Navbar from "../Navbar/Navbar"
import {leaderboard} from "../DBMS/leaderboard.js";
import {questions} from "../DBMS/questions.js";

import Chart from "../Chart/Chart";
class leaderboards extends Component{
  constructor(props){

    super(props);
    this.state = {
      i:0,
      j:leaderboard,
      z:questions["topic"][0].questions,
      Correct: props.score,
      time:{
        labels: ['Question', 'Time'],

        datasets:[
          {
            label:'Average Time',
            data:[],
            backgroundColor:[
              'rgba(54, 255, 54, 0.9)',
              'rgba(255, 99, 132, 0.9)',
            ]
          }
        ]
      },
      chartData:{
        labels: ['Correct', 'InCorrect'],

        datasets:[
          {
            label:'Results',
            data:[
              leaderboard[0].marks,
              questions["no_of_questions"]-leaderboard[0].marks,
              0
            ],
            backgroundColor:[
              'rgba(54, 255, 54, 0.9)',
              'rgba(255, 99, 132, 0.9)',
            ]
          }
        ]
      }
    }
  }
  static defaultProps = {
    Correct:0,
  }
  componentWillUnmount(){
    this.getChartData();
    console.log(this.state.Correct);
  }
  getChartData(){
    var i;
    for (i = 0; i<questions["no_of_questions"];i++)
    {
      this.state.time["datasets"][0].data.push(questions["topic"][0].questions[i].time);
      console.log(questions["topic"][0].questions[i].time);
    }
    this.setState({
      chartData:{},
      time:[]
    })
  }
  renderTableData() {
      return this.state.z.map((table, index) => {
         const { sno, time} = table //destructuring
         return (
            <tr key={sno}>
               <td>{sno}</td>
               <td>{time}</td>
            </tr>
         )
      })
   }
  sort() {
    let i = 0;
    let j=0 ;
    let k = this.state.j.length;
    let temp = 0;
    // for (i = 0; i<k ;i = i +1)
    // {
    //   for(j=1; j < (k-i); j++){
    //     {
    //       if(this.state.j[j-1].marks < this.state.j[j].marks)
    //       {
    //         temp = this.state.j[j-1];
    //         this.state.j[j-1] = this.state.j[j];
    //         this.state.j[j] = temp;
    //       }
    //     }
    // }
  // }
      return (
         <tr key={this.state.j[0].id}>
            <td>{this.state.j[0].id}</td>
            <td>{this.state.j[0].name}</td>
            <td>{this.state.j[0].age}</td>
            <td>{this.state.j[0].email}</td>
            <td>{this.state.j[0].marks}</td>
         </tr>
       )

  }

  render(){
    let k = leaderboard;
    let m = questions["topic"][0].questions;
    return(
      <div>
        <Navbar/>
          <div className = "Status">
            <h1 className = "StatusText">Results</h1>
          </div>
          <Chart chartData={this.state.chartData}legendPosition="bottom"/>
          <div class="mainback3">
            <div  class="questions2">
              <table id="table">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Marks</th>
                </tr>
                <tbody>
                  {this.sort()}
               </tbody>
              </table>
              <table id = "table1" class="table1">
                <tr>
                  <th>Question Number</th>
                  <th>Time</th>
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

export default leaderboards;
