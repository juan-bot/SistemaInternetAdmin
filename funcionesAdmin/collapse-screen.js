//este codigo era porque no queria cargar el archivo css, pero ya se arreglo
/*function cambioMediaQuery1(mq1) {
  if(mq1.matches) {
    collap1();
  }
}
function cambioMediaQuery2(mq2) {
  if(mq2.matches) {
    collap2();
  }
}
function cambioMediaQuery3(mq3) {
  if(mq3.matches) {
    collap3();
  }
}
function cambioMediaQuery4(mq4) {
  if(mq4.matches) {
    collap4();
  }
}
function cambioMediaQuery5(mq5) {
  if(mq5.matches) {
    collap5();
  }
}
const mq1 = window.matchMedia("screen and (max-width: 1126px)");
const mq2 = window.matchMedia("screen and (max-width: 1125px)");
const mq3 = window.matchMedia("screen and (max-width: 935px)");
const mq4 = window.matchMedia("screen and (max-width: 901px)");
const mq5 = window.matchMedia("screen and (max-width: 900px)");
cambioMediaQuery1(mq1);
cambioMediaQuery2(mq2);
cambioMediaQuery3(mq3);
cambioMediaQuery4(mq4);
cambioMediaQuery5(mq5);
mq1.addListener(cambioMediaQuery1);
mq2.addListener(cambioMediaQuery2);
mq3.addListener(cambioMediaQuery3);
mq4.addListener(cambioMediaQuery4);
mq5.addListener(cambioMediaQuery5);
function collap1(){
  document.getElementById("mySidebar").style="width: 19% !important;";
  document.getElementById("contenido").style="width: 81%; !important";

}
function collap2(){
  document.getElementById("mySidebar").style="width: 27% !important;";
  document.getElementById("contenido").style="width: 73%; !important";
}
function collap3(){
  document.getElementById("mySidebar").style="width: 30% !important;";
  document.getElementById("contenido").style="width: 70%; !important";

}
function collap4(){
  document.getElementById("mySidebar").style="width: 30% !important;";
  document.getElementsByTagName("form").style="padding-left: 15px !important; width: 70% !important;"
  document.getElementById("contenido").style="width: 70%; !important";
  /*document.getElementById("openMenu").style="display:none";
  document.getElementById("closeMenu").style="display:none";
}
function collap5(){
  document.getElementById("mySidebar").style="width: 0px; z-index: 1; left: 0; overflow-x: hidden; transition: 0.5s; ";
  document.getElementsByTagName("form").style="padding-left: 0px ; width: 100%;"
  document.getElementById("contenido").style="width: 100%;";
  /*document.getElementById("openMenu").style="display:block; ";
  document.getElementById("closeMenu").style="display:block; color:#fff;";
}
*/
// botones
function openNav() {
  console.log("abre");
  //document.getElementById("mySidebar").style="width: 300px !important; transition: 0.5s;";
  document.getElementById("mySidebar").classList.add('show');
}
function closeNav() {
  console.log("cierra");
  //document.getElementById("mySidebar").style="width: 0px !important; z-index: 1; left: 0; overflow-x: hidden; transition: 0.5s; ";
  document.getElementById("mySidebar").classList.remove('show');
}
