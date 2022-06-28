burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
btn=document.getElementsByClassName('btn')

burger.addEventListener('click',()=>{
    btn[0].classList.toggle('b-class')
    btn[1].classList.toggle('b-class')
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class')

})