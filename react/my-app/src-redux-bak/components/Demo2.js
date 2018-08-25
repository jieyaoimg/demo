import React from 'react';

class Demo2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "请输入",
      selectValue: "shanghai",
      textareaValue: "请输入文本框内容"
    }
  }
  //这里采取了select和textarea表单元素公用同一个事件方法的写法，通过给每个表单元素设置一个name属性来判断当前是哪个表单元素触发了handleChange方法，然后对其进行setState操作
  handleChange = (e)=>{
    if(e.target.name==="citySelect"){
      this.setState({
        selectValue: e.target.value,
      })
    }else if(e.target.name==="cityContent"){
      this.setState({
        textareaValue: e.target.value
      })
    }
  }
  render() {
    const getArr = this.props.numbers
    return (
      <div>
        <p>
          <select name="citySelect" value={this.state.selectValue} onChange={this.handleChange}>
            <option value="zhejiang">浙江</option>
            <option value="shanghai">上海</option>
          </select>
          {this.state.selectValue}
        </p>
        <p>
          <textarea name="cityContent" value={this.state.textareaValue} onChange={this.handleChange}></textarea>
          {this.state.textareaValue}
        </p>
        <ul>
          {getArr.map((num, index)=>{
            return(<li key={index}>{num*2}</li>)
          })}
        </ul>
      </div> 
    )
  }
}

export default Demo2
