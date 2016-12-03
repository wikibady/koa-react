import React, {Component} from 'react';

import styles from './DragCell.css'
function settime(i) {
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }
export default class DragCell extends Component {
  constructor(props) {
    super(props);
  }
  MouseOverCell() {
    
   console.log(this.props.cellIndex)
  }
  render() {
    return (
      <div className = {styles.dragCell} onMouseOver={this.MouseOverCell.bind(this)}/>
    )
  }
}
