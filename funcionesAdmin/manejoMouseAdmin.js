//establece el color de estilo de los botones con efecto hover
var handl=document.getElementById("Dashboard");
var plan=document.getElementById("Planes");
var tpv=document.getElementById("Tpv");
var vende=document.getElementById("Vendedor");
var reporte=document.getElementById("Reportes");
var ficha=document.getElementById("Fichas");
var servidor=document.getElementById("Servidor");
//////////// dashboard ///////////
handl.onmouseover = function(){
    over(this,c1,1);   
    return 0; 
};
handl.onmouseout = function(){//no esta el mouse sobre el boton
    out(this,c1,1);  
    return 0; 
  };
////// planes ///////////////
plan.onmouseover = function(){
  over(this,c2,2);   
    return 0; 
};
plan.onmouseout = function(){//no esta el mouse sobre el boton
  out(this,c2,2);   
    return 0; 
  };

////// tpv /////////
tpv.onmouseover = function(){
  over(this,c3,3);
  return 0; 
};
tpv.onmouseout = function(){//no esta el mouse sobre el boton
  out(this,c3,3);  
  return 0; 
};

////// Vendedor //////////
vende.onmouseover = function(){
  over(this,c4,4); 
  return 0; 
};
vende.onmouseout = function(){//no esta el mouse sobre el boton
  out(this,c4,4);  
  return 0; 
};
////// Reportes //////////
reporte.onmouseover = function(){
  over(this,c5,5);
  return 0; 
};
reporte.onmouseout = function(){//no esta el mouse sobre el boton
  out(this,c5,5);
  return 0; 
};
////// Fichas //////////
ficha.onmouseover = function(){
  over(this,c6,6);
  return 0; 
};
ficha.onmouseout = function(){//no esta el mouse sobre el boton
  out(this,c6,6);
  return 0; 
};
////// Servidor //////////
servidor.onmouseover = function(){
  over(this,c7,7);
  return 0; 
};
servidor.onmouseout = function(){//no esta el mouse sobre el boton
  out(this,c7,7);
  return 0; 
};
function over(btn,n,i){
  let ic1 = document.getElementById("fd"+i);
  if(n==0){
    /*btn.style.backgroundColor="#FFCC2C";*/
    btn.style.color="#0DC88D";
    btn.style.borderColor="#0DC88D";
    ic1.style.display = (ic1.style.display == 'none') ? 'flex' : 'none';
  }  
}
function out(btn,n,i){
  let ic1 = document.getElementById("fd"+i);
  if(n==0){
    ic1.style.display = (ic1.style.display == 'none') ? 'flex' : 'none';
    /*btn.style.backgroundColor="#48858C";*/
    btn.style.color="#B5B8BC";
    btn.style.borderColor="#B5B8BC";
  }  
}