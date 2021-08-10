import React,{Component} from 'react';
// import PageItems from './PageItems';
import './PageIndicator.css';
import {PageItems} from "./PageItems.js";
class PageIndicator extends Component{

  render(){
    let name = PageItems;
        return (
          <div className = "Status">
            <h1 className = "StatusText">{name[0].UserProfile[0].title}</h1>
            <h3 className = "StatusText">{name[0].UserProfile[0].Student[0].type}</h3>
        </div>
      )
  }
}
export default PageIndicator
