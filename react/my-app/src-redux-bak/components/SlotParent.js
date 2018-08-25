import React from 'react'
import SlotChildren from './SlotChildren'

function SlotParent(props) {
  return (
    <SlotChildren
      left = { //我们知道，JSX 的基本语法规则是遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。这里嵌套的p标签又是一段JSX，所以要用{}括起来
        <p>插槽--父组件left内容</p>
      }
      right = {
        <p>插槽--父组件right内容</p>
      }
    >
    </SlotChildren>
  )
}

export default SlotParent