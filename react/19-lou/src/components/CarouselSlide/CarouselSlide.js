import React, { Component } from 'react';
import './CarouselSlide.scss'
import { connect } from 'react-redux'
import { Carousel } from "antd";

class CarouselSlide extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div className='carousel-root'>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
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
export default connect(mapStateToProps, mapDispatchToProps)(CarouselSlide)