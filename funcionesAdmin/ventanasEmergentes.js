let btn = document.getElementById('moda');
let modal =document.getElementById("modal");
let close=document.getElementById("cerrar");
let clic=0;

btn.addEventListener('click',()=>modal.classList.add('modal--show','modal--showcolor'));
modal.addEventListener('click',()=>modal.classList.remove('modal--show'));