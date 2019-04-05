/*
 * @Author: yucan
 * @Date: 2018-10-22 20:26:40
 * @Last Modified by: yucan
 * @Last Modified time: 2018-12-03 18:39:04
 */
import React, { Component } from "react";

const NameHOC = (WrapCompnent) => { //高阶组件就是一个普通函数，参数WrapCompnent是一个组件，当然你也可以按需添加一些别的参数
  return class AddName extends Component { //一定要返回一个新组件
    constructor(props) {
      super(props);
      this.state = {
        name: 'tom'
      };
    }
    render() {
      return (
        <div> 
          {/**下面的DOM结构和数据都会应用到所有使用该高阶组件的组件中**/}
          <h3>标题1</h3>
          <WrapCompnent name={this.state.name}></WrapCompnent>
        </div>
      )
    }
  }
}

export default NameHOC;
