var siteNameInput=document.getElementById('siteName');
var siteUrlInput=document.getElementById('siteUrl');


var siteContainers=[];
if(localStorage.getItem('sites')!=null){
    siteContainers=JSON.parse(localStorage.getItem('sites'))
    displaySite(siteContainers) 
        
}


function addSite()
{
    if(validateSite()==true){
        var site={
            name:siteNameInput.value,
            url:siteUrlInput.value
        }
        siteContainers.push(site);
        localStorage.setItem('sites', JSON.stringify(siteContainers));
        displaySite(siteContainers);
        clearForm();
       
    }
}
function clearForm(){
    siteNameInput.value=""
    siteUrlInput.value=""
}
function displaySite(arr)
{
    var cartoona='';
    for(var i=0; i<siteContainers.length ;i++)
    {
        cartoona+=`<div class="details w-75  bg-body-secondary my-3  py-4 mx-auto d-flex">
        <h3 class="w-25 ms-5">${arr[i].name}</h3>
        <a href="https:/${arr[i].url}" class="btn btn-primary mx-3 px-3 text-center" target="_blank" >Visit</a>
        <button class="btn btn-danger  mx-3 px-3" onclick="deleteSite(${i});">Delete</button>
        </div>`
    }
    document.getElementById('sitebody').innerHTML=cartoona;
}
function deleteSite(siteIndex){
    siteContainers.splice(siteIndex,1);
    localStorage.setItem('sites', JSON.stringify(siteContainers))
    displaySite(siteContainers);
}

function validateSite(){
    var regax=/^([a-zA-Z0-9]+)$/
    if(regax.test(siteNameInput.value)==true || regax.test(siteUrlInput.value)==true ){
        siteNameAlert.classList.replace('d-block','d-none');
        siteurlAlert.classList.replace('d-block','d-none');
        return true
    }
    else{

        siteNameAlert.classList.replace('d-none','d-block');
        siteurlAlert.classList.replace('d-none','d-block');
        return false;
    }
}