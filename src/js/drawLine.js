function drawLine(context, x1, y1, x2, y2, lineWidth){
    context.lineWidth = lineWidth;
    context.beginPath();
    context.moveTo(x1,y1);  //起点
    context.lineTo(x2,y2);  //终点
    context.stroke();
    context.closePath();
}

export default drawLine