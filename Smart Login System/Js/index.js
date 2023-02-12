// sign up page
var submitsignUP=document.querySelector("#submmit");
var userName= document.querySelector('#userName');
var email= document.querySelector('#email');
var password= document.querySelector('#password');
var signupalert=document.querySelector("#inputAlert");


var usersDetails=[];

if(localStorage.getItem('userData')!=null){
    usersDetails=JSON.parse( localStorage.getItem('userData'));
}
submitsignUP.addEventListener('click',function adduser(){
    event.preventDefault();
    if(usersDetails.some((v)=>{return v.email==email.value})){
        inputAlert.classList.replace('d-block','d-none');
        inputAlertemailExists.classList.replace('d-none','d-block')
        inputAlertSuccess.classList.replace('d-block','d-none');
    }
    else if(validataUser()==true){
        var user={
            name:userName.value,
            email:email.value,
            password:password.value
        }
        usersDetails.push(user)
        localStorage.setItem('userData',JSON.stringify(usersDetails))
        clearForm()
    }
})


function clearForm(){
    userName.value=""
    email.value=""
    password.value=""
}

function validataUser(){
    var regax=/^([a-zA-Z0-9@.!#$%^&* ]+)$/
    if(regax.test(userName.value)==true && regax.test(email.value)==true && regax.test(password.value)==true ){
        inputAlert.classList.replace('d-block','d-none');
        inputAlertSuccess.classList.replace('d-none','d-block');
        window.location.href="Home.html"
        inputAlertemailExists.classList.replace('d-block','d-none');
        return true
    }
    else{
        inputAlert.classList.replace('d-none','d-block');
        inputAlertSuccess.classList.replace('d-block','d-none');
        inputAlertemailExists.classList.replace('d-block','d-none');


        return false;
    }
}







// sign in page











