document.body.style.backgroundColor="black";



// ------------------------------------------------- hamburger menu
let isiBurger = document.getElementById('isiBurger')
function eventBurgerMenu (){
    isiBurger.classList.toggle('w-0')
    isiBurger.classList.toggle('w-full') 
}
// close
function colseBurger (){
    isiBurger.classList.add('w-0')
    isiBurger.classList.remove('w-full') 
}


// ------------------------------------------------ icon pindah halaman home,chat,notif,profile
let home=document.getElementById('home'),
    chat=document.getElementById('chat'),
    notif=document.getElementById('notif'),
    profile=document.getElementById('profile')

notif.addEventListener('click',function(){
    alert('asw')
})


// -------------------- menu setting status
let tombolMenuSettingStatus=document.getElementById('tombolMenuSettingStatus');
let menuSettingStatus1=document.getElementById('menuSettingStatus1');
let tmsi=document.getElementById('tmsi');


tombolMenuSettingStatus.addEventListener('click',function(){
    menuSettingStatus1.classList.toggle('hidden');
    tmsi.classList.toggle('fa-ellipsis-vertical')
    tmsi.classList.toggle('fa-xmark')
})


function boolmarkT (e){
    e.classList.toggle('text-blue-300')
    e.classList.toggle('text-blue-700')
    e.classList.toggle('shadow-md')
}