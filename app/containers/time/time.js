import React, {Component} from 'react';
import DragTime from '../../components/DragTime/DragTime.js';
import styles from './time.css';
function settime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i;
}
export default class Time extends Component {
  constructor(props) {
    super(props);
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    this.state = {
      h: settime(hour),
      m: settime(minutes),
      s: settime(seconds)
    };
  }
  componentDidMount() {
    let self = this;
    let time = setInterval(function () {
      let date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      self.setState({h: settime(hour), m: settime(minutes), s: settime(seconds)});
      
   }, 1000);

  }

  render() {
    return (
      <div className={styles.fuck}>
        <h1>{this.state.h}:{this.state.m}:{this.state.s}
        </h1>
        <DragTime />
        
      </div>
    )
  }
}
