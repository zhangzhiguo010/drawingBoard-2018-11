(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){e.exports=n(3)},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=function(){var e=document.getElementById("canvas");function t(){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}t(),window.onresize=function(){t()}};var o=function(e,t,n,c){e.beginPath(),e.arc(t,n,c,0,2*Math.PI),e.fill(),e.closePath()};var i=function(e,t,n,c,o,i){e.lineWidth=i,e.beginPath(),e.moveTo(t,n),e.lineTo(c,o),e.stroke(),e.closePath()},l=document.getElementById("canvas"),a=l.getContext("2d"),s=5,u=!1,d=document.getElementById("pen"),r=document.getElementById("eraser"),m=document.getElementById("clear"),v=document.getElementById("download"),f=document.getElementById("red"),y=document.getElementById("green"),h=document.getElementById("blue"),g=document.getElementById("thin"),k=document.getElementById("thick");d.onclick=function(){return d.classList.add("active"),r.classList.remove("active"),u=!1},r.onclick=function(){return r.classList.add("active"),d.classList.remove("active"),u=!0},m.onclick=function(){a.clearRect(0,0,l.width,l.height)},v.onclick=function(){var e=l.toDataURL("image/png"),t=document.createElement("a");t.href=e,t.download="\u6211\u7684\u521b\u4f5c",t.target="_blank",t.click()},f.onclick=function(){a.fillStyle="red",a.strokeStyle="red",f.classList.add("active"),y.classList.remove("active"),h.classList.remove("active")},y.onclick=function(){a.fillStyle="green",a.strokeStyle="green",f.classList.remove("active"),y.classList.add("active"),h.classList.remove("active")},h.onclick=function(){a.fillStyle="blue",a.strokeStyle="blue",f.classList.remove("active"),y.classList.remove("active"),h.classList.add("active")},g.onclick=function(){return console.log("\u7ebf\u5bbd\uff0c\u7a84\u7684"),s=5},k.onclick=function(){return console.log("\u7ebf\u5bbd\uff0c\u5bbd\u5ea6"),s=10};var E=function(){void 0!==document.body.ontouchstart?function(){var e=!1,t={x:void 0,y:void 0},n={};l.ontouchstart=function(n){var c=n.touches[0].clientX,o=n.touches[0].clientY;e=!0,u?a.clearRect(c-5,o-5,10,10):t={x:c,y:o}},l.ontouchmove=function(c){var o=c.touches[0].clientX,l=c.touches[0].clientY;e&&(u?a.clearRect(o-5,l-5,10,10):(n={x:o,y:l},i(a,t.x,t.y,n.x,n.y,s),t=n))},l.ontouchend=function(){e=!1}}():function(){var e=!1,t={x:void 0,y:void 0},n={};l.onmousedown=function(n){var c=n.clientX,i=n.clientY;e=!0,u?a.clearRect(c-5,i-5,10,10):(t={x:c,y:i},o(a,c,i,1))},l.onmousemove=function(c){var o=c.clientX,l=c.clientY;e&&(u?a.clearRect(o-5,l-5,10,10):(n={x:o,y:l},i(a,t.x,t.y,n.x,n.y,s),t=n))},l.onmouseup=function(t){e=!1}}()};n(1);c(),E()}],[[0,1]]]);
//# sourceMappingURL=main.e48c09b4.chunk.js.map