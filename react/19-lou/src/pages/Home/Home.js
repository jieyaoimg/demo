import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Home.scss'
import { handleValue } from './HomeActionReducer'
import {withRouter} from "react-router-dom";
class Home extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  handleRoute = () => {
    console.log(this.props.location)
    this.props.history.push('/ok')
  }
  render(){
    return(
      <div>
        <h3 className='home-root' onClick={this.props.handleValue}>
          <p>3333</p>
          {this.props.value}
        </h3>
        <p onClick={this.handleRoute}>路由</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.HomeActionReducer.value
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleValue(){
      dispatch(handleValue(777))
      window.scrollTo(0,0)
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))