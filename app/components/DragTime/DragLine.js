import React, {Component} from 'react';
import DragCell from './DragCell.js';
import styles from './DragLine.css'
function settime(i) {
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }
export default class DragLine extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    let items = [];
    for (let i = 0; i < this.props.alllength; i++) {
      items.push(
        <DragCell key={i} cellIndex = {i} />
      )
    }
    return (
      <div className={styles.dragLine}>
        {items}
        <div className={styles.dragBoard} ></div>
      </div>
    )
  }
}
