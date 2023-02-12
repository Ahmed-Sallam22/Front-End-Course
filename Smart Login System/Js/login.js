var email= document.querySelector('#email');
var password= document.querySelector('#password');
var submitsignUP=document.querySelector("#submmit");
var signupalert=document.querySelector("#inputAlert");
var userName= document.querySelector('#userName');




var usersDetails=[];
if(localStorage.getItem('userData')!=null){
    usersDetails=JSON.parse( localStorage.getItem('userData'));
}
submitsignUP.addEventListener('click',
function adduser(){
    if(usersDetails.some((v)=>{return v.email==email.value &&v.password==password.value})){


        var welc=usersDetails.filter((v)=>{return v.email==email.value &&v.password==password.value})[0]
        localStorage.setItem('name',JSON.stringify(welc.name))
        localStorage.setItem('email',JSON.stringify(welc.email))

        window.location.href="Home.html"
        inputAlertSuccess.classList.replace('d-none','d-block');
        inputAlertPASS.classList.replace('d-block','d-none');
        inputAlert.classList.replace('d-block','d-none');
    }
    else if(email.value==""&&password.value==""){
        inputAlert.classList.replace('d-none','d-block');
        inputAlertPASS.classList.replace('d-block','d-none');
        inputAlertSuccess.classList.replace('d-block','d-none');
    }
    else{
        inputAlertPASS.classList.replace('d-none','d-block');
        inputAlert.classList.replace('d-block','d-none');
        inputAlertSuccess.classList.replace('d-block','d-none');
    }
})

