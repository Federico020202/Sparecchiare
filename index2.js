
var s = "";
s = Math.random()*5;
s = Math.floor(s+1);
// if (s === 0 || c === 0){
//
//   s = 1;
//   c  = 1;
//
// }
document.querySelector(".img1").setAttribute("src","images/"+s+".svg");
