

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let lineWidth = 5;
let eraserEnabled = false;

let pen = document.getElementById('pen')
let eraser = document.getElementById('eraser')
let clear = document.getElementById('clear')
let download = document.getElementById('download')
let red = document.getElementById('red')
let green = document.getElementById('green')
let blue = document.getElementById('blue')
let thin = document.getElementById('thin')
let thick = document.getElementById('thick')

pen.onclick = function(){
    pen.classList.add('active');
    eraser.classList.remove('active');
    return eraserEnabled = false;
}
eraser.onclick = function(){
    eraser.classList.add('active');
    pen.classList.remove('active');
    return eraserEnabled = true;
}
clear.onclick = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}
download.onclick = function(){
    let url = canvas.toDataURL('image/png');
    let a = document.createElement('a');
    a.href = url;
    a.download = '我的创作';
    a.target = '_blank';
    a.click();
}
red.onclick = function(){
    context.fillStyle = 'red';
    context.strokeStyle = 'red';
    red.classList.add('active');
    green.classList.remove('active');
    blue.classList.remove('active');
}
green.onclick = function(){
    context.fillStyle = 'green';
    context.strokeStyle = 'green';
    red.classList.remove('active');
    green.classList.add('active');
    blue.classList.remove('active');
}
blue.onclick = function(){
    context.fillStyle = 'blue';
    context.strokeStyle = 'blue';
    red.classList.remove('active');
    green.classList.remove('active');
    blue.classList.add('active');
}
thin.onclick = function(){
    console.log('线宽，窄的')
    return lineWidth = 5;
}
thick.onclick = function(){
    console.log('线宽，宽度')
    return lineWidth = 10;
}

export {canvas, context, lineWidth, eraserEnabled}

// eraser.onclick = function(){
//     eraserEnabled = true;
//     action.className = 'action x';
// }
// brush.onclick = function(){
//     eraserEnabled = false;
//     action.className = 'action';
// }