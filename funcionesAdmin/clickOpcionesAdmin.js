const xhr =new XMLHttpRequest();
const container =document.getElementById("contenido");
let page1=document.getElementById("dashboard");
let page6=document.getElementById("vendedorAdd");
let page2=document.getElementById("planAdd");
let page3=document.getElementById("planList");
let page4=document.getElementById("tpvAdd");
let page5=document.getElementById("tpvList");
let page7=document.getElementById("vendedorList");
let page8=document.getElementById("reporte-deuda");
let page9=document.getElementById("reporte-vendedor");
let page10=document.getElementById("reporte-tpv");
let page11=document.getElementById("reporte-ventas-planes");
let page12=document.getElementById("reporte-retiros");
let page13=document.getElementById("reporte-abonos");
let page14=document.getElementById("fichaAdd");
let page15=document.getElementById("fichasCreadas");
let page16=document.getElementById("buscarFichas");
let page17=document.getElementById("fichasActivas");
let page18=document.getElementById("confServidor");
let page19=document.getElementById("dataEmpresa");
misplanes=[];//limpio la selecion
window.scrollTo(0,0);
function dashbo(){ //dashboard
   clearInterval(misfichas);
    window.scrollTo(0,0);
    //console.log(misfichas);
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
    page19.style.display="none";
    misfichas=setInterval(updateF,1000);

}
op2.onclick=function(){//agrega planes
    window.scrollTo(0,0);
    clearInterval(misfichas);
    let h1vend=document.getElementById("plaadd");
    h1vend.innerHTML="Agregar plan";
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
    page19.style.display="none";

    listaD=document.getElementById("NuevoPlan");
    listaD.removeChild(document.getElementById("edplan"));
    botonG=document.createElement("button");
    botonG.innerHTML="Crear plan";
    botonG.id="edplan";
    botonG.type="submit";
    listaD.appendChild(botonG);
    $("#nombre").val("")
    $("#Prefijo").val("");
    $("#vald").val("0");
    $("#valh").val("0");
    $("#valm").val("0");

    $("#vigd").val("0");
    $("#vigh").val("0");
    $("#vigm").val("0");
    $("#Subida").val("0");
    $("#Descarga").val("0");
    $("#Transferencia").val("0");
    $("#shared").val("1");
    $("#Direcciones").val("");
}
op3.onclick=function(){//lista los planes
    clearInterval(misfichas);
    window.scrollTo(0,0);
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
    page19.style.display="none";
    lista=document.getElementById("ListaPlanes");
    lista.innerHTML=" ";
    $.ajax({
        type: "POST",
        url: 'back/LeerPlanes.php',

        beforeSend: function() {
        //    alert("Enviando...");
             // setting a timeout aqui puedo configurar cuando esta cargando
             //$(placeholder).addClass('loading');
             //i++;
           },
            success: function(data)
            {

                let respuesta = JSON.parse(data)
                if(respuesta["listo"]){
                   let perfiles=respuesta["perfiles"];
                   let limitaciones=respuesta["Limitacion"];
                   ///let perflimitacion=respuesta["perfilLimitacion"];
                  //rrecore cada elemento del registro y le da formato para ser mostrado en el html
                   perfiles.forEach(element => {
                        var limite=limitaciones.find( limites => limites.name ===element.name  );
                        principal=document.createElement("tr");
                        principal.id=element[".id"];

                        interno=document.createElement("td");
                        interno.innerHTML=element.name.split("----")[0];
                        interno.style=" text-align: center;";
                        principal.appendChild(interno);

                        interno=document.createElement("td");
                        if(limite)
                        if(limite["uptime-limit"]=="0s")
                        interno.innerHTML="Sin asignar"
                        else
                        interno.innerHTML=limite["uptime-limit"];
                        interno.style=" text-align: center;";
                        principal.appendChild(interno);

                        interno=document.createElement("td");
                        if(element.validity=="0s")
                            interno.innerHTML="Sin asignar";
                        else
                            interno.innerHTML=element.validity;
                        interno.style=" ";
                        principal.appendChild(interno);

                        interno=document.createElement("td");
                        if(limite){
                          if(limite["transfer-limit"]=='0')
                           interno.innerHTML="Ilimitado";
                          else
                          interno.innerHTML=limite["transfer-limit"];
                        }
                        interno.style=" text-align: center;";
                        principal.appendChild(interno);

                        interno=document.createElement("td");
                         nombre=element.name.split("----")[1];
                        if(nombre=='Vigenciaa')
                            interno.innerHTML="Consumo con vigencia";
                        else
                        if(nombre=="Corrido")
                            interno.innerHTML="Tiempo corrido";
                        else
                        if(nombre=="Pausado")
                            interno.innerHTML="Tiempo pausado";
                        else
                        if(nombre=="Consumo")
                            interno.innerHTML="Por consumo";
                        else
                            interno.innerHTML="Ilimitado";


                        interno.style=" text-align: center;";
                        principal.appendChild(interno);

                        interno=document.createElement("td");
                        interno.innerHTML=element["override-shared-users"];
                        interno.style=" text-align: center;";
                        principal.appendChild(interno);
                        interno=document.createElement("td");


                        boton1=document.createElement("button");
                        boton1.className="edit";
                        boton1.innerHTML="Editar";



                                  //Editar

                        boton1.onclick=function(event){

                            event.preventDefault();

                          console.table(element);
                          console.table(limite);

                            page3.style.display="none";
                            page2.style.display="block";
                            let h1vend=document.getElementById("plaadd");
                            h1vend.innerHTML="Modificar plan";
                            let x=document.getElementById("etime");
                            let y=document.getElementById("dtime");

                            let Contiene=document.getElementById('checksplan');
                            Contiene.innerHTML="";
                            let legen=document.createElement("LEGEND");
                            legen.innerHTML="Tipo de plan";
                            Contiene.appendChild(legen);
                            //creo el boton
                            let lab=document.createElement("label")
                            legen=document.createElement("input");
                            legen.type="radio";
                            legen.name="Plan";
                            legen.setAttribute('value',"Corrido");
                            legen.setAttribute('onclick',"planMostrar(1)");

                            if(nombre=='Corrido'){
                                x.style.display="none";
                                y.style.display="block";

                                legen.setAttribute('checked','checked');
                            }
                            lab.appendChild(legen);
                            lab.insertAdjacentText('beforeend',"Tiempo corrido");
                            Contiene.appendChild(lab);
                            lab=document.createElement("label")
                            legen=document.createElement("input");
                            legen.type="radio";
                            legen.name="Plan";
                            legen.setAttribute('value',"Pausado");
                            legen.setAttribute('onclick',"planMostrar(2)");
                            if(nombre=='Pausado'){
                                x.style.display="block";
                                y.style.display="block";

                                legen.setAttribute('checked','checked');
                            }


                            lab.appendChild(legen);
                            lab.insertAdjacentText('beforeend',"Tiempo pausado");
                            Contiene.appendChild(lab);
                            lab=document.createElement("label")
                            legen=document.createElement("input");
                            legen.type="radio";
                            legen.name="Plan";
                            legen.setAttribute('value',"Consumo");
                            legen.setAttribute('onclick',"planMostrar(3)");
                            if(nombre=='Consumo'){
                                x.style.display="none";
                                y.style.display="none";

                                legen.setAttribute('checked','checked');
                            }
                            lab.appendChild(legen);
                            lab.insertAdjacentText('beforeend',"Por consumo");
                            Contiene.appendChild(lab);
                            lab=document.createElement("label")
                            legen=document.createElement("input");
                            legen.type="radio";
                            legen.name="Plan";
                            legen.setAttribute('value',"Vigenciaa");
                            legen.setAttribute('onclick',"planMostrar(4)");
                            if(nombre=='Vigenciaa'){
                                x.style.display="block";
                                y.style.display="none";

                                legen.setAttribute('checked','checked');
                            }
                            lab.appendChild(legen);
                            lab.insertAdjacentText('beforeend',"Consumo con vigencia");
                            Contiene.appendChild(lab);
                            lab=document.createElement("label")
                            legen=document.createElement("input");
                            legen.type="radio";
                            legen.name="Plan";
                            legen.setAttribute('value',"Ilimitado");
                            legen.setAttribute('onclick',"planMostrar(5)");
                            if(nombre=='Ilimitado'){
                                x.style.display="none";
                                y.style.display="none";

                                legen.setAttribute('checked','checked');
                            }
                            lab.appendChild(legen);
                            lab.insertAdjacentText('beforeend',"Consumo con vigencia");
                            Contiene.appendChild(lab);
                            $("#nombre").val(element.name.split("----")[0]);

                            //tiempo de vida
                            //let str =element.validity;
                            //let dia="0";
                            //let hora="0";
                            //let minuto="0";
                            //var ia=-1,ian=0;
                            //if(str.includes("d")){
                                //ian=str.indexOf("d");
                               // dia=str.substring(ia+1,ian)
                             //   ia=ian;

                           // }
                            //if(str.includes("h")){
                                //ian=str.indexOf("h");
                               // hora=str.substring(ia+1,ian)
                              //  ia=ian;

                            //}
                            //if(str.includes("m")){
                                //ian=str.indexOf("m");
                               // minuto=str.substring(ia+1,ian)
                              //  ia=ian;

                            //}
                            $("#Expira").val(element.validity);
                            $("#Dura").val(limite["uptime-limit"]);
                           // $("#valh").val(hora);
                            //$("#valm").val(minuto);
                            // tiempo de duracion

                             //str =limite["uptime-limit"];
                             //dia="0";
                             //hora="0";
                             //minuto="0";
                             //ia=-1;
                             //ian=0;
                            //if(str.includes("d")){
                                //ian=str.indexOf("d");
                               // dia=str.substring(ia+1,ian)
                              //  ia=ian;

                            //}
                            //if(str.includes("h")){
                                //ian=str.indexOf("h");
                                //hora=str.substring(ia+1,ian)
                              //  ia=ian;

                            //}
                            //if(str.includes("m")){
                                //ian=str.indexOf("m");
                                //minuto=str.substring(ia+1,ian)
                              //  ia=ian;

                            //}

                           // $("#vigd").val(dia);
                           // $("#vigh").val(hora);
                            //$("#vigm").val(minuto);


                            $("#Subida").val(limite["upload-limit"]);
                            $("#Descarga").val(limite["download-limit"]);
                            $("#Transferencia").val(limite["transfer-limit"]);
                            $("#shared").val(element["override-shared-users"]);
                            $("#Direcciones").val(limite["address-list"]);
                            $("#limitrx").val(limite["rate-limit-rx"]);
                            $("#minlimitrx").val(limite["rate-limit-min-rx"]);
                            $("#limittx").val(limite["rate-limit-tx"]);
                            $("#minlimittx").val(limite["rate-limit-min-tx"]);

                            window.scrollTo(0,0);
                            listaD=document.getElementById("NuevoPlan");
                            listaD.removeChild(document.getElementById("edplan"));
                            botonG=document.createElement("button");
                            botonG.innerHTML="Guardar cambios";
                            botonG.id="edplan";
                            botonG.onclick=function(event){
                                event.preventDefault();
                                $.ajax({
                                    type: "POST",
                                    url: 'back/EditarPlan.php',
                                    data: $("#NuevoPlan").serialize(), // Adjuntar los campos del formulario enviado.
                                    beforeSend: function() {
                                    //alert("Enviando...");
                                     // setting a timeout aqui puedo configurar cuando esta cargando
                                     //$(placeholder).addClass('loading');
                                     //i++;
                                    },
                                    success: function(data)
                                    {
                                        alert(data); // Mostrar la respuestas del script PHP.
                                        //alert("listo");
                                        $("#nombre").val("");

                                        $("#Direcciones").val("");
                                        $("#Expira").val("0m");
                                        $("#Dura").val("0m");
                                        $("#shared").val("1");
                                        $("#Descarga").val("0B");
                                        $("#Subida").val("0B");
                                        $("#Transferencia").val("0B");
                                        $("#limitrx").val("0B");
                                        $("#minlimitrx").val("0B");
                                        $("#limittx").val("0B");
                                        $("#minlimittx").val("0B");
                                        window.scrollTo(0,0);

                                    },
                                    error: function() {
                                        alert("Ocurrió un error. Intentalo nuevamente");
                                     }
                                 }).fail( function( jqXHR, textStatus, errorThrown ) {
                                     alert( textStatus );
                                 });

                            };
                            listaD.appendChild(botonG);


                        };// termina editar

                        interno.appendChild(boton1);

                       //Eliminar -- Inicia configuracióm

                        boton2=document.createElement("button");
                        boton2.innerHTML="Eliminar";
                        boton2.onclick=function(event){
                            event.preventDefault();
                            let limid
                            if(limite)
                              limid=limite[".id"]
                            else
                             limid="";

                            lista.removeChild(document.getElementById(element[".id"]));
                            $.ajax({
                                type: "POST",
                                url: 'back/EliminarPlan.php',
                                data:{"perfil":element[".id"],
                                      "limitacion":limid},
                                beforeSend: function() {

                                   },
                                    success: function(data)
                                    {

                                    },error: function() {
                                        alert("Ocurrió un error. Intentalo nuevamente");
                                     }
                            });

                        };// termina configuración de boton eliminar
                        interno.appendChild(boton2);
                        principal.appendChild(interno);

                    lista.appendChild(principal);


                    }); // termina lectura de los planes


                }else{
                    console.error();
                }


            },
            error: function() {
                alert("Ocurrió un error. Intentalo nuevamente");
             }
    });

}
op4.onclick=function(){//agrega TPV
    window.scrollTo(0,0);
    clearInterval(misfichas);
    let h1vend=document.getElementById("tpvnew");
    h1vend.innerHTML="Agregar TPV";
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
    page19.style.display="none";
    $("#TPV").val("");
    lista=document.getElementById("ListaOpcionesPlan");
    lista.innerHTML=" ";
    $.ajax({
        type: "POST",
        url: 'back/LeerPlanes.php',

        beforeSend: function() {
        //    alert("Enviando...");
             // setting a timeout aqui puedo configurar cuando esta cargando
             //$(placeholder).addClass('loading');
             //i++;
           },
            success: function(data)
            {

                let respuesta = JSON.parse(data)
                if(respuesta["listo"]){

                   let perfiles=respuesta["perfiles"];
                   let limitaciones=respuesta["Limitacion"];
                   //console.table(perfiles)
                  // let limitaciones=respuesta["Limitacion"];
                   perfiles.forEach(element => {
                   var limite=limitaciones.find( limites => limites.name ===element.name  );
                    principal=document.createElement("tr");
                    //principal.id=element[".id"];
                    nombre=element.name.split("----");
                    interno=document.createElement("td");
                    div1=document.createElement("div");
                    div2=document.createElement("div");
                    input1=document.createElement("input");
                    labd=document.createElement("label");
                    labd.innerHTML=nombre[0];
                    //labd.id=element.name;
                    labd.setAttribute("for",nombre[0]);

                    interno.style="width: 40% !important; text-align: start !important;";
                    input1.type="checkbox";
                    input1.id=nombre[0];
                    input1.value=element.name;
                    input1.className="dbgCheck";
                    input1.name=nombre[0];
                    div2.appendChild(input1);
                    div2.appendChild(labd);
                    div2.className="dbgCont";
                    div1.appendChild(div2);
                    div1.className="dbgOuter";
                    interno.appendChild(div1)
                    principal.appendChild(interno);

                    interno=document.createElement("td");
                    interno.style="width: 30%; ";

                    if(nombre[1]=="Vigenciaa")
                        interno.innerHTML="Consumo con vigencia";
                    else
                    if(nombre[1]=="Corrido")
                        interno.innerHTML="Tiempo corrido";
                    else
                    if(nombre[1]=="Pausado")
                        interno.innerHTML="Tiempo pausado";
                    else
                    if(nombre[1]=="Consumo")
                        interno.innerHTML="Por consumo";
                    else
                    interno.innerHTML="Ilimitado";



                    principal.appendChild(interno);
                    interno=document.createElement("td");
                    interno.style="width: 30%; ";
                    input1=document.createElement("input");
                    input1.type="text";
                    input1.value="0";
                    input1.name="Precio";

                    interno.appendChild(input1);
                    principal.appendChild(interno);
                    lista.appendChild(principal);

                   });
                //aqui pongo el boton crear TPV
                listaD=document.getElementById("NuevoTPV");
                listaD.removeChild(document.getElementById("CrearTPV"));
                botonG=document.createElement("button");
                botonG.innerHTML="Crear TPV";
                botonG.id="CrearTPV";
                botonG.type="submit";
                listaD.appendChild(botonG);
                }else
                console.error();


            },
            error: function() {
                alert("Ocurrió un error. Intentalo nuevamente");
             }
    });

}
op5.onclick=function(){//lista TPV
    window.scrollTo(0,0);
    clearInterval(misfichas);
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
    page19.style.display="none";
    $("#buscatpv").val("");
    lista=document.getElementById("listaTPV");
    lista.innerHTML=" ";
    $.ajax({
        type: "POST",
        url: 'back/LeerTPV.php',

        beforeSend: function() {
        //    alert("Enviando...");
             // setting a timeout aqui puedo configurar cuando esta cargando
             //$(placeholder).addClass('loading');
             //i++;
           },
            success: function(data)
            {

                let respuesta = JSON.parse(data)
                if(respuesta["listo"]){
                    let tpv=respuesta["tpv"];
                    let tpv_plan=respuesta["tpv_plan"];
                    tpv.forEach(element => {
                        let planes=tpv_plan.filter(x=>x[1]==element[0]);

                        //console.log(element)
                        //console.table(planes)
                        principal=document.createElement("tr");
                        principal.id=element[0];
                        let idtpv=element[0];

                        interno=document.createElement("td");
                        interno.innerHTML=element[1];
                        interno.style=" width: 33%;";
                        principal.appendChild(interno);
                        interno=document.createElement("td");
                        interno.innerHTML=planes.length;
                        interno.style="width: 33%;";
                        principal.appendChild(interno);
                        interno=document.createElement("td");
                        boton1=document.createElement("button");
                        boton1.className="edit";
                        boton1.innerHTML="Editar";
 //_____________________________________________________________________
                        //opciones_editar_tpv
                        boton1.onclick=function(event){
                            event.preventDefault();

                            let h1vend=document.getElementById("tpvnew");
                            h1vend.innerHTML="Modificar TPV";
                            page5.style.display="none";
                            page4.style.display="block";
                            //aqui cargo los datos para editar
                            //Pongo primero los que ya estan
                            //leo los demas, hago un filtro y listo
                            window.scrollTo(0,0);
                            $("#TPV").val(element[1]);
                            lista=document.getElementById("ListaOpcionesPlan");
                            lista.innerHTML=" ";
                            $.ajax({
                                type: "POST",
                                url: 'back/LeerPlanes.php',

                                beforeSend: function() {
                                //    alert("Enviando...");
                                    // setting a timeout aqui puedo configurar cuando esta cargando
                                    //$(placeholder).addClass('loading');
                                    //i++;
                                },
                                    success: function(data)
                                    {

                                        let respuesta = JSON.parse(data)
                                        if(respuesta["listo"]){

                                        let perfiles=respuesta["perfiles"];
                                        let limitaciones=respuesta["Limitacion"];
                                        console.table(planes)
                                        planesActuales=planes
                                        let seleccionados=[];
                                        let Noseleccionados = perfiles.filter(
                                            (perfil) => {
                                              let ok = true;
                                              for (let i = 0; i < planes.length && ok; i++) { // Corta cuando no hay mas following o cuando ya se encontró uno
                                                let plan = planes[i];
                                                //console.log(plan[2] +"=="+ perfil['name'],plan[2] == perfil['name'])
                                                if (plan[2] == perfil['name']){
                                                    perfil.price=plan[3]
                                                    ok = false;
                                                }
                                                //console.log(ok)
                                              }
                                              if(!ok){

                                                seleccionados.push(perfil);
                                              }
                                              return ok;
                                          });
                                        let totalseleccionados=seleccionados.length;
                                         //console.table(seleccionados)
                                         Noseleccionados= seleccionados.concat(Noseleccionados);



                                        let counter=0;
                                        Noseleccionados.forEach(element => {
                                        var limite=limitaciones.find( limites => limites.name ===element.name  );
                                            principal=document.createElement("tr");
                                            nombre=element.name.split("----");
                                            interno=document.createElement("td");
                                            div1=document.createElement("div");
                                            div2=document.createElement("div");
                                            input1=document.createElement("input");
                                            labd=document.createElement("label");
                                            labd.innerHTML=nombre[0];
                                            //labd.id=element.name;
                                            labd.setAttribute("for",nombre[0]);

                                            interno.style="width: 33% !important; text-align: start !important;";
                                            input1.type="checkbox";
                                            input1.id=nombre[0];
                                            input1.value=element.name;
                                            input1.className="dbgCheck";
                                            if(counter<totalseleccionados)
                                            input1.setAttribute('checked','checked');
                                            counter++;
                                            //aqui pongo checked

                                            input1.name=nombre[0];
                                            div2.appendChild(input1);
                                            div2.appendChild(labd);
                                            div2.className="dbgCont";
                                            div1.appendChild(div2);
                                            div1.className="dbgOuter";
                                            interno.appendChild(div1)
                                            principal.appendChild(interno);

                                            interno=document.createElement("td");
                                            interno.style="width: 33%; text-align: center;";

                                                if(nombre[1]=="Vigenciaa")
                                                    interno.innerHTML="Consumo con vigencia";
                                                else
                                                if(nombre[1]=="Corrido")
                                                    interno.innerHTML="Tiempo corrido";
                                                else
                                                if(nombre[1]=="Pausado")
                                                        interno.innerHTML="Tiempo pausado";
                                                else
                                                if(nombre[1]=="Consumo")
                                                    interno.innerHTML="Por consumo";
                                                else
                                                interno.innerHTML="Ilimtado";

                                            principal.appendChild(interno);
                                            interno=document.createElement("td");
                                            interno.style="width: 33%; ";
                                            input1=document.createElement("input");
                                            input1.type="text";
                                            input1.value=element.price;
                                            input1.name="Precio";

                                            interno.appendChild(input1);
                                            principal.appendChild(interno);
                                            lista.appendChild(principal);
                                            //Elimino el boton anterior

                                            listaD=document.getElementById("NuevoTPV");
                                            listaD.removeChild(document.getElementById("CrearTPV"));
                                            botonG=document.createElement("button");
                                            botonG.innerHTML="Guardar";
                                            botonG.style="margin-top: 20px; height: 40px;";

                                            botonG.id="CrearTPV";
                                            botonG.onclick=function(event){
                                                event.preventDefault();
                                                planes=($("#NuevoTPV").serialize().split("&"))
                                                nombre=planes[0].split("=")[1];
                                                planes.shift();
                                                existe=false
                                                letras=/^[ñÑa-zA-Z]+[0-9-()]*$/;

                                                band=false;
                                                listaPlanes=[]
                                                objeto=new Object();
                                                //verifico los planes seleccionados
                                                planes.forEach(element=>{
                                                    var valoresAceptados = /^[0-9]+$/;
                                                    valores=element.split("=");
                                                    if (valores[1].match(valoresAceptados)){
                                                        if(band){
                                                        objeto.precio=valores[1]
                                                        listaPlanes.push(objeto)
                                                        objeto=new Object();
                                                        }
                                                        band=false

                                                    }else{
                                                        if(band){
                                                        band=false
                                                        objeto.precio="0"
                                                        listaPlanes.push(objeto)
                                                            objeto=new Object();
                                                        }else if(valores[0]!="Precio"){
                                                            band=true
                                                            objeto.plan=valores[1]

                                                        }
                                                    }
                                                }); //termina verificacion de planes



                                                // valido el nombre y ademas que tenga planes
                                                if( listaPlanes.length<1 ||  !nombre.match(letras)){
                                                    if(!nombre.match(letras)){
                                                        if(nombre.match(/^$/))
                                                        alert("El campo nombre del tpv no debe estar vacio.");
                                                        else
                                                        alert("El nombre debe iniciar con una letra.\nSolo puede tener numeros, letras, guiones medios o parentesis");
                                                    }
                                                    else
                                                        alert("Seleccione como minimo un plan para este tpv.");

                                                } // termina validacion
                                                else
                                                $.ajax({
                                                    type: "POST",
                                                    url: 'back/LeerTPV.php',

                                                    beforeSend: function() {
                                                    //    alert("Enviando...");
                                                        // setting a timeout aqui puedo configurar cuando esta cargando
                                                        //$(placeholder).addClass('loading');
                                                        //i++;
                                                    },
                                                        success: function(data)
                                                        {

                                                            let respuesta = JSON.parse(data)
                                                            if(respuesta["listo"]){
                                                                let tpv=respuesta["tpv"];
                                                                //let tpv_plan=respuesta["tpv_plan"];
                                                                disponible=true;
                                                                tam=tpv.length
                                                                //console.table(tpv)
                                                                for(i=0;i<tam &&disponible;i++){
                                                                   if(tpv[i][0]!=idtpv){
                                                                    disponible= !(tpv[i][1]==nombre)
                                                                   }
                                                                    //console.log(nombre+"="+tpv[i][1]+": "+disponible)
                                                                }
                                                                if(disponible){
                                                                    Nuevos=listaPlanes.filter(element=>(
                                                                        //element es objeto, plan y precio son sus campos
                                                                        !planesActuales.find(item=>
                                                                            //item es un array
                                                                           ( element.plan==item[2])
                                                                        )
                                                                    )
                                                                    );
                                                                    Cambios=[]

                                                                    planesActuales.filter(item=>
                                                                        listaPlanes.find(element=>{

                                                                            ok=(element.plan==item[2] && element.precio!=item[3])
                                                                            if(ok){
                                                                                Cambios.push({
                                                                                    id:item[0],
                                                                                    id_tpv:item[1],
                                                                                    plan:item[2],
                                                                                    precio:element.precio
                                                                                })
                                                                            }
                                                                            return ok

                                                                        } )
                                                                    );

                                                                    Eliminados=planesActuales.filter(item=>
                                                                        !listaPlanes.find(element=> ( element.plan==item[2]))
                                                                    );

                                                                    //console.log("seleccionados")
                                                                    //console.table(seleccionados)
                                                                    //console.log("Antes de:")
                                                                    //console.table(planesActuales)
                                                                    //console.log("Despues de")
                                                                    //console.table(listaPlanes)
                                                                    //console.log("Nuevos")
                                                                    //console.table(Nuevos)
                                                                    //console.log("Cambios")
                                                                    //console.table(Cambios)
                                                                    //console.log("Eliminados")
                                                                    //console.table(Eliminados)
                                                                    // alert("Todo listo")

                                                                    datos="id="+idtpv +"&Nombre="+nombre;
                                                                    datos=datos+"&Nuevos="+JSON.stringify(Nuevos)
                                                                    datos=datos+"&Cambios="+JSON.stringify(Cambios)
                                                                    datos=datos+"&Eliminados="+JSON.stringify(Eliminados)
                                                                    /* planesActuales=planesActuales.filter(item=>
                                                                        listaPlanes.find(element=> ( element.plan==item[2]))
                                                                    ); */
                                                                    $.ajax({
                                                                        type: "POST",
                                                                        url: 'back/EditarTPV.php',
                                                                        //parametros
                                                                        data:datos,

                                                                        beforeSend: function() {
                                                                        //alert("Enviando...");
                                                                            // setting a timeout aqui puedo configurar cuando esta cargando
                                                                            //$(placeholder).addClass('loading');
                                                                            //i++;
                                                                        },
                                                                        success: function(data)
                                                                        {
                                                                            //alert (data);



                                                                            let respuesta = JSON.parse(data)

                                                                            if(respuesta["listo"]){
                                                                                alert("Los cambios se hicieron exitosamente")
                                                                                //recargo esa opción
                                                                                document.getElementById("opc5").click();
                                                                                //document.getElementById("opc4").click();
                                                                                window.scrollTo(0,0);
                                                                            }else{ //Error en la creación del tpv
                                                                                alert("Ocurrio un error. Intentalo nuevamente");
                                                                            }

                                                                        },
                                                                        error: function() {
                                                                            alert("Ocurrió un error. Intentalo nuevamente");
                                                                            }
                                                                        });

                                                                }else{
                                                                    alert("El nombre de tpv ya está ocupado.\nElije otro")
                                                                }


                                                            }//Termina if listo
                                                            else{
                                                                alert("Error al leer los tpv");
                                                            }
                                                        },
                                                        error: function() {
                                                            alert("Ocurrió un error. Intentalo nuevamente");
                                                        }
                                                });

                                                //event.preventDefault();

                                                //let dats="id="+idtpv+"&"+$("#NuevoTPV").serialize();
                                                /*
                                                $.ajax({
                                                    type: "POST",
                                                    url: 'back/EditarTPV.php',
                                                    data:dats,
                                                    beforeSend: function() {
                                                    //    alert("Enviando...");
                                                         // setting a timeout aqui puedo configurar cuando esta cargando
                                                         //$(placeholder).addClass('loading');
                                                         //i++;
                                                       },
                                                        success: function(data)
                                                        {
                                                            alert(data);

                                                        },error: function() {
                                                            alert("Ocurrió un error. Intentalo nuevamente");
                                                         }
                                                });
                                                */

                                            };//termina onclick guardar
                                            listaD.appendChild(botonG);
                                            //aqu
                                            //i pongo el boton de Guardar
                                            //NuevoTPV
                                            //<button  type="submit">Crear TPV</button>

                                        }
                                        );


                                        //aqui termina de recorrer los datos
                                        }else
                                        console.error();


                                    },
                                    error: function() {
                                        alert("Ocurrió un error. Intentalo nuevamente");
                                    }
                            });//termina peticion

                        };//termina eliminar
                        interno.appendChild(boton1);
                        boton2=document.createElement("button");
                        boton2.innerHTML="Eliminar";
                        boton2.onclick=function(event){
                            event.preventDefault();
                            lista.removeChild(document.getElementById(element[0]));
                            $.ajax({
                                type: "POST",
                                url: 'back/EliminarTPV.php',
                                data:{"id":element[0]},
                                beforeSend: function() {
                                //    alert("Enviando...");
                                     // setting a timeout aqui puedo configurar cuando esta cargando
                                     //$(placeholder).addClass('loading');
                                     //i++;
                                   },
                                    success: function(data)
                                    {
                                        alert(data);

                                    },error: function() {
                                        alert("Ocurrió un error. Intentalo nuevamente");
                                     }
                            });
                            //console.log("editando");
                           // console.log(limite[".id"]);
                        };
                        interno.appendChild(boton2);
                        principal.appendChild(interno);

                    lista.appendChild(principal);

                    });

                }//Termina if listo

            },
            error: function() {
                alert("Ocurrió un error. Intentalo nuevamente");
             }
    });
}

