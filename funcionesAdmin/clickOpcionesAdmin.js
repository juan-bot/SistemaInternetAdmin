const xhr =new XMLHttpRequest();
const container =document.getElementById("contenido");
let page1=document.getElementById("dashboard");
let page6=document.getElementById("vendedorAdd");
let page2=document.getElementById("planAdd");
let page3=document.getElementById("planList");
let page4=document.getElementById("tpvAdd");
let page5=document.getElementById("tpvList");
let page7=document.getElementById("vendedorList");
let page14=document.getElementById("fichaAdd");
let page15=document.getElementById("fichasCreadas");
let page16=document.getElementById("buscarFichas");
let page17=document.getElementById("fichasActivas");
let page18=document.getElementById("confServidor");
op1.onclick=function(){
    page18.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page2.style.display="none";
    page1.style.display="block";
}
op2.onclick=function(){
    page1.style.display="none";
    page18.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page2.style.display="block";
}
op3.onclick=function(){
    page1.style.display="none";
    page18.style.display="none";
    page2.style.display="none";
    page4.style.display="none";
    page5.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page3.style.display="block";
}
op4.onclick=function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page5.style.display="none";
    page18.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page4.style.display="block";
}
op5.onclick=function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page18.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page5.style.display="block";
}
op6.onclick=function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page18.style.display="none";
    page7.style.display="none";
    page5.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page6.style.display="block";
}
op7.onclick=function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page6.style.display="none";
    page5.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page18.style.display="none";
    page7.style.display="block";
}
op14.onclick=function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page5.style.display="none";
    page14.style.display="block";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page18.style.display="none";
}
op15.onclick=function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page5.style.display="none";
    page14.style.display="none";
    page15.style.display="block";
    page16.style.display="none";
    page17.style.display="none";
    page18.style.display="none";
}
op16.onclick=function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page5.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="block";
    page17.style.display="none";
    page18.style.display="none";
}
op17.onclick=function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page5.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="block";
    page18.style.display="none";
}
op18.onclick=function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page5.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page18.style.display="block";
}
/*conexion();
    xhr.open("get","./configRadius.html");
    xhr.send();
function conexion(){
    xhr.onload =function(){
        if (this.status === 200){
            container.innerHTML =xhr.responseText;
            //console.log(xhr.responseText);
        }else{
            console.warn("ya fue");
        }
    };
}*/