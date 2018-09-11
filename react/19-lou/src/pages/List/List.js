import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
class List extends Component {
  handleRoute = () => {
    console.log('qaz')
    // this.props.history.push('/yes')
    this.props.history.go('/yes')  //match需要withRouter么？
  }
  render(){
    return(
      <div>
        <p onClick={this.handleRoute}>路由</p>
      </div>
    )
  }
}

export default withRouter(List) 