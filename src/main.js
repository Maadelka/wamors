document.body.style.backgroundColor="gray";



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