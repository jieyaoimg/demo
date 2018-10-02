import React, { Component } from 'react';
import './Home.scss'
import { connect } from 'react-redux'
import { Layout, Row, Col } from "antd";
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import CarouselSlide from '../../components/CarouselSlide/CarouselSlide.js'
import PicLink from '../../components/PicLink/PicLink.js'


class Home extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
        <Layout className='common-root'>
          <Layout.Header>
            <Header></Header>
          </Layout.Header>
          <Layout.Content>
            <Row>
              <Col sm={{span:16}}>
                <CarouselSlide></CarouselSlide>
              </Col>
              <Col sm={{span:7, offset:1}}>
                <PicLink></PicLink>
              </Col>
            </Row>
          </Layout.Content>
          <Layout.Footer>
            <Footer></Footer>
          </Layout.Footer>
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