import drawCircle from './drawCircle'
import drawLine from './drawLine'
import {canvas, context, lineWidth, eraserEnabled} from './handleUserClick'

function listenToUser(){
    document.body.ontouchstart!==undefined ? mobilePhone() : computer()     // 判断是否是触屏设备
}

function computer(){
    let using = false;
    let lastPoint = {x:undefined, y:undefined};
    let newPoint = {}
    canvas.onmousedown = function(aaa){
        let x = aaa.clientX;
        let y = aaa.clientY;
        using = true;
        if(eraserEnabled){
            context.clearRect(x-5,y-5,10,10);
        }else{
            lastPoint = {'x':x, 'y':y};
            drawCircle(context, x,y,1);
        }
    }
    canvas.onmousemove = function(aaa){
        let x = aaa.clientX;
        let y = aaa.clientY;
        if(using){
            if(eraserEnabled){  
                context.clearRect(x-5,y-5,10,10);
            }else{
                newPoint = {'x':x,'y':y};
                drawLine(context, lastPoint['x'],lastPoint['y'],newPoint['x'],newPoint['y'], lineWidth);
                lastPoint = newPoint;
            }
        }
    }
    canvas.onmouseup = function(aaa){
        using = false;
    }
}

function mobilePhone(){
    let using = false;
    let lastPoint = {x:undefined, y:undefined};
    let newPoint = {}

    canvas.ontouchstart = function(aaa){
        let x = aaa.touches[0].clientX;
        let y = aaa.touches[0].clientY;
        using = true;
        if(eraserEnabled){
            context.clearRect(x-5,y-5,10,10);
        }else{
            lastPoint = {'x':x, 'y':y};
        }
    }
    canvas.ontouchmove = function(aaa){
        let x = aaa.touches[0].clientX;
        let y = aaa.touches[0].clientY;
        if(using){
            if(eraserEnabled){  
                context.clearRect(x-5,y-5,10,10);
            }else{
                newPoint = {'x':x,'y':y};
                drawLine(context, lastPoint['x'],lastPoint['y'],newPoint['x'],newPoint['y'], lineWidth);
                lastPoint = newPoint;
            }
        }
    }
    canvas.ontouchend = function(){
        using = false;
    }
}



export default listenToUser