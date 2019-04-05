/*
 * @Author: yucan
 * @Date: 2018-10-22 20:26:40
 * @Last Modified by: yucan
 * @Last Modified time: 2018-12-03 18:06:15
 */
import React, { Component } from "react";
import NameHOC from './NameHOC' //引入高阶组建

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>hello, {this.props.name}</div> //获取高阶组件传入的数据
    )
  }
}

export default NameHOC(Hello); //把该组件Hello作为参数传给高阶组件并导出（因为高阶组件返回了一个新的组件，所以这里其实相当于导出了那个新的组件）
