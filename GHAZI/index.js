//inter mediat ex1
function dis(){
  let x=document.querySelector('.d3').style.display = "none";

}
function dis2(){
  let x1=document.querySelector('.d4').style.display = "none";
}
function dis3(){
  let x2=document.querySelector('.d5').style.display = "none";
}
//ex2
function bto(){
  let c=Math.random()*200;
  b=Math.random()*155;
  e=Math.random()*177;


  document.body.style.backgroundColor='rgb('+c+','+b+','+e+')';

}



// ex advance
function hov(){
document.getElementById("po").innerHTML="you are in the circle";
}
function out(){
  document.getElementById("po").innerHTML="you are outside of the circle";
  }
  function clickt(){
    document.getElementById("circle").style.backgroundColor= "gray";
    }
    //chalange
console.log((Math.random()*255).toString(16));





function replay(){
var a = Math.random()*100;
var b = Math.random()*100;
var c = Math.random()*100;
const y = document.getElementById('btn').style.backgroundColor = 'rgb('+a+','+b+','+c+')';

}

