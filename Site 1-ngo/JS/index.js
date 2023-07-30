const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const close = document.querySelector('.close')
menu.addEventListener("click", ()=>{
    nav.classList.remove('hide')
})
close.addEventListener("click", ()=>{
    nav.classList.add('hide')
})