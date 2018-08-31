import { Component } from '@angular/core';

@Component({ //定义组件的装饰器（装饰器是TS里的概念）
  selector: 'app-root', //组件通过<app-root>在HTML中引用
  templateUrl: './app.component.html', //组件的HTML结构
  styleUrls: ['./app.component.css'] //组件的CSS样式
})
export class AppComponent { //定义组件的控制器，控制器是一个被@Component装饰的TS类，包含和模版相关的属性和方法
  title = 'app works!'; //数据，模版通过{{title}}显示内容
}
