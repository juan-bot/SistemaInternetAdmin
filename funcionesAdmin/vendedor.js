function SaldoMostrar(n){
    let x=document.getElementById("pinicial");
    let y=document.getElementById("iinicial");
    if(n==1){ 
        x.style.display="none";
        y.style.display="none";
    }else if(n==2){
        x.style.display="block";
        y.style.display="block";
    }  
}
function planMostrar(n){
    let x=document.getElementById("vigen");
    let y=document.getElementById("fast");
    let z=document.getElementById("valid");
    if(n==1){ 
        x.style.display="block";
        y.style.display="none";
        z.style.display="none";
    }else if(n==2){
        x.style.display="none";
        y.style.display="none";
        z.style.display="block";
    }
    else if(n==3){
        x.style.display="none";
        y.style.display="none";
        z.style.display="none";
    }  
    else if(n==4){
        x.style.display="block";
        y.style.display="block";
        z.style.display="none";
    }    
}
function printMovil(op){
    let tabla=document.getElementById("impresion");
    if(op==2)
        tabla.style.display="none";
    else if(op==1)
        tabla.style.display="block";   
}
