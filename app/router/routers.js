
import { Router, Route, Link, browserHistory } from 'react-router';
import Hello from '../containers/hello/hello.js';
import About from '../containers/about/about.js';
import NoMatch from '../containers/404/nomatch.js';
import Time from '../containers/time/time.js';
import React,{Component} from 'react';

export default class ROUTERS extends Component{
  constructor() {
    super();
  }
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Time}/>
        <Route path="/hello" component={Hello}>
            <Route path="/about" component={About}/>
        </Route>
        <Route path="/time" component={Time}/>
        <Route path="*" component={NoMatch}/>
    </Router>
    )
  }
}
