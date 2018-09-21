import React, { Component } from 'react';
import './Home.scss'
import { connect } from 'react-redux'
import { demo } from './HomeActionsReducers'
import Search from '../../components/Search/Search.js'
import { Layout, Row, Col } from "antd";
import logo from '../../assets/images/logo.png'
class Home extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
        <Layout>
          <Col>{logo}</Col>
          <Search></Search>
        </Layout>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)