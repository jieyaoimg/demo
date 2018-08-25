import React from 'react'

function SlotChildren(props) {
  return (
    <div>
      <p>插槽--子组件自身内容</p>
      {props.left}
      {props.right}
    </div>
  )
}

export default SlotChildren