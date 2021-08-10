import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import "./chart.css"
class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      time:props.time
    }
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'right',
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Results',
              fontSize:15
            }
          }}
        />
        
      </div>
    )
  }
}

export default Chart;
