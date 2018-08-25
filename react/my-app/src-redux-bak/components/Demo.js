import React from 'react';

class Clock extends React.Component {
  constructor(props) { // constructor是ES6的class类的构造函数，即使你不声明，也会被自动创建，具体用法参考ES6的class章节
    super(props); // super()是ES6的继承类（子类）的语法。这里的参数props是????
    this.state = {
      date: new Date(),
      name: 'tom',
      age: '19'
    }; 
    // this.handleA = this.handleA.bind(this)
  }
  timer() {
    setInterval(
      ()=>{
        this.setState({
          date: new Date()
        })
      }, 100000
    )
  }
  componentDidMount () {
    this.timer()
    console.log(this.props.match)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  handleA = (count, e) => {
    console.log(count)
    console.log(e.clientX)
  }
  render() {
    const isLoggedIn = true;
    const ulList = <ul><li><a href="">床前明月光</a></li></ul>
    // let arr = [1,2,3]
    return ( 
      <div>
        <h1 ref='navBox' onClick={this.handleA.bind(this, 233)}>Hello, world!{this.state.age}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>{isLoggedIn ? <div>{ulList}</div> : '登录失败'}</h3>
      </div>
    );
  }
}

export default Clock

