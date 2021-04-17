var ses=document.getElementById("sesion");
ses.onmouseover = function(){
    if(c1==0){
      ses.style.backgroundColor="#48858C";
      ses.style.color="#FFCC2C";
    }    
    return 0; 
  };
  ses.onmouseout = function(){//no esta el mouse sobre el boton
    if(c1==0){
      ses.style.backgroundColor="#FFCC2C";
      ses.style.color="#fff";
    }    
    return 0; 
  };
