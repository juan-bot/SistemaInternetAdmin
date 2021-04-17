//id de botones ocultos
var op1 = document.getElementById("opc1");
var op2 = document.getElementById("opc2");
var op3 = document.getElementById("opc3");
var op4 = document.getElementById("opc4");
var op5 = document.getElementById("opc5");
var op6 = document.getElementById("opc6");
var op7 = document.getElementById("opc7");
var op8 = document.getElementById("opc8");
var op9 = document.getElementById("opc9");
var op10 = document.getElementById("opc10");
var op11 = document.getElementById("opc11");
var op12 = document.getElementById("opc12");
var op13 = document.getElementById("opc13");
var op14 = document.getElementById("opc14");
var op15 = document.getElementById("opc15");
var op16 = document.getElementById("opc16");
var op17 = document.getElementById("opc17");
var op18 = document.getElementById("opc18");
// botones padre
var btn1=document.getElementById("Dashboard");
var btn2=document.getElementById("Planes");
var btn3=document.getElementById("Tpv");
var btn4=document.getElementById("Vendedor");
var btn5=document.getElementById("Reportes");
var btn6=document.getElementById("Fichas");
var btn7=document.getElementById("Servidor");
// imagenes flechas
var arrowU1=document.getElementById("fu1");
var arrowD1=document.getElementById("fd1");

var arrowU2=document.getElementById("fu2");
var arrowD2=document.getElementById("fd2");

var arrowU3=document.getElementById("fu3");
var arrowD3=document.getElementById("fd3");

var arrowU4=document.getElementById("fu4");
var arrowD4=document.getElementById("fd4");

var arrowU5=document.getElementById("fu5");
var arrowD5=document.getElementById("fd5");

var arrowU6=document.getElementById("fu6");
var arrowD6=document.getElementById("fd6");

var arrowU7=document.getElementById("fu7");
var arrowD7=document.getElementById("fd7");
var c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0;//contador de clics para cada boton
function mostrar_ocultar(boton,opc){//funcion para botones padre
  //img flecha de arriba y abajo
  var btnPadre=document.getElementById(boton);
  var ic1 = document.getElementById("fd"+opc);
  var ic2 = document.getElementById("fu"+opc);
  //Oculta(opc);
  switch(opc){
    case '1': // dashboard
      c1++;
      //despliega-oculta botones
      op1.style.display = (op1.style.display == 'none') ? 'flex' : 'none';
      estiloClick(c1,btnPadre,ic1,ic2,1);
    break;
    case '2': // plan
      c2++;
      //despliega-oculta botones
      op2.style.display = (op2.style.display == 'none') ? 'flex' : 'none';
      op3.style.display = (op3.style.display == 'none') ? 'flex' : 'none';
      estiloClick(c2,btnPadre,ic1,ic2,2);
    break;
    case '3':
      c3++;
      //despliega-oculta botones
      op4.style.display = (op4.style.display == 'none') ? 'flex' : 'none';
      op5.style.display = (op5.style.display == 'none') ? 'flex' : 'none';
      estiloClick(c3,btnPadre,ic1,ic2,3);
    break;
    case '4':
      c4++;
      //despliega-oculta botones
      op6.style.display = (op6.style.display == 'none') ? 'flex' : 'none';
      op7.style.display = (op7.style.display == 'none') ? 'flex' : 'none';
      estiloClick(c4,btnPadre,ic1,ic2,4);
    break;
    case '5':
      c5++;
      //despliega-oculta botones
      op8.style.display = (op8.style.display == 'none') ? 'flex' : 'none';
      op9.style.display = (op9.style.display == 'none') ? 'flex' : 'none';
      op10.style.display = (op10.style.display == 'none') ? 'flex' : 'none';
      op11.style.display = (op11.style.display == 'none') ? 'flex' : 'none';
      op12.style.display = (op12.style.display == 'none') ? 'flex' : 'none';
      op13.style.display = (op13.style.display == 'none') ? 'flex' : 'none';
      estiloClick(c5,btnPadre,ic1,ic2,5);
    break;
    case '6':
      c6++;
      //despliega-oculta botones
      op14.style.display = (op14.style.display == 'none') ? 'flex' : 'none';
      op15.style.display = (op15.style.display == 'none') ? 'flex' : 'none';
      op16.style.display = (op16.style.display == 'none') ? 'flex' : 'none';
      op17.style.display = (op17.style.display == 'none') ? 'flex' : 'none';
      estiloClick(c6,btnPadre,ic1,ic2,6);
    break;
    case '7':
      c7++;
      //despliega-oculta botones
      op18.style.display = (op18.style.display == 'none') ? 'flex' : 'none';
      estiloClick(c7,btnPadre,ic1,ic2,7);
    break;
  }
}

