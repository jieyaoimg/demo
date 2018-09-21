import React, { Component } from 'react';
import { connect } from 'react-redux'

class List extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div>
        List
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
export default connect(mapStateToProps, mapDispatchToProps)(List)