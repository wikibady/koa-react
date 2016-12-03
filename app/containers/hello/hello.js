import React,{Component} from 'react';

import  styles from'./hello.css'
export default class Hellow extends Component{
  constructor() {
    super();
  }
  render(){
    return (
      <div className={styles.fuck}>
        <h1>Hello2 </h1>
        {this.props.children}
      </div>
    )
  }
}
