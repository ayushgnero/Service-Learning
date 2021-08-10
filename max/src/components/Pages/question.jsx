import React,{Component} from 'react';
import PageIndicator from "../PageIndicator/PageIndicator";
// import Timer from "../Timer/timer";
import {questions} from "../DBMS/questions.js";
import {DashboardItems} from "../DBMS/DashboardItems.js";
import {leaderboard} from "../DBMS/leaderboard.js";

class question extends Component{
      // const
      // const HandelQuestion = (index) => {
      //       return (this.state.i = index-1);
      //     }
      constructor(props){
        super(props);
        this.state = {
          i: 1,
          j:DashboardItems[0],
          k:questions["topic"][0].questions,
          z:leaderboard[0],
          a:questions,
          flag:[],
          count: 1,
          score:0
        };
        this.nextClick = this.nextClick.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.flagClick = this.flagClick.bind(this);
        this.HandelAnswer = this.HandelAnswer.bind(this);
        this.HandelQuestion = this.HandelQuestion.bind(this);
        this.Submit = this.Submit.bind(this);
      }
      HandelQuestion = (index) =>{
        // console.log(index.sno);
        this.setState((state)=>{
          let x = document.getElementById(state.i);
          x = document.getElementById(state.i);
          x.style.backgroundColor = "#E5EAF0";
          x = document.getElementById(index.sno);
          x.style.backgroundColor = "#048998";
            return {
              i: index.sno,
              j: questions[this.i]
            }

          })
      }
      HandelAnswer =(index)=>{
        // console.log(index);
        if(this.state.k[this.state.i-1].option[index].isCorrect){
          this.state.score = this.state.score+1;
          // console.log(this.state.score);
        }
      }
      Submit(){
        leaderboard[0].marks = this.state.score;
        this.props.history.push('/leaderboards');
      }

      componentDidMount() {

       let x = document.getElementById(1);
       x.style.backgroundColor = '#048998';
       x.style.color = "#f6f5f5";
       this.setState((state)=>
     {
       let i =0;

       let len = state.k.length;
       for (i=1;i<len+1;i++)
       {
         this.setState(prevState => ({
          flag: [...prevState.flag, 'false']
        }));
       }
     }

      )
      }
      flagClick(){
        this.setState((state)=>{
          let x = document.getElementById(state.i);
          let temp = state.i;
          x.style.backgroundColor = "purple";
          state.flag[state.i-1] = 'true';
          return{
              i:state.i,
              flag:state.flag
          };

        })

      }
      nextClick() {
        this.setState((state) => {
          let eleX = document.getElementById('testvalue1');
          eleX.checked = false;
          let eleY = document.getElementById('testvalue2');
          eleY.checked = false;
          let x = document.getElementById(state.i);
          let len = state.k.length;
          if (state.i<len)
            {
              if (state.flag[state.i]!='true')
              {
                x = document.getElementById(state.i);
                x.style.backgroundColor = "#E5EAF0";
                x.style.color = "#121212";
                x = document.getElementById(state.i+1);
                x.style.backgroundColor = "#048998";
                x.style.color = "#f6f5f5";
              }

              return {
                i: state.i + 1,
                j: questions[state.i]};
          }
          else
          {

              x = document.getElementById(state.i);
              x.style.backgroundColor = "#E5EAF0";
              x.style.color = "#121212";
              if (state.flag[0]!='true'){
              x = document.getElementById(1);
              x.style.backgroundColor = "#048998";
              x.style.color = "#f6f5f5";
              }
            return {i: 1,
              j: questions[0]};

          }
        });
      }
      prevClick() {
        this.setState((state) => {
          let x = document.getElementById(state.i);
          let len = state.k.length;
          let eleX = document.getElementById('testvalue1');
          eleX.checked = false;
          let eleY = document.getElementById('testvalue2');
          eleY.checked = false;

          if (state.i > 1)
          {
            if (state.flag[state.i-1]!='true')
            {
              x = document.getElementById(state.i);
              x.style.backgroundColor = "#E5EAF0";
              x.style.color = "#121212";
              x = document.getElementById(state.i - 1);
              x.style.backgroundColor = "#048998";
              x.style.color = "#f6f5f5";
              return {i: state.i - 1,
              j: questions[state.i -2]};
            }
          }
          else
          {
            x = document.getElementById(state.i);
            x.style.backgroundColor = "#E5EAF0";
            x.style.color = "#121212";
            // if (state.flag[4]!='true')
            // {
            x = document.getElementById(len);
            x.style.backgroundColor = "#048998";
            x.style.color = "#f6f5f5";
          // }
            return {i: len,
              j: questions[len-1]};
          }
        });
      }
      componentDidMount () {
        const {startCount} = this.props
        this.setState({
          count: this.state.a["duration"]
        })
        this.doIntervalChange()
      }

