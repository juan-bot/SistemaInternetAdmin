$("#sumavd").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("vigd")
  celda.value=+celda.value+1;
});
$("#restavd").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("vigd")
  if(celda.value>0)
  celda.value=+celda.value-1;
});

$("#sumavh").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("vigh")
  celda.value=+celda.value+1;
});
$("#restavh").on("click",function(event){
  event.preventDefault();
  celda=document.getElementById("vigh")
  if(celda.value>0)
  celda.value=+celda.value-1;
});

$("#sumavm").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("vigm")
  celda.value=+celda.value+1;
});
$("#restavm").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("vigm")
  if(celda.value>0)
  celda.value=+celda.value-1;
});

$("#sumavald").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("vald")
  celda.value=+celda.value+1;
});
$("#restavald").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("vald")
  if(celda.value>0)
  celda.value=+celda.value-1;
});

$("#sumavalh").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("valh")
  celda.value=+celda.value+1;
});
$("#restavalh").on("click",function(event){
  event.preventDefault();
  celda=document.getElementById("valh")
  if(celda.value>0)
  celda.value=+celda.value-1;
});

$("#sumavalm").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("valm")
  celda.value=+celda.value+1;
});
$("#restavalm").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("valm")
  if(celda.value>0)
  celda.value=+celda.value-1;
});

$("#sumausers").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("shared")
  celda.value=+celda.value+1;
});
$("#restausers").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("shared")
  if(celda.value>1)
  celda.value=+celda.value-1;
});

$("#sumau").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("users")
  if(celda.value<8)
  celda.value=+celda.value+1;
});
$("#restau").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("users")
  if(celda.value>3)
  celda.value=+celda.value-1;
});
$("#sumat").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("totalf")
  celda.value=+celda.value+1;
});
$("#restat").on("click",function(event){
  event.preventDefault();
   
  celda=document.getElementById("totalf")
  if(celda.value>0)
  celda.value=+celda.value-1;
});