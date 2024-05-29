
const ham = document.getElementById("h3du");
const ham1 = document.getElementById("h3dv");
const ham2 = document.getElementById("h3dw");
const butt = document.getElementById("button");
const min = 0 ;
const max = 100 ;
butt.onclick = function(){
    ham.textContent = Math.floor(Math.random()*100 + min);
    ham2.textContent = Math.floor(Math.random()*max + min);
    ham1.textContent = Math.floor(Math.random()*100 + min);
}