function estiloClick(clicks,btn,f1,f2,n){
  if(clicks==1){//cambia el estilo del boton al ser desplegado
    /*btn.style.backgroundColor = "#EFF5F5";*/
    btn.style.color="#0DC88D";
    btn.style.borderColor="#0DC88D";
    /*btn.style.borderColor="#0DC88D";*/
    f1.style.display='none';
    f2.style.display='flex';
    Reestablece(n);
    Oculta(n);
  }
  else if(clicks==2){//reestablece el estilo del boton 
    /*btn.style.backgroundColor = "#FFCC2C";*/
    btn.style.color="#B5B8BC";
    btn.style.borderColor="#B5B8BC";
    f1.style.display='flex';
    f2.style.display='none';
    c1=c2=c3=c4=c5=c6=c7=0;
  } 
}
function Reestablece(n){
  switch(n){
    case 1:
    //botones hijos
      op2.style.display='none';
      op3.style.display='none';
      op4.style.display='none';
      op5.style.display='none';
      op6.style.display='none';
      op7.style.display='none';
      op8.style.display='none';
      op9.style.display='none';
      op10.style.display='none';
      op11.style.display='none';
      op12.style.display='none';
      op13.style.display='none';
      op14.style.display='none';
      op15.style.display='none';
      op16.style.display='none';
      op17.style.display='none';
      op18.style.display='none';
    //botones padre
      btn2.style.borderColor = "#B5B8BC";
      btn3.style.borderColor = "#B5B8BC";
      btn4.style.borderColor = "#B5B8BC";
      btn5.style.borderColor = "#B5B8BC";
      btn6.style.borderColor = "#B5B8BC";
      btn7.style.borderColor = "#B5B8BC";
      btn2.style.color = "#B5B8BC";
      btn3.style.color = "#B5B8BC";
      btn4.style.color = "#B5B8BC";
      btn5.style.color = "#B5B8BC";
      btn6.style.color = "#B5B8BC";
      btn7.style.color = "#B5B8BC";
    //flechas
      arrowD2.style.display='none';
      arrowU2.style.display='none';
      arrowD3.style.display='none';
      arrowU3.style.display='none';
      arrowD4.style.display='none';
      arrowU4.style.display='none';
      arrowD5.style.display='none';
      arrowU5.style.display='none';
      arrowD6.style.display='none';
      arrowU6.style.display='none';
      arrowD7.style.display='none';
      arrowU7.style.display='none';
    break;
    case 2:
      //botones hijos
      op1.style.display='none';
      op4.style.display='none';
      op5.style.display='none';
      op6.style.display='none';
      op7.style.display='none';
      op8.style.display='none';
      op9.style.display='none';
      op10.style.display='none';
      op11.style.display='none';
      op12.style.display='none';
      op13.style.display='none';
      op14.style.display='none';
      op15.style.display='none';
      op16.style.display='none';
      op17.style.display='none';
      op18.style.display='none';
      //botones padre
      btn1.style.borderColor = "#B5B8BC";
      btn3.style.borderColor = "#B5B8BC";
      btn4.style.borderColor = "#B5B8BC";
      btn5.style.borderColor = "#B5B8BC";
      btn6.style.borderColor = "#B5B8BC";
      btn7.style.borderColor = "#B5B8BC";
      btn1.style.color = "#B5B8BC";
      btn3.style.color = "#B5B8BC";
      btn4.style.color = "#B5B8BC";
      btn5.style.color = "#B5B8BC";
      btn6.style.color = "#B5B8BC";
      btn7.style.color = "#B5B8BC";
      //flechas
      arrowD1.style.display='none';
      arrowU1.style.display='none';
      arrowD3.style.display='none';
      arrowU3.style.display='none';
      arrowD4.style.display='none';
      arrowU4.style.display='none';
      arrowD5.style.display='none';
      arrowU5.style.display='none';
      arrowD6.style.display='none';
      arrowU6.style.display='none';
      arrowD7.style.display='none';
      arrowU7.style.display='none';
    break;
    case 3:
      //botones hijos
      op1.style.display='none';
      op2.style.display='none';
      op3.style.display='none';
      op6.style.display='none';
      op7.style.display='none';
      op8.style.display='none';
      op9.style.display='none';
      op10.style.display='none';
      op11.style.display='none';
      op12.style.display='none';
      op13.style.display='none';
      op14.style.display='none';
      op15.style.display='none';
      op16.style.display='none';
      op17.style.display='none';
      op18.style.display='none';
      //botones padre
      btn1.style.borderColor = "#B5B8BC";
      btn2.style.borderColor = "#B5B8BC";
      btn4.style.borderColor = "#B5B8BC";
      btn5.style.borderColor = "#B5B8BC";
      btn6.style.borderColor = "#B5B8BC";
      btn7.style.borderColor = "#B5B8BC";

      btn1.style.color = "#B5B8BC";
      btn2.style.color = "#B5B8BC";
      btn4.style.color = "#B5B8BC";
      btn5.style.color = "#B5B8BC";
      btn6.style.color = "#B5B8BC";
      btn7.style.color = "#B5B8BC";
      //flechas
      arrowD1.style.display='none';
      arrowU1.style.display='none';
      arrowD2.style.display='none';
      arrowU2.style.display='none';
      arrowD4.style.display='none';
      arrowU4.style.display='none';
      arrowD5.style.display='none';
      arrowU5.style.display='none';
      arrowD6.style.display='none';
      arrowU6.style.display='none';
      arrowD7.style.display='none';
      arrowU7.style.display='none';
    break;
    case 4:
      //botones hijos
      op1.style.display='none';
      op2.style.display='none';
      op3.style.display='none';
      op4.style.display='none';
      op5.style.display='none';
      op8.style.display='none';
      op9.style.display='none';
      op10.style.display='none';
      op11.style.display='none';
      op12.style.display='none';
      op13.style.display='none';
      op14.style.display='none';
      op15.style.display='none';
      op16.style.display='none';
      op17.style.display='none';
      op18.style.display='none';
      //botones padre
      btn1.style.borderColor = "#B5B8BC";
      btn2.style.borderColor = "#B5B8BC";
      btn3.style.borderColor = "#B5B8BC";
      btn5.style.borderColor = "#B5B8BC";
      btn6.style.borderColor = "#B5B8BC";
      btn7.style.borderColor = "#B5B8BC";

      btn1.style.color = "#B5B8BC";
      btn2.style.color = "#B5B8BC";
      btn3.style.color = "#B5B8BC";
      btn5.style.color = "#B5B8BC";
      btn6.style.color = "#B5B8BC";
      btn7.style.color = "#B5B8BC";
      //flechas
      arrowD1.style.display='none';
      arrowU1.style.display='none';
      arrowD2.style.display='none';
      arrowU2.style.display='none';
      arrowD3.style.display='none';
      arrowU3.style.display='none';
      arrowD5.style.display='none';
      arrowU5.style.display='none';
      arrowD6.style.display='none';
      arrowU6.style.display='none';
      arrowD7.style.display='none';
      arrowU7.style.display='none';
    break;
    case 5:
      //botones hijos
      op1.style.display='none';
      op2.style.display='none';
      op3.style.display='none';
      op4.style.display='none';
      op5.style.display='none';
      op6.style.display='none';
      op7.style.display='none';
      op14.style.display='none';
      op15.style.display='none';
      op16.style.display='none';
      op17.style.display='none';
      op18.style.display='none';
      //botones padre
      btn1.style.borderColor = "#B5B8BC";
      btn2.style.borderColor = "#B5B8BC";
      btn3.style.borderColor = "#B5B8BC";
      btn4.style.borderColor = "#B5B8BC";
      btn6.style.borderColor = "#B5B8BC";
      btn7.style.borderColor = "#B5B8BC";

      btn1.style.color = "#B5B8BC";
      btn2.style.color = "#B5B8BC";
      btn3.style.color = "#B5B8BC";
      btn4.style.color = "#B5B8BC";
      btn6.style.color = "#B5B8BC";
      btn7.style.color = "#B5B8BC";
      //flechas
      arrowD1.style.display='none';
      arrowU1.style.display='none';
      arrowD2.style.display='none';
      arrowU2.style.display='none';
      arrowD3.style.display='none';
      arrowU3.style.display='none';
      arrowD4.style.display='none';
      arrowU4.style.display='none';
      arrowD6.style.display='none';
      arrowU6.style.display='none';
      arrowD7.style.display='none';
      arrowU7.style.display='none';
    break;
    case 6:
      //botones hijos
      op1.style.display='none';
      op2.style.display='none';
      op3.style.display='none';
      op4.style.display='none';
      op5.style.display='none';
      op6.style.display='none';
      op7.style.display='none';
      op8.style.display='none';
      op9.style.display='none';
      op10.style.display='none';
      op11.style.display='none';
      op12.style.display='none';
      op13.style.display='none';
      op18.style.display='none';
      //botones padre
      btn1.style.borderColor = "#B5B8BC";
      btn2.style.borderColor = "#B5B8BC";
      btn3.style.borderColor = "#B5B8BC";
      btn4.style.borderColor = "#B5B8BC";
      btn5.style.borderColor = "#B5B8BC";
      btn7.style.borderColor = "#B5B8BC";

      btn1.style.color = "#B5B8BC";
      btn2.style.color = "#B5B8BC";
      btn3.style.color = "#B5B8BC";
      btn4.style.color = "#B5B8BC";
      btn5.style.color = "#B5B8BC";
      btn7.style.color = "#B5B8BC";
      //flechas
      arrowD1.style.display='none';
      arrowU1.style.display='none';
      arrowD2.style.display='none';
      arrowU2.style.display='none';
      arrowD3.style.display='none';
      arrowU3.style.display='none';
      arrowD4.style.display='none';
      arrowU4.style.display='none';
      arrowD5.style.display='none';
      arrowU5.style.display='none';
      arrowD7.style.display='none';
      arrowU7.style.display='none';
    break;
    case 7:
    //botones hijos
      op1.style.display='none';
      op2.style.display='none';
      op3.style.display='none';
      op4.style.display='none';
      op5.style.display='none';
      op6.style.display='none';
      op7.style.display='none';
      op8.style.display='none';
      op9.style.display='none';
      op10.style.display='none';
      op11.style.display='none';
      op12.style.display='none';
      op13.style.display='none';
      op14.style.display='none';
      op15.style.display='none';
      op16.style.display='none';
      op17.style.display='none';
    //botones padre
      btn2.style.borderColor = "#B5B8BC";
      btn3.style.borderColor = "#B5B8BC";
      btn4.style.borderColor = "#B5B8BC";
      btn5.style.borderColor = "#B5B8BC";
      btn6.style.borderColor = "#B5B8BC";
      btn1.style.borderColor = "#B5B8BC";
      btn2.style.color = "#B5B8BC";
      btn3.style.color = "#B5B8BC";
      btn4.style.color = "#B5B8BC";
      btn5.style.color = "#B5B8BC";
      btn6.style.color = "#B5B8BC";
      btn1.style.color = "#B5B8BC";
    //flechas
      arrowD2.style.display='none';
      arrowU2.style.display='none';
      arrowD3.style.display='none';
      arrowU3.style.display='none';
      arrowD4.style.display='none';
      arrowU4.style.display='none';
      arrowD5.style.display='none';
      arrowU5.style.display='none';
      arrowD6.style.display='none';
      arrowU6.style.display='none';
      arrowD1.style.display='none';
      arrowU1.style.display='none';
      //c2=c3=c4=c5=c6=c7=0;
    break;
  }
}
function Oculta(n){
  switch(n){
    case 1:
      c2=c3=c4=c5=c6=c7=0;
    break;
    case 2:
      c1=c3=c4=c5=c6=c7=0;
    break;
    case 3:
      c1=c2=c4=c5=c6=c7=0;
    break;
    case 4:
      c1=c2=c3=c5=c6=c7=0;
    break;
    case 5:
      c1=c2=c3=c4=c6=c7=0;
    break;
    case 6:
      c1=c2=c3=c4=c5=c7=0;
    break;
    case 7:
      c1=c2=c3=c4=c5=c6=0;
    break;
  }
}
