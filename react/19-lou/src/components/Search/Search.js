
import React, { Component } from 'react';
import './Search.scss';
import { connect } from 'react-redux';
import { SearchActionsReducers } from './SearchActionsReducers';
import { Input } from "antd";

class Search extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  // ab = 1
  render(){
    const Search = Input.Search;
    return(
      <Search 
        placeholder="input search text"
        onSearch={(value) => {console.log(value)}}
        enterButton
      />
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
export default connect(mapStateToProps, mapDispatchToProps)(Search)