
var s = "";
var c = "";
s = Math.random()*5;
s = Math.floor(s+1);
c = Math.random()*5;
c = Math.floor(c+1);
// if (s === 0 || c === 0){
//
//   s = 1;
//   c  = 1;
//
// }
document.querySelector(".img1").setAttribute("src","images/"+s+".svg");
document.querySelector(".img2").setAttribute("src","images/"+c+".svg");
