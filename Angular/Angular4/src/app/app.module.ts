import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({ //定义模块的装饰器（装饰器是TS里的概念）
  declarations: [ //声明模块里有哪些组件、指令、管道
    AppComponent
  ],
  imports: [ //声明模块依赖的其它模块
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], //声明模块中提供了什么service（注意service的概念）
  bootstrap: [AppComponent]
})
export class AppModule { }
