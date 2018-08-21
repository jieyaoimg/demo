// import React from 'react';

// class RefsDemo extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//     this.list = React.createRef()//(1)在构造函数中通过React.createRef()创建一个Refs，并赋值给一个实例属性this.list。
//   }
//   handleChange = (e)=>{
//     console.log(this.list.current.getBoundingClientRect().right)// （3）通过this.list.current获取指定DOM元素，然后就可以对其进行各种操作了
//   }
//   render() {
//     return (
//       <div>
//         <p ref={this.list} onClick={this.handleChange}>我是P标签内容</p>{/**(2)把this.list关联到react元素的ref属性上**/}
//       </div> 
//     )
//   }
// }

// export default RefsDemo


// import React from 'react';

// class RefsDemo extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }
//   handleChange = (e)=>{
//     console.log(this.tit.getBoundingClientRect().right)// （2）通过实例的属性this.tit获取对应DOM元素，然后就可以对其进行各种操作了
//   }
//   render() {
//     return (
//       <div>
//         <p ref={(ele)=>{this.tit = ele}} onClick={this.handleChange}>我是P标签内容</p>{/**(1)回调函数接收当前DOM元素作为参数，并把它赋值到react的实例属性上**/}
//       </div> 
//     )
//   }
// }

// export default RefsDemo


// import React from 'react';

// class RefsDemo extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }
//   getRef = (ele)=>{ //ref调用的函数体放在了这里，注意这里使用了ES的属性初始化器语法
//     this.tit = ele
//   }
//   handleChange = (e)=>{
//     console.log(this.tit.getBoundingClientRect().right)
//   }
//   render() {
//     return (
//       <div>
//         <p ref={this.getRef} onClick={this.handleChange}>我是P标签内容</p>
//       </div> 
//     )
//   }
// }

// export default RefsDemo


import React from 'react';

class RefsDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.inputText = React.createRef()
    this.inputCheck = React.createRef()
  }
  handleSubmit = (e)=>{
    console.log(this.inputText.current.value)
    e.preventDefault()//阻止默认事件：提交表单跳转新页面
  }
  handleChange = (e)=>{//你可以在事件中对用户输入的数据进行一些验证或是其它别的你想做的操作
    console.log(this.inputText.current.value)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>{/*handleSubmit事件也不是必须的*/}
        <input type='text' defaultValue='888' onChange={this.handleChange} ref={this.inputText}/> {/*表单控件的状态值存储在自身DOM属性上。这里的onChange和ref都不是必须的，甚至defaultValue也不是必须的*/}
        <input type='checkbox' defaultChecked ref={this.inputCheck}/>
        <select defaultValue='shanghai'>
          <option value='beijing'>北京</option>
          <option value='shanghai'>上海</option>
        </select>
        <button>提交</button>
      </form> 
    )
  }
}

export default RefsDemo
