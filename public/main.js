document.body.style.backgroundColor="black";

// ------------------------------------------------ icon pindah halaman home,chat,notif,profile
let home=document.getElementById('home'),
    chat=document.getElementById('chat'),
    notif=document.getElementById('notif'),
    profile=document.getElementById('profile')



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

// notif.addEventListener('click',function(){
//     alert('asw')
// })







// -------------------- menu setting status
let tombolMenuSettingStatus=document.getElementById('tombolMenuSettingStatus');
let menuSettingStatus1=document.getElementById('menuSettingStatus1');
let tmsi=document.getElementById('tmsi');


tombolMenuSettingStatus.addEventListener('click',function(){
    menuSettingStatus1.classList.toggle('hidden');
    tmsi.classList.toggle('fa-ellipsis-vertical')
    tmsi.classList.toggle('fa-xmark')
})




























// --------------------------- bookmark
function boolmarkT (e){
    e.classList.toggle('text-blue-300')
    e.classList.toggle('text-blue-700')
    e.classList.toggle('shadow-md')
}


// ------------------------------- like
let like=document.getElementById('like')
let likeNum=document.getElementById('likeNum')
like.addEventListener('click',function(){
    like.classList.toggle('fa-regular')
    like.classList.toggle('fa-solid')
    like.classList.toggle('text-red-300')
    like.classList.toggle('text-red-600')
    likeNum.innerHTML ++
})


// ------------------ komenter
let closeKomentar=document.getElementById('closeKomentar')
let tombolKomener=document.getElementById('tombolKomener')
let kolomKomentar=document.getElementById('kolomKomentar')
let navBawah = document.getElementById('navBawah')
tombolKomener.addEventListener('click',function(){
    kolomKomentar.classList.toggle('hidden')
    kolomKomentar.classList.toggle('fixed')
    navBawah.classList.toggle('fixed')
    navBawah.classList.toggle('hidden')
})
closeKomentar.addEventListener('click',function(){
    kolomKomentar.classList.toggle('hidden')
    kolomKomentar.classList.toggle('fixed')
    navBawah.classList.toggle('fixed')
    navBawah.classList.toggle('hidden')
})












// ---------------------------------------------------------------- home
let tombolChat=document.getElementById('tombolChat');
let tombolHome=document.getElementById('tombolHome');
tombolHome.addEventListener('click',function(){
    home.classList.remove('hidden')
    profile.classList.add('hidden')
    tombolHome.classList.remove('text-slate-400')
    tombolHome.classList.add('text-slate-50')
    tombolChat.classList.add('text-slate-400')
    tombolChat.classList.remove('text-slate-50')
    navAtas.classList.remove('hidden')
    tombolProfile.classList.add('text-slate-400')
    tombolProfile.classList.remove('text-slate-50')
});


// ------------------------------------------------------------------------------------------------- chatting
let navAtas=document.getElementById('navAtas');
tombolChat.addEventListener('click',function(){
    home.classList.add('hidden')
    chat.classList.remove('hidden')
    profile.classList.add('hidden')
    tombolHome.classList.add('text-slate-400')
    tombolHome.classList.remove('text-slate-50')
    tombolChat.classList.remove('text-slate-400')
    tombolChat.classList.add('text-slate-50')
    navAtas.classList.add('hidden')
    tombolProfile.classList.add('text-slate-400')
    tombolProfile.classList.remove('text-slate-50')
});




// ------------------------- burger coment
let burgerComent=document.getElementById('burgerComent')
let isiBurgerComent=document.getElementById('isiBurgerComent')
burgerComent.addEventListener('click',function(){
    burgerComent.classList.toggle('fa-xmark')
    burgerComent.classList.toggle('fa-ellipsis')
    isiBurgerComent.classList.toggle('flex')
    isiBurgerComent.classList.toggle('hidden')
    
})

let likeComent=document.getElementById('likeComent')
let jumlahLikeComent=document.getElementById('jumlahLikeComent')
likeComent.addEventListener('click',function(){
    likeComent.classList.toggle('text-blue-700')
    jumlahLikeComent.innerHTML++
})








// --------------------------------------------------- profile
let tombolProfile=document.getElementById('tombolProfile')
tombolProfile.addEventListener('click',function(){
    profile.classList.remove('hidden')
    home.classList.add('hidden')
    chat.classList.add('hidden')
    navAtas.classList.add('hidden')
    tombolProfile.classList.remove('text-slate-400')
    tombolProfile.classList.add('text-slate-50')
    tombolHome.classList.remove('text-slate-50')
    tombolHome.classList.add('text-slate-400')
    tombolChat.classList.remove('text-slate-50')
    tombolChat.classList.add('text-slate-400')
})