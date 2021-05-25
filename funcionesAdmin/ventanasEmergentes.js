let btn = document.getElementById('moda');
let modal =document.getElementById("modal");
let close=document.getElementById("cerrar");

btn.onclick=function(){
    modal.classList.add('modal--show',);
    event.preventDefault();//evita que se recargue la pagina
}
//btn.addEventListener('click',()=>modal.classList.add('modal--show','modal--showcolor'));
modal.addEventListener('click',()=>modal.classList.remove('modal--show'));