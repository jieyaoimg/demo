import React, { Component } from 'react';
// import {withRouter} from "react-router-dom";
class List extends Component {
  handleRoute = () => {
    console.log(this.props.location)
    console.log(this.props.match)
    this.props.history.push('/yes') //或者 this.props.history.go('/yes')
  }
  setInnerHTML = () => {
    return ({
      __html: '<h2>我是H2</h2>' //dangerouslySetInnerHTML的值必须是对象格式，并且key为__html
    })
  }
  render(){
    return(
        <div onClick={this.handleRoute}>
          <div dangerouslySetInnerHTML = {this.setInnerHTML()}></div> {/**设置dangerouslySetInnerHTML的DOM元素里默认不能有内容，另外注意这里的方法setInnerHTML()是有括号的**/}
          <span>路由</span>
        </div>
    )
  }
}
export default List