      doIntervalChange = () => {
        const {count} = this.state
          this.myInterval = setInterval(() => {
          this.setState(prevState => ({
            count: prevState.count - 1
          }))
          let mm = Math.floor(this.state.count/60);
          let ss = this.state.count % 60;
          document.getElementById("timer").innerHTML = `${mm}:${ss}`;
          if (this.state.count === 0)
          {
            this.Submit();
          }
          this.state.k[this.state.i - 1].time += 1;
        }, 1000)
      }
      componentWillUnmount () {
        clearInterval(this.myInterval)
      }
    render()
    {

      let temp = questions;
      let temp2 = leaderboard;
      let item = this.state.j;
      let item3 = this.state.k;
      // console.log(this.state.k[0].sno);
      let item1 = this.state.k[this.state.i-1];

      return(
      <div>
        <div className = "Status">
          <h1 className = "StatusText">{temp["name"]}</h1>
          <h3 className = "StatusText">{temp["description"]}</h3>
        </div>
        <div>
          <div class="mainback1">
            <div class="questions1001">
              {questions["topic"][0].questions.map((item, index) => {
                            return (
                              <div className ="grid-item1001" href={item3[index].question}  onClick={() => this.HandelQuestion(item)}>
                                <p className="dashtext1" onClick={() => this.HandelQuestion(index)}>{item3[index].question}</p>
                              </div>
                            )
                        })}
            </div>
            <div  class="questions111">
                <h3 className="question111">{item1.question}</h3>
                <br></br>
                  <form>
                    <input className="option" type="radio" id="testvalue1" name="choose" value="testvalue1" onClick={() => this.HandelAnswer(0)}/>
                      <label className="option" for="testvalue1">{item1.option[0].option1}</label><br/>
                    <input className="option" type="radio" id="testvalue2" name="choose" value="testvalue2" onClick={() => this.HandelAnswer(1)}/>
                      <label className="option" for="testvalue2">{item1.option[1].option2}</label><br/>
                    <input className="option" type="radio" id="testvalue1" name="choose" value="testvalue1" onClick={() => this.HandelAnswer(2)}/>
                      <label className="option" for="testvalue1">{item1.option[2].option3}</label><br/>
                    <input className="option" type="radio" id="testvalue2" name="choose" value="testvalue2" onClick={() => this.HandelAnswer(3)}/>
                      <label className="option" for="testvalue2">{item1.option[3].option4}</label><br/>
                  </form>
            </div>



            <div class="qustion-uploaded">
              <div class="question-numbers">
                <h2 id = "timer"></h2>
                <h3>Questions</h3>
                <hr class="hr"></hr>
                <div className="grid-container3">
                  {questions["topic"][0].questions.map((item, index) => {
                                return (
                                  <div id={item.sno} className ="grid-item5" value={item.sno}>
                                    <h1  className = "">{item.sno}</h1>
                                  </div>
                                    // <li key={index}>
                                    //     <a className={item.cName} href={item.url}>
                                    //     {item.title}
                                    //     </a>
                                    // </li>
                                )
                            })}
                </div>

              </div>
              <button className ="b3" onClick={this.nextClick}>Next Question</button>
              <button className ="b3" onClick={this.prevClick}>Prev Question</button>
              <button className ="b3" onClick={this.Submit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )}
}
export default question;
