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
function FichaMostrar(n){
    let x=document.getElementById("fiper");
    let y=document.getElementById("finorm");
    if(n==1){ 
        x.style.display="none";
        y.style.display="block";
        
    }else{
        x.style.display="block";
        y.style.display="none";
        
    }
}
function planMostrar(n){
    let x=document.getElementById("etime");
    let y=document.getElementById("dtime");
    let z=document.getElementById("fast");
    z.style.display="block"
    if(n==1){ 
        x.style.display="none";
        y.style.display="block";
        
    }else if(n==2){
        x.style.display="block";
        y.style.display="block";
        
    }
    else if(n==3 ){
        x.style.display="none";
        y.style.display="none";
        
    }  
    else if(n==4){
        x.style.display="block";
        y.style.display="none";
    }else if(n==5){
        x.style.display="none";
        y.style.display="none";
        z.style.display="none"
    }
}
function printMovil(op){
    let tabla=document.getElementById("impresion");
    if(op==2)
        tabla.style.display="none";
    else if(op==1)
        tabla.style.display="block";   
}
