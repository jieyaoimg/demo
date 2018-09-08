import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Home.scss'

class Home extends Component {
  render(){
    return(
      <h3 className='home-root'><p>3333</p>{this.props.value}</h3>
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

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)