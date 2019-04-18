/*
 * @Author: yucan
 * @Date: 2018-10-22 20:26:40
 * @Last Modified by: yucan
 * @Last Modified time: 2018-12-03 20:02:53
 */
import React, { Component } from "react"
import "./PicLink.scss"
import banner01 from "../../assets/images/banner01.png"
import banner02 from "../../assets/images/banner02.png"
import banner03 from "../../assets/images/banner03.png"
import banner04 from "../../assets/images/banner04.png"
import banner05 from "../../assets/images/banner05.png"

class PicLink extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="PicLink-root">
        <ul>
          <li>
            <a href="/" target="_blank">
              <img alt="banner01" src={banner01} />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <img alt="banner02" src={banner02} />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <img alt="banner03" src={banner03} />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <img alt="banner04" src={banner04} />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <img alt="banner05" src={banner05} />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default PicLink
