// 解决手机端乱跳乱滚bug
// document.body.ontouchstart = function(eee){
//     eee.preventDefault();
// }
function autoSetCanvasSize(){
    let canvas = document.getElementById('canvas');
    setCanvasSize();
    window.onresize = ()=>{
        setCanvasSize();
    }
    // 获取当前视口宽高，设置画布尺寸
    function setCanvasSize(){
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    }
}

export default autoSetCanvasSize