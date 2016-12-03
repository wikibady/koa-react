import React,{Component} from 'react';
import DragLine from './DragLine.js';
import  styles from'./DragTime.css'
export default class DragTime extends Component{
  constructor() {
    super();
  }
  render(){
    return (
      <div className={styles.fuck}>
        <DragLine alllength={24} title={"H"} />
        <DragLine alllength={60} title={"M"} />
        <DragLine alllength={60} title={"S"}  />
      </div>
    )
  }
}
