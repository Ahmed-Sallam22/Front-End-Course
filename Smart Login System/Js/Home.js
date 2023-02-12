var email= document.querySelector('#email');
var password= document.querySelector('#password');
var submitsignUP=document.querySelector("#submmit");
var signupalert=document.querySelector("#inputAlert");
var userName= document.querySelector('#userName');


var cartonna=`<h1>Welcome ${JSON.parse(localStorage.getItem('name'))}</h1>`
document.getElementById("nameLogin").innerHTML=cartonna

