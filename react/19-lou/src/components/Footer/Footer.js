import React, { Component } from 'react';
import './Footer.scss'
import { connect } from 'react-redux'

class Footer extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div className='footer-root'>
        <ul>
          <li><a href='/' target='_blank'>关于简书</a></li>
          <li><a href='/' target='_blank'>加入我们</a></li>
          <li><a href='/' target='_blank'>合作伙伴</a></li>
          <li><a href='/' target='_blank'>帮助中心</a></li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)