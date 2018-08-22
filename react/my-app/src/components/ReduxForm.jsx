import React from "react";
import { Input, Button, List } from "antd";
import store from "../store/index"
import { addList } from "../store/actions"

class ReduxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.HandleStateChange)
  }
  HandleStateChange = () => {
    this.setState(store.getState())
  }
  HandleValue = e => {
    store.dispatch(changeIputValue(e.target.value))
  };
  HandleButton = () => {
    store.dispatch()
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
