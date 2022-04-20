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