op6.onclick=function(){//agrega vendedor
    window.scrollTo(0,0);
    clearInterval(misfichas);
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
    page19.style.display="none";

    //-------------------------
    let Contiene=document.getElementById('checksvend');
    Contiene.innerHTML="";
    let legen=document.createElement("LEGEND");
    legen.innerHTML="Tipo de vendedor";
    Contiene.appendChild(legen);
    //creo el radiobuton acumulativo
    let lab=document.createElement("label")
    legen=document.createElement("input");
    legen.type="radio";
    // meterlo en un comentario o si no durecto en la bd
    legen.name="Acumulativo";
    legen.setAttribute('value',"Acumulativo");
    legen.setAttribute('onclick',"SaldoMostrar(1)");

    legen.setAttribute('checked','checked');
    let ops=document.getElementById('pinicial');
    ops.style="display:none;";
    ops=document.getElementById('iinicial');
    ops.style="display:none;";
    lab.appendChild(legen);
    lab.insertAdjacentText('beforeend',"Prepago(Acumulativo)");
    Contiene.appendChild(lab);
    //creo el radio  button por saldo
    //creo el boton
     lab=document.createElement("label")
    legen=document.createElement("input");
    legen.type="radio";
    legen.name="Acumulativo";

    legen.setAttribute('value',"Saldo");
    legen.setAttribute('onclick',"SaldoMostrar(2)");
   /*
    if(element[3]=='Saldo'){
        legen.setAttribute('checked','checked');
        let ops=document.getElementById('pinicial');
        ops.style="display:block;";
         ops=document.getElementById('iinicial');
        ops.style="display:block;";
    }*/
    lab.appendChild(legen);
    lab.insertAdjacentText('beforeend',"Postpago(Saldo)");
    Contiene.appendChild(lab);
    $("#vendedor").val('');
    $("#vcelular").val('');
    $("#Pastword").val('');
    $("#iinicial").val(0);
    $("#Comision").val(0);
    $("#vname").val('');
    //-------------------------
    listaD=document.getElementById("NuevoVendedor");

    listaD.removeChild(document.getElementById("nuevovend"));


    botonG=document.createElement("button");
    botonG.innerHTML="Crear Vendedor";
    botonG.id="nuevovend";
    botonG.type="submit";
    listaD.appendChild(botonG);
    listaD=document.getElementById("lugar");
    listaD.innerHTML=" ";
    let h1vend=document.getElementById("vendadd");
    h1vend.innerHTML="Agregar vendedor";
    $.ajax({
        type: "POST",
        url: 'back/leerTPV.php',

        beforeSend: function() {
        //    alert("Enviando...");
            // setting a timeout aqui puedo configurar cuando esta cargando
            //$(placeholder).addClass('loading');
            //i++;
            },
            success: function(data)
            {

                // alert(data);
                let respuesta = JSON.parse(data)
                if(respuesta["listo"]){
                    let tpv=respuesta["tpv"];
                    tpv.forEach(element => {
                      let opt=document.createElement("option");
                      opt.innerHTML=element[1];
                      opt.setAttribute("value",element[0]);
                      listaD.appendChild(opt);
                    });

                }

            },error: function() {
                alert("Ocurrió un error. Intentalo nuevamente");
            }
    });
}
op7.onclick=function(){// lista los vendedores
    window.scrollTo(0,0);
    clearInterval(misfichas);
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
    page19.style.display="none";
    $("#busvend").val("");
    lista=document.getElementById("ListarVendedores");
    lista.innerHTML=" ";
    $.ajax({
        type: "POST",
        url: 'back/LeerVendedores.php',

        beforeSend: function() {
        //    alert("Enviando...");
             // setting a timeout aqui puedo configurar cuando esta cargando
             //$(placeholder).addClass('loading');
             //i++;
           },
            success: function(data)
            {
                let respuesta = JSON.parse(data);
                if(respuesta["listo"]){

                   let vendedores=respuesta["vendedores"];


                    vendedores.forEach(element => {
                    //    console.log(element)
                    principal=document.createElement("tr");
                    // principal.id=element[0];
                    interno=document.createElement("td");
                    //Nombre del vendedor
                    interno.style="width: 28%;";
                    interno.innerHTML=element[2];
                    principal.appendChild(interno);
                    //tipo de vendedor

                    // en name for user voy a poner el tipo de vendedor
                    interno=document.createElement("td");
                    interno.style="width: 10%;";
                    if(element[3]=="Acumulativo")
                        interno.innerHTML="Postpago(Acumulativo)";//element[3];
                    else
                    interno.innerHTML="Prepago(saldo)";
                        principal.appendChild(interno);
                    //tpv
                    interno=document.createElement("td");
                    interno.style="width: 18%; ";
                    interno.innerHTML=element[4];
                    principal.appendChild(interno);
                    //Telefono
                    interno=document.createElement("td");
                    interno.style="width: 12%; ";
                    interno.innerHTML=element[5];
                    principal.appendChild(interno);
                    //saldo
                    interno=document.createElement("td");
                    interno.style="width: 8%; ";
                    interno.id=element[0];
                    interno.innerHTML=element[6];
                    principal.appendChild(interno);
                    interno=document.createElement("td");
                    interno.style="width: 24%; ";
                    //botones de accion
                    boton1=document.createElement("button");
                    boton1.style="margin-left: 4px;";
                    if(element[3]=="Acumulativo"){
                        boton1.innerHTML="Retirar";
                        // tengo que preguntar cuando se desea retirnar
                        boton1.onclick=function(event){
                        //quito el saldo de el vendedor
                        event.preventDefault();
                        let Saldoc=document.getElementById(element[0]);
                        Saldoc.innerHTML="0";
                        //lista.removeChild(document.getElementById(element[0]));
                        let datos="id="+element[0]+'&saldo='+element[6];
                        $.ajax({
                            type: "POST",
                            url: 'back/RetiraSaldo.php',
                            data:datos,
                            beforeSend: function() {
                            //    alert("Enviando...");
                                 // setting a timeout aqui puedo configurar cuando esta cargando
                                 //$(placeholder).addClass('loading');
                                 //i++;
                               },
                                success: function(data)
                                {
                                    alert(data);


                                },error: function() {
                                    alert("Ocurrió un error. Intentalo nuevamente");
                                 }
                        });
                        //console.log("editando");
                       // console.log(limite[".id"]);
                        };
                        interno.appendChild(boton1);

                    }else{
                        // para cuando nos acumulativo
                        // y se le agrega saldo
                        // tambien pregunto cuanto se agrega

                    }
                    ///////// lo cambias despues
                    boton1=document.createElement("button");
                    boton1.innerHTML="Suspender";
                    interno.appendChild(boton1);
                    ///////

                    boton1=document.createElement("button");
                    boton1.innerHTML="Editar";

//Editar este vendedor
                    boton1.onclick=function(event){
                        console.table(element)
                        event.preventDefault();
                        window.scrollTo(0,0);
                        page7.style.display="none";
                        page6.style.display="block";
                        let Contiene=document.getElementById('checksvend');
                        Contiene.innerHTML="";
                        let legen=document.createElement("LEGEND");
                        legen.innerHTML="Tipo de vendedor";
                        Contiene.appendChild(legen);
                        //creo el radiobuton acumulativo
                        let lab=document.createElement("label")
                        legen=document.createElement("input");
                        legen.type="radio";
                        // meterlo en un comentario o si no durecto en la bd
                        legen.name="Acumulativo";
                        legen.setAttribute('value',"Acumulativo");
                        legen.setAttribute('onclick',"SaldoMostrar(1)");

                        if(element[3]=='Acumulativo'){
                            legen.setAttribute('checked','checked');
                            let ops=document.getElementById('pinicial');
                            ops.style="display:none;";
                             ops=document.getElementById('iinicial');
                            ops.style="display:none;";
                        }
                        lab.appendChild(legen);
                        lab.insertAdjacentText('beforeend',"Prepago(Acumulativo)");
                        Contiene.appendChild(lab);
                        //creo el radio  button por saldo
                        //creo el boton
                         lab=document.createElement("label")
                        legen=document.createElement("input");
                        legen.type="radio";
                        legen.name="Acumulativo";

                        legen.setAttribute('value',"Saldo");
                        legen.setAttribute('onclick',"SaldoMostrar(2)");

                        if(element[3]=='Saldo'){
                            legen.setAttribute('checked','checked');
                            let ops=document.getElementById('pinicial');
                            ops.style="display:block;";
                             ops=document.getElementById('iinicial');
                            ops.style="display:block;";
                        }
                        lab.appendChild(legen);
                        lab.insertAdjacentText('beforeend',"Postpago(Saldo)");
                        Contiene.appendChild(lab);
                        $("#vendedor").val(element[2]);
                        $("#vcelular").val(element[5]);
                        $("#Pastword").val(element[7]);
                        if(element[3]=='Saldo'){
                            $("#iinicial").val(element[6]);

                        }else{
                            $("#iinicial").val("0");

                        }
                        $("#Comision").val(element[8]);
                        $("#vname").val(element[10]);
                     //   $("#Confirmacion2").val(element[10]);
                       // $("#Confirmacion3").val(element[11]);
                       // $("#Confirmacion4").val(element[12]);
                       // $("#Confirmacion5").val(element[13]);

                        $.ajax({
                            type: "POST",
                            url: 'back/leerTPV.php',

                            beforeSend: function() {
                            //    alert("Enviando...");
                                // setting a timeout aqui puedo configurar cuando esta cargando
                                //$(placeholder).addClass('loading');
                                //i++;
                                },
                                success: function(data)
                                {

                                    // alert(data);
                                    let respuesta = JSON.parse(data)
                                    if(respuesta["listo"]){
                                        let tpv=respuesta["tpv"];
                                        listaD=document.getElementById("lugar");
                                        listaD.innerHTML=" ";
                                        tpv=tpv.filter(dat=>dat[0]!=element[1])
                                        let opt=document.createElement("option");
                                        opt.innerHTML=element[4];
                                        opt.setAttribute("value",element[1]);
                                        listaD.appendChild(opt);
                                        tpv.forEach(elemen => {
                                          let opt=document.createElement("option");
                                          opt.innerHTML=elemen[1];
                                          opt.setAttribute("value",elemen[0]);
                                          listaD.appendChild(opt);
                                        });

                                    }

                                },error: function() {
                                    alert("Ocurrió un error. Intentalo nuevamente");
                                }
                        });
                        legen.setAttribute('value',"Saldo");



                          //Elimino el boton anterior
                         let h1vend=document.getElementById("vendadd");
                         h1vend.innerHTML="Modificar vendedor";
                        listaD=document.getElementById("NuevoVendedor");
                        listaD.removeChild(document.getElementById("nuevovend"));
                        botonG=document.createElement("button");
                        botonG.innerHTML="Guardar cambios";
                        botonG.style="margin-top: 20px; height: 40px;";
                        botonG.id="nuevovend";
                        botonG.onclick=function(event){
                            event.preventDefault();
                            valido=true

                            let dats="id="+element[0]+"&"+$("#NuevoVendedor").serialize();
                            console.log(dats);

                           saldoact=$("#NuevoVendedor").serialize().split("&")[0].split("=")[1];
                           console.log("Nuevo opciom: "+saldoact)
                           if(element[6]>0 && element[3]!=saldoact){
                               valido=false;
                                alert("Para hacer cambio primero retire el saldo de su vendedor.")
                           }
                           //console.log( $("#NuevoVendedor").serialize())

                            if(valido){

                                $.ajax({
                                    type: "POST",
                                    url: 'back/LeerVendedores.php',

                                    //beforeSend: function() {
                                    //alert("Enviando...");
                                    //setting a timeout
                                    //$(placeholder).addClass('loading');
                                    //i++;
                                    //},
                                    success: function(data)
                                    {
                                        let respuesta = JSON.parse(data);
                                        if(respuesta["listo"]){

                                            vendedores=respuesta["vendedores"];
                                            console.table(vendedores)
                                            let is=false;
                                            usuario=document.getElementById("vname").value
                                            vendedores.forEach(elem => {
                                                if(!is && elem[0]!=element[0])
                                                 is=elem[10]==usuario;
                                            });

                                            if(!is && (usuario.length>0)){
                                                $.ajax({
                                                    type: "POST",
                                                    url: 'back/EditarVendedor.php',
                                                    data:dats,
                                                    beforeSend: function() {
                                                    //    alert("Enviando...");
                                                        // setting a timeout aqui puedo configurar cuando esta cargando
                                                        //$(placeholder).addClass('loading');
                                                        //i++;
                                                    },
                                                    success: function(data)
                                                    {
                                                        alert(data);

                                                    },error: function() {
                                                        alert("Ocurrió un error. Intentalo nuevamente");
                                                    }
                                                });
                                            }
                                            else{
                                                if(usuario.length>0)
                                                    alert("Ingresa un nombre de usuario")
                                                else
                                                alert("El nombre de usuario: "+usuario+" ya existe. Elige otro nombre de usuario")
                                            }
                                        }


                                    },// succes
                                    error: function() {
                                        alert("No se ha podido obtener la información");
                                    }//error
                                });// ajax de leer a los vendedores

                            }else{

                            }







                          //console.log("editando");
                            // console.log(limite[".id"]);
                          };
                          listaD.appendChild(botonG);
                        // aqui pongo el boton de guardar
                        //Terminal de punto de venta
                        console.log("editando");


                       // console.log(limite[".id"]);
                    };
                    interno.appendChild(boton1);
                    principal.appendChild(interno);
                   lista.appendChild(principal);
                   });
                }else
                  console.error();


            },
            error: function() {
                alert("Ocurrió un error. Intentalo nuevamente");
             }
    });
}
opc8.onclick=function(){
  page1.style.display="none";
  page2.style.display="none";
  page3.style.display="none";
  page4.style.display="none";
  page6.style.display="none";
  page5.style.display="none";
  page7.style.display="none";
  page8.style.display="block";
  page9.style.display="none";
  page10.style.display="none";
  page11.style.display="none";
  page12.style.display="none";
  page13.style.display="none";
  page14.style.display="none";
  page15.style.display="none";
  page16.style.display="none";
  page17.style.display="none";
  page18.style.display="none";
  page19.style.display="none";
}
opc9.onclick=function(){
  page1.style.display="none";
  page2.style.display="none";
  page3.style.display="none";
  page4.style.display="none";
  page6.style.display="none";
  page5.style.display="none";
  page7.style.display="none";
  page8.style.display="none";
  page9.style.display="block";
  page10.style.display="none";
  page11.style.display="none";
  page12.style.display="none";
  page13.style.display="none";
  page14.style.display="none";
  page15.style.display="none";
  page16.style.display="none";
  page17.style.display="none";
  page18.style.display="none";
  page19.style.display="none";
}
opc10.onclick=function(){
  page1.style.display="none";
  page2.style.display="none";
  page3.style.display="none";
  page4.style.display="none";
  page6.style.display="none";
  page5.style.display="none";
  page7.style.display="none";
  page8.style.display="none";
  page9.style.display="none";
  page10.style.display="block";
  page11.style.display="none";
  page12.style.display="none";
  page13.style.display="none";
  page14.style.display="none";
  page15.style.display="none";
  page16.style.display="none";
  page17.style.display="none";
  page18.style.display="none";
  page19.style.display="none";
}
opc11.onclick=function(){
  page1.style.display="none";
  page2.style.display="none";
  page3.style.display="none";
  page4.style.display="none";
  page6.style.display="none";
  page5.style.display="none";
  page7.style.display="none";
  page8.style.display="none";
  page9.style.display="none";
  page10.style.display="none";
  page11.style.display="block";
  page12.style.display="none";
  page13.style.display="none";
  page14.style.display="none";
  page15.style.display="none";
  page16.style.display="none";
  page17.style.display="none";
  page18.style.display="none";
  page19.style.display="none";
}
opc12.onclick=function(){
  page1.style.display="none";
  page2.style.display="none";
  page3.style.display="none";
  page4.style.display="none";
  page6.style.display="none";
  page5.style.display="none";
  page7.style.display="none";
  page8.style.display="none";
  page9.style.display="none";
  page10.style.display="none";
  page11.style.display="none";
  page12.style.display="block";
  page13.style.display="none";
  page14.style.display="none";
  page15.style.display="none";
  page16.style.display="none";
  page17.style.display="none";
  page18.style.display="none";
  page19.style.display="none";
}
opc13.onclick=function(){
  page1.style.display="none";
  page2.style.display="none";
  page3.style.display="none";
  page4.style.display="none";
  page6.style.display="none";
  page5.style.display="none";
  page7.style.display="none";
  page8.style.display="none";
  page9.style.display="none";
  page10.style.display="none";
  page11.style.display="none";
  page12.style.display="none";
  page13.style.display="block";
  page14.style.display="none";
  page15.style.display="none";
  page16.style.display="none";
  page17.style.display="none";
  page18.style.display="none";
  page19.style.display="none";
}
op14.onclick=function(){//Crear fichas
    window.scrollTo(0,0);
    clearInterval(misfichas);
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
    page19.style.display="none";
    //setInterval(updateF,1000);


    $.ajax({
        type: "POST",
        url: 'back/LeerVendedores.php',

        beforeSend: function() {
        //    alert("Enviando...");
            // setting a timeout aqui puedo configurar cuando esta cargando
            //$(placeholder).addClass('loading');
            //i++;
            },
            success: function(data)
            {

                // alert(data);

                listaD=document.getElementById("selectSale");
                listaD.innerHTML=" ";
                let respuesta = JSON.parse(data)
                if(respuesta["listo"]){
                    let vendedores=respuesta["vendedores"];

                    vendedores.forEach(element => {
                      let opt=document.createElement("option");
                      opt.innerHTML=element[2];
                      opt.setAttribute("value",element[0]);
                      listaD.appendChild(opt);
                    });
                    $.ajax({
                        type: "POST",
                        url: 'back/LeerVendedorTpvPlan.php',
                        data:"vendedor="+$("#selectSale").val() ,
                        beforeSend: function() {
                        //    alert("Enviando...");
                            // setting a timeout aqui puedo configurar cuando esta cargando
                            //$(placeholder).addClass('loading');
                            //i++;
                            },
                            success: function(data)
                            {


                                listaD=document.getElementById("selecPlan");
                                listaD.innerHTML=" ";
                                let respuesta = JSON.parse(data)
                                if(respuesta["listo"]){
                                    let planes=respuesta["planes"];
                                    // solo muestro los planes
                                    //que pertenencen
                                    // a ese vendedor
                                    planes.forEach(element => {
                                        //console.log(element)
                                        let opt=document.createElement("option");
                                        opt.innerHTML=element[14].split("----")[0]
                                        opt.setAttribute("value",element[14]+"===="+element[15]);
                                        listaD.appendChild(opt);

                                    });

                                }

                            },error: function() {
                                alert("Ocurrió un error. Intentalo nuevamente");
                            }
                    });

                    listaD.onchange=function(e){
                        e.preventDefault();

                        $.ajax({
                            type: "POST",
                            url: 'back/LeerVendedorTpvPlan.php',
                            data:"vendedor="+$("#selectSale").val() ,
                            beforeSend: function() {
                            //    alert("Enviando...");
                                // setting a timeout aqui puedo configurar cuando esta cargando
                                //$(placeholder).addClass('loading');
                                //i++;
                                },
                                success: function(data)
                                {


                                    listaD=document.getElementById("selecPlan");
                                    listaD.innerHTML=" ";
                                    let respuesta = JSON.parse(data)
                                    if(respuesta["listo"]){
                                        let planes=respuesta["planes"];
                                        // solo muestro los planes
                                        //que pertenencen
                                        // a ese vendedor
                                        planes.forEach(element => {
                                            console.log(element)
                                            let opt=document.createElement("option");
                                            opt.innerHTML=element[14].split("----")[0]
                                            opt.setAttribute("value",element[15]);
                                            listaD.appendChild(opt);

                                        });

                                    }

                                },error: function() {
                                    alert("Ocurrió un error. Intentalo nuevamente");
                                }
                        });
                    };//Termina funcion del evento onchange




                }



            },error: function() {
                alert("Ocurrió un error. Intentalo nuevamente");
            }
    });
// lo reanudo


}
op15.onclick=function(){//fichas creadas
    window.scrollTo(0,0);
    clearInterval(misfichas);
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
    page19.style.display="none";

    $.ajax({
        type: "POST",
        url: 'back/LeerFichas.php',
        beforeSend: function() {
         //alert("Enviando...");
            // setting a timeout aqui puedo configurar cuando esta cargando
            //$(placeholder).addClass('loading');
            //i++;
            },
            success: function(data)
            {

                //alert(data)
                lista=document.getElementById("listfichas");
                lista.innerHTML=" ";
                let respuesta = JSON.parse(data)
                //doc=new jsPDF();
                //blobPDF=new Blob([respuesta["fichas"][0][2]],{type: 'application/pdf'})
                //blobUrl=URL.createObjectURL(blobPDF);
                //window.open(blobUrl)
                //window.open("data:application/pdf;base64," + respuesta["fichas"][0][2]);
                //window.open("data:application/pdf;base64, " +atob(respuesta["fichas"][0][2]));
                //window.open(atob(respuesta["fichas"][0][2]))
               // console.log(blobPDF)

                if(respuesta["listo"]){
                    let usuarios=respuesta["fichas"];
                    usuarios.forEach(element => {
                       console.log(element)

                       /*
                       <tr>
                       <td>xd</td>
                       <td>Acumulativo</td>
                       <td>Oaxaca</td>
                       <td>436548769</td>
                       <td>$45</td>
                       <td>
                           <button style="margin-left: 4px;">Ver</button>
                           <button >Eliminar</button>
                       </td>
                        </tr>*/

                        // Mostrar los pdf y las fichas creadas

                        let principal=document.createElement("tr");
                        principal.id=element[0];
                            opt=document.createElement("td");
                            dateandhour=element[2].split(" ");//separo fecha y hora
                            opt.innerHTML=dateandhour[0];
                        principal.appendChild(opt); //fecha
                            opt=document.createElement("td");
                            opt.innerHTML=dateandhour[1];
                        principal.appendChild(opt);//hora
                            opt=document.createElement("td");
                            opt.innerHTML=element[6];
                        principal.appendChild(opt);//vendedor
                            opt=document.createElement("td");
                            plan=element[4].split("----");
                            opt.innerHTML=plan[0];
                        principal.appendChild(opt);//plan
                            opt=document.createElement("td");
                            opt.innerHTML=element[3];
                        principal.appendChild(opt);//cantidad de fichas

                        opt=document.createElement("td");
                        let bot=document.createElement("button");
                        bot.style="margin-left: 4px;"
                        bot.innerHTML="Descargar";


                      bot.onclick=function(e){
                          e.preventDefault();
                          doc=pdf(element[5])
                          nombre=element[2].split(" ")[0]+" ";
                          nombre=nombre+plan[0]+" "
                          nombre=nombre+plan[1]+" "
                          nombre=nombre+element[6]
                           console.log(nombre)

                          doc.save(nombre);
                      };

                        opt.appendChild(bot);
                        principal.appendChild(opt);

                        bot=document.createElement("button");
                        bot.innerHTML="Eliminar";
                        bot.onclick=function(e){
                            e.preventDefault();
                            console.log("eliminando")

                            $.ajax({
                                url: 'back/EliminarPdf.php',
                                type: 'post',
                                data:"id="+element[0],
                                success: function(data){

                                    let respuesta = JSON.parse(data);

                                    if(respuesta["listo"]){
                                        lista.removeChild(document.getElementById(element[0]))
                                        alert("Operacion exitosa")
                                    }else{
                                        alert("Ocurrio un error. Intenta de nuevamente")

                                    }
                                }

                            });

                        };
                        opt.appendChild(bot);
                        principal.appendChild(opt);
                      lista.appendChild(principal);

                    });

                }


            },error: function() {
                alert("Ocurrió un error. Intentalo nuevamente");
            }
    });

}
op16.onclick=function(){//buscar ficha
    window.scrollTo(0,0);
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
    page19.style.display="none";
    $.ajax({
        type: "POST",
        url: 'back/BuscarFicha.php',

        beforeSend: function() {
        //    alert("Enviando...");
            // setting a timeout aqui puedo configurar cuando esta cargando
            //$(placeholder).addClass('loading');
            //i++;
            },
            success: function(data)
            {


                listaD=document.getElementById("selecPlan");
                listaD.innerHTML=" ";
                let respuesta = JSON.parse(data)
                if(respuesta["listo"]){
                   console.table(respuesta["usuarios"])

                }

            },error: function() {
                alert("Ocurrió un error. Intentalo nuevamente");
            }
    });
}
op17.onclick=function(){// Fichas activas
    clearInterval(misfichas);
    window.scrollTo(0,0);
    clearInterval(misfichas);
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
    page19.style.display="none";

    $.ajax({
        type: "POST",
        url: 'back/UsuariosActivos.php',

        beforeSend: function() {
        //    alert("Enviando...");
            // setting a timeout aqui puedo configurar cuando esta cargando
            //$(placeholder).addClass('loading');
            //i++;
            },
            success: function(data)
            {

                // alert(data);
                lista=document.getElementById("activeusers");
                lista.innerHTML=" ";
                let respuesta = JSON.parse(data)
                if(respuesta["listo"]){
                    let usuarios=respuesta["usuarios"];
                    let routers=respuesta["routers"]
                   // console.table(usuarios)
                   // console.table(routers)
                    usuarios.forEach(element => {
                        let routername=routers.find(rout=>rout["ip-address"]==element["host-ip"])
                        let principal=document.createElement("tr");
                        principal.id="user"+element[".id"];
                        let opt=document.createElement("td");
                       //console.log(routername.name)
                      opt.innerHTML=element["user"];
                      principal.appendChild(opt);

                      opt=document.createElement("td");
                      opt.innerHTML=element["host-ip"];
                      principal.appendChild(opt);

                      opt=document.createElement("td");
                      opt.innerHTML=routername.name;
                      principal.appendChild(opt);

                      opt=document.createElement("td");
                      let bot=document.createElement("button");
                      bot.innerHTML="Cerrar sesión";
                      bot.onclick=function(e){
                          e.preventDefault();
                          lista.removeChild(document.getElementById("user"+element[".id"]));

                          $.ajax({
                            type: "POST",
                            url: 'back/CerrarSesion.php',
                            data:"id="+element[".id"]+"&ip="+element["host-ip"],
                            beforeSend: function() {
                            //    alert("Enviando...");
                                // setting a timeout aqui puedo configurar cuando esta cargando
                                //$(placeholder).addClass('loading');
                                //i++;
                                },
                                success: function(data)
                                {

                                     alert(data);
                                },error: function() {
                                    alert("Ocurrió un error. Intentalo nuevamente");
                                }
                        });
                      };
                      opt.appendChild(bot);
                      principal.appendChild(opt);
                      lista.appendChild(principal);

                    });

                }

            },error: function() {
                alert("Ocurrió un error. Intentalo nuevamente");
            }
    });
}
function serv(){
    window.scrollTo(0,0);
    clearInterval(misfichas);
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
    page19.style.display="none";
}
function dataEmpre(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
    page14.style.display="none";
    page15.style.display="none";
    page16.style.display="none";
    page17.style.display="none";
    page18.style.display="none";
    page19.style.display="block";
}
/*conexion();
    xhr.open("get","./configRadius.html");
    xhr.send();*/
function conexion(){
    xhr.onload =function(){
        if (this.status === 200){
            container.innerHTML =xhr.responseText;
            //console.log(xhr.responseText);
        }else{
            console.warn("Error");
        }
    };
}
