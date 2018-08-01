class Clock extends React.Component {
  constructor(props) { // constructor是ES6的class类的构造函数，即使你不声明，也会被自动创建，具体用法参考ES6的class章节
    super(props); // super()是ES6的继承类（子类）的语法。这里的参数props是????
    this.state = {date: new Date()}; //
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

