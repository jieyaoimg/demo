import React from "react";
import { Input, Button, List } from "antd";
import { actionInputValue, actionHandleButton } from "../store/actions"
import { connect } from 'react-redux'
import {TweenMax, TimelineLite} from "gsap/TweenMax";

class ReactReduxForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.btn = React.createRef()
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log(this.btn.current)
    const Timeline = new TimelineLite()
    Timeline.to(
      this.btn.current,
      2,
      {
        x: "+=300px"
      }
    ).to(
      this.btn.current,
      2,
      {
        y: "+=300px"
      }
    )
  }
  render() {
    console.log('render')
    return (
      <div>
        <Input
          style={{ margin: "16px 0px" }}
          size="large"
          placeholder={this.props.InputValue}
          value={this.props.InputValue}
          onChange={this.props.HandleValue}
        />
        <div ref = {this.btn}><Button type="primary" onClick={this.props.HandleButton}>提交</Button></div>
        <p>{this.props.InputValue}</p>
        <List
          header={<div>列表展示</div>}
          bordered
          dataSource={this.props.data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {//参数是state
  return {
    InputValue: state.InputValue,  //把store中的state.InputValue映射到当前组件的this.props.InputValue上
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {//参数是state
  return {
    HandleValue(e){ // 把当前组件的HandleValue映射到当前组件的props上
      dispatch(actionInputValue(e.target.value))
    },
    HandleButton(){
      dispatch(actionHandleButton())
    }
  }
}
//我们发现connect让组件ReduxForm变成了一个无状态UI组件，所以我们可以把ReduxForm组件写成函数类型。函数类型的组件没有生命周期，所以渲染效率更高
//这里导出的是 connect方法，其实它最后返回的是一个整合了mapStateToProps, mapDispatchToProps和ReduxForm之后的有状态组件（容器组件）
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxForm);
