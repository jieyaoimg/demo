import React from "react";
import { Input, Button, List } from "antd";
import store from "../store/index"
import { changeIputValue, studentButtonAddList } from "../store/actions"
import axios from "axios"

class ReduxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.HandleStateChange)
  }
  componentDidMount (){
    axios.get('https://jieyaoimg.github.io/demo/react/my-app/src/api/list.json').then(
      (res)=>{
        const data = res
        console.log(data.data)
      }
    )
  }
  HandleStateChange = () => {
    this.setState(store.getState())
  }
  HandleValue = e => {
    store.dispatch(changeIputValue(e.target.value))
  };
  HandleButton = () => {
    store.dispatch(studentButtonAddList())//我们知道dispatch提交的是action，所以这里studentButtonAddList必须带上(),因为它并不是action而是actions创建函数
  }
  render() {
    return (
      <div>
        <Input
          style={{ margin: "16px 0px" }}
          size="large"
          placeholder={this.state.InputValue}
          value={this.state.InputValue}
          onChange={this.HandleValue}
        />
        <Button type="primary" onClick={this.HandleButton}>提交</Button>
        <p>{this.state.InputValue}</p>
        <List
          header={<div>列表展示</div>}
          bordered
          dataSource={this.state.data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default ReduxForm;
