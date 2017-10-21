/**
 * Created by jieyao on 2016/10/5.
 */
/************完整运动框架开始**************/
    function getStyle(obj, attr) {  //获取非行间样式函数
        if(obj.currentStyle)
        {
            return obj.currentStyle[attr];
        }
        else
        {
            return getComputedStyle(obj,false)[attr];
        }
    }
    function startMove(obj,json,fn) {//此处为运动函数 ，相关参数 obj：需要发生运动的对象 ，json：为一组运动的属性和属性值，写法：{width:300,height:300,opacity:30},另外，opacity的属性值写成一个乘以100后的数字，
        // 比如目标透明度为0.3，那么属性值此时为30，这样做是为了避免对小数进行运算，因为计算机中的小数只是模拟出来的，进行数学运算很容易产生错误),fn：链式运动函数,可选
        clearInterval(obj.timer);
        obj.timer=setInterval(function () {
            var bStop=true;
            for(var attr in json){//遍历所有需要运动的属性
                var myCur=0;
                if(attr=='opacity'){
                    var myCur=parseInt(parseFloat( getStyle(obj,attr))*100);
                }else{
                    var myCur=parseInt( getStyle(obj,attr));
                }
                var mySpeed=(json[attr]-myCur)/8;
                mySpeed=mySpeed>0?Math.ceil(mySpeed):Math.floor(mySpeed); //取整，避免出现小数不能到达指定目标
                if(myCur!=json[attr]){
                    bStop=false;
                }
                if(attr=='opacity'){
                    obj.style.filter='alpha(opacity:'+(myCur+mySpeed)+')';
                    obj.style.opacity=(myCur+mySpeed)/100;
                }else{
                    obj.style[attr]=myCur+mySpeed+'px';
                }
            }
            if(bStop){
                clearInterval(obj.timer);
                if(fn){ //链式运动参数
                    fn();
                }
            }
        },20);
    }
/************完整运动框架结束**************/