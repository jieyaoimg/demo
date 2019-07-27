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
      <div className="piclink-root">
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

typedef struct tagBITMAPFILEHEADER{
  WORD bfType; //文件类别，bmp格式文件的值是”BM” 也就是0x4D42。
  DWORD bfSize; //图片文件总的大小，包含当前BITMAPFILEHEADER结构的14个字节
  WORD bfReserved1; //保留字，不用考虑
  WORD bfReserved2; //保留字，不用考虑
  DWORD bfOffBits; //从文件头到数据区的偏移字节数，即前三个部分的长度之和
} BITMAPFILEHEADER;
//WORD是微软SDK中的数据类型，占有两个字节（16位），表示范围0~65535.相当于c语言中2个char的范围。
//DWORD是微软SDK中的数据类型，占有四个字节（32位），
//从上面的数据类型我们可知BITMAPFILEHEADER结构体的长度是固定的14个字节
typedef struct tagBITMAPINFOHEADER{
  DWORD biSize；//当前BITMAPINFOHEADER结构的大小，根据不同的操作系统而不同，在Windows中，此字段的值总为28h（h表示16进制），即占40字节
  LONG biWidth；//图像的宽度，单位像素；LONG数据类型占有4个字节
  LONG biHeight；//图像的高度，单位像素；
  WORD biPlanes；//位平面数，必须是1
  WORD biBitCount；//BMP图像的色深，即一个像素用多少位表示，常见有1、4、8、16、24和32，分别对应黑白线稿、16色、256色、16位高彩色、24位真彩色和32位增强型真彩色
  DWORD biCompression；//压缩方式
  DWORD biSizeImage；//BMP图像数据区大小，必须是4的倍数，图像数据大小不是4的倍数时用0填充补足
  LONG biXPelsPerMeter；//目标设备水平分辨率
  LONG biYPelsPerMeter；//目标设备垂直分辨率
  DWORD biClrUsed；//	BMP图像使用的颜色数，0表示使用全部颜色，对于256色位图来说，此值为100h（h表示16进制），即256
  DWORD biClrImportant；//指定本图中重要的颜色数
} BITMAPINFOHEADER；
//BITMAPINFOHEADER结构体的长度是固定的40个字节

//调色板实际上是一个数组， 数组共有biClrUsed个元素。每个元素的类型是RGBQUAD结构，占4个字节，其定义如下：
typedef struct tagRGBQUAD{
  BYTE rgbBlue; //该颜色的蓝色分量
  BYTE rgbGreen; //该颜色的绿色分量
  BYTE rgbRed; //该颜色的红色分量
  BYTE rgbReserved; //保留值
} RGBQUAD;