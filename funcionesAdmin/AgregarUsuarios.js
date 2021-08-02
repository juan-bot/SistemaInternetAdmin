jQuery(document).ready(function() {
   
    $("#useradd").submit(function(e){
        e.preventDefault(); 
        // leer todas las fichas
        // hacer un filtro y seterarlas
        //console.log("creando");
        
        
        $.ajax({
           type: "POST",
           url: 'back/LeerUsuarios.php',
           // Obtengo su estado de saldo y cuanto de ganancia tiene
           data:"vendedor="+$("#selectSale").val() ,
          beforeSend: function() {
          //alert("Enviando...");
            // setting a timeout
            //$(placeholder).addClass('loading');
            //i++;
           },
           success: function(data)
           {
                let respuesta = JSON.parse(data) 
               // Mostrar la respuestas del script PHP.
               //document.getElementById("saldo1").nodeValue="Acunulativo";
               //document.getElementById("saldo2").nodeValue="Saldo";
               if(respuesta["listo"]==1){

                    
                    let usuarios=respuesta["usuarios"];
                    let vendedores=respuesta["vendedores"];
                    console.log("Leido");
                    
                    console.log("slkamls "+vendedores);
                    
                    let opc=$("#selectRandom").val();
                    let name=$("#fiuser").val()
                    let pass=$("#fipass").val()

                    let tamaño=$("#users").val();
                    let cantidad=$("#totalf").val();
                    let plan=($("#selecPlan").val()).split("====")[0];
                    console.log("Plan:"+plan)
                    // el id del vendedor para tener sus datos
                    // mas actulizados, esto lo hago al inicio del ajax
                    let costo=($("#selecPlan").val()).split("====")[1];
                    console.log("Costo del plan: "+costo)
                    let vendedor=$("#selectSale").val();
                    //console.log("Vendedor: "+vendedor)
                    let May='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    let Min='abcdefghijklmnopqrstuvwxyz';
                    let Num='0123456789';
                    let MayMin='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 
                    let MayNum='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
                    let MinNum='abcdefghijklmnopqrstuvwxyz0123456789';
                    let MayMinNum='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let cars="";
                    let size=0;
                    let Fichas=[];
                    let nuevas=[];
                    let disponibles=true

                        // Revisar el tipo de saldo
                        // Si es acumulativo, solo sumar
                        // Si es de prepago entonces verificar si el saldo alcanza y
                        // Pedir una confirmación de lo que 
                if(vendedores[0][0]!="Acumulativo") {
                        if(($("#useradd").serialize().split("&")[0].split("=")[1])!="normal")
                        cantidad=1
                        if(vendedores[0][1]==0)
                            disponibles=false
                            //ya le calculo el porcentaje
                        else if(vendedores[0][1]<((cantidad*costo)*vendedores[0][1])/100 ){
                            cantidad=Math.trunc(vendedores[0][1]/cantidad)
                            mensaje="El saldo es insuficiente.\n"
                            mensaje=mensaje+"Te alcanza para generar "+cantidad
                            mensaje=mensaje+" fichas.\n\n Si estas de acuerdo presiona Aceptar";
                            mensaje=mensaje+"  Si no estas de acuerdo presiona Cancelar";
                            
                           
                            disponibles=confirm(mensaje)
                            //alert("El saldo no es suficiente")
                        }
                    alert("Fichas por saldo")
                }   
                
                
                if(disponibles){
                    if(($("#useradd").serialize().split("&")[0].split("=")[1])=="normal"){
                    
                        
                        if(opc==1){
                            size=May.length;
                            cars=May;
                            usuarios.forEach(user=>{
                                if (/[A-Z]+/.test(user.username)&&!(/[a-z]+/.test(user.username))&&!(/[0-9]+/.test(user.username)))
                                Fichas.push(user.username);
                            });
                            
                        }
                        else if ((opc==2)){
                            size=Min.length;
                            cars=Min;
                            usuarios.forEach(user=>{
                                if (/[a-z]+/.test(user.username)&&!(/[0-9]+/.test(user.username))&&!(/[A-Z]+/.test(user.username)))
                                    Fichas.push(user.username);
                            });
                            
                        }
                        else if ((opc==3)){
                            size=Num.length;
                            cars=Num;
                            usuarios.forEach(user=>{
                                if (/[0-9]+/.test(user.username)&&!(/[a-z]+/.test(user.username))&&!(/[A-Z]+/.test(user.username)))
                                    Fichas.push(user.username);
                            });

                        }
                        else if ((opc==4)){
                            size=MayMin.length;
                            cars=MayMin;
                            usuarios.forEach(user=>{
                                if ((/[A-Z]+/.test(user.username))&&(/[a-z]+/.test(user.username))&&!(/[0-9]+/.test(user.username)))
                                    Fichas.push(user.username);
                            });
                            
                        }
                        else if ((opc==5)){
                            size=MayNum.length;
                            cars=MayNum;
                            usuarios.forEach(user=>{
                                if ((/[A-Z]+/.test(user.username))&&(/[0-9]+/.test(user.username))&&!(/[a-z]+/.test(user.username)))
                                    Fichas.push(user.username);
                            });
                        }
                        else if ((opc==6)){
                            size=MinNum.length;
                            cars=MinNum;
                            usuarios.forEach(user=>{
                                if ((/[a-z]+/.test(user.username))&&(/[0-9]+/.test(user.username))&&!(/[A-Z]+/.test(user.username)))
                                    Fichas.push(user.username);
                            });
                        }
                        else if ((opc==7)){
                            size=MayMinNum.length;
                            cars=MayMinNum;
                            usuarios.forEach(user=>{
                                if ((/[A-Z]+/.test(user.username))&&(/[0-9]+/.test(user.username))&&(/[a-z]+/.test(user.username)))
                                    Fichas.push(user.username);
                            });
                            
                        }
                        size=size-1;
                        Fichas=new Set(Fichas);
                        // console.table(Fichas);
                        //console.log(Fichas.has("5min"));
                        let n1=0;
                        let n2=0;
                        let n3=0;
                        let n4=0;
                        let n5=0;
                        let n6=0;
                        let n7=0;
                        let n8=0;
                        let str="";
                        disponibles=true;
                        console.log(size)
                        for (let i = 0; i < cantidad&disponibles; i++) {

                            let valido=true;
                            // console.log(i);
                            do{
                                valido=true
                                switch (tamaño-'0') {
                                    case 3:
                                    str=cars.charAt(n1)+cars.charAt(n2)+cars.charAt(n3);
                                    break;
                                    case 4:
                                    str=cars.charAt(n1)+cars.charAt(n2)+cars.charAt(n3)+cars.charAt(n4);
                                        break;
                                    case 5:
                                        str=cars.charAt(n1)+cars.charAt(n2)+cars.charAt(n3)+cars.charAt(n4)+cars.charAt(n5);
                                    break;
                                    
                                    case 6:
                                        str=cars.charAt(n1)+cars.charAt(n2)+cars.charAt(n3)+cars.charAt(n4)+cars.charAt(n5)+cars.charAt(n6);
                                    break;
                                    case 7:
                                        str=cars.charAt(n1)+cars.charAt(n2)+cars.charAt(n3)+cars.charAt(n4)+cars.charAt(n5)+cars.charAt(n6);
                                        str=str+cars.charAt(n7);
                                        break;
                                    case 8:
                                        str=cars.charAt(n1)+cars.charAt(n2)+cars.charAt(n3)+cars.charAt(n4)+cars.charAt(n5)+cars.charAt(n6);
                                        str=str+cars.charAt(n7)+cars.charAt(n8);
                                    break;
                            
                                }
                                    if (n8<size && tamaño==8) {
                                    n8++;
                                    } else {
                                        n8=0;
                                        if (n7<size && tamaño>=7) {
                                            n7++;
                                        } 
                                        else {
                                            n7=0;
                                            if (n6<size && tamaño>=6) {
                                                n6++;
                                            } 
                                            else {
                                                n6=0;
                                                if (n5<size && tamaño>=5) {
                                                    n5++;
                                                }
                                                else {
                                                    n5=0;
                                                    if(n4<size && tamaño>=4) {
                                                        n4++;
                                                    }
                                                    else {
                                                        n4=0;
                                                        if (n3<size && tamaño>=3) {
                                                            n3++;
                                                            
                                                        } 
                                                        else {
                                                            n3=0;
                                                            if (n2<size) {
                                                                n2++;
                                                                
                                                            } 
                                                            else {
                                                                n2=0;
                                                                if (n1<size) {
                                                                    n1++;
                                                                    
                                                                }else{
                                                                    //Aqui pongo la varibale que termina la generacíon p
                                                                    //para que no se cicle el programa
                                                                    disponibles=false;
                                                                    console.log("Vuelya")
                                                                    n1=0;
                                                                } 
                                                                
                                                            } 
                                                        } 
                                                    } 
                                                } 
                                            }
                                        }
                                    }// ultimo else de el if de incremento
                                //empieza validacion /^hello/.test(cadena);
                                    
                                    if ((opc==4)){//valido que tenga mayusculas y minusculas
                                    valido=(/[A-Z]+/.test(str) && /[a-z]+/.test(str)); 
                                }
                                else if ((opc==5)){//valido que tenga mayuscula y numeros
                                    valido=(/[A-Z]+/.test(str) && /[0-9]+/.test(str)); 
                                }
                                else if ((opc==6)){//valido que tenga minusculas y numeros
                                    valido=(/[a-z]+/.test(str) && /[0-9]+/.test(str)); 
                                }
                                else if ((opc==7)){//valido que tenga mayusculas, minusculas y numeros
                                    valido=(/[A-Z]+/.test(str) && /[a-z]+/.test(str)&&/[0-9]+/.test(str));
                                }
                                //console.log(str);
                                //console.log(valido);
                                if(valido)
                                    valido=!Fichas.has(str);
                                    //console.log(str)
                                //termina validacion
                                //console.log(str);
                                //console.log(valido);
                                
                            }while(!valido&disponibles);
                            if(valido)
                                nuevas.push(str);
                            
                        }
                        //console.log(n1,n2,n3)
                        //console.log(str)
                        //console.log(disponibles)
                        //console.log(nuevas.length)
                        //console.table(nuevas)
                                
                    
                    }//termina generacion de las fichas 
                    else{
                        //console.log($("#useradd").serialize().split("&")[0].split("=")[1])
                        //usuarios=new Set(usuarios);
                        disponibles=true;
                        //console.table(usuarios)
                        cantidad=1
                        tamaño=1
                        let tam=usuarios.length
                        //console.log(tam)
                        for(i=0;i<tam&&disponibles;i++){
                            if(usuarios[i].username==name)
                            disponibles=false;
                        // console.log(i)
                        }
                        if(disponibles)
                            nuevas.push(name)
                        //console.log(disponibles)
                        //console.table(usuarios)
                        //if(usuarios.has)
                        
                    }  //Termina validación de las fichas personalizadas
                    //console.log(disponibles)
                    //console.log(cantidad)
                    //console.log(nuevas.length);
                    if(cantidad==0){
                        disponibles=false
                
                    }
                    else if(nuevas.length==0){
                        disponibles=false
                    
                    }
                    else if(nuevas.length<cantidad){
                        mensaje="Solo hay "+nuevas.length+" fichas disponibles.\n";
                        mensaje=mensaje+" Deseas generar solo esa cantidad?"
                        disponibles = confirm(mensaje)
                    }
                   
                    if(disponibles){
                    hoy = new Date();
                     //YY-MM-DD
                    //fecha1=moment("2021-5-1")
                    fecha2=hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+hoy.getDate()
                    comentario=vendedor+"_"+vendedores[0][3]+"_"+vendedores[0][4];
                    comentario=comentario+"_"+plan+"_"+fecha2+"_"+costo
                    let tosend="comentario="+comentario+"&pass="+pass+"&vend="+vendedor+"&tam="+tamaño;
                    tosend=tosend+"&opc="+opc+"&plan="+plan+"&fichas="+nuevas+"&costo="+costo;
                    $.ajax({

                        type: "POST",
                        url: 'back/CrearUsuarios.php',
                        data:tosend, 
                    beforeSend: function() {
                        alert("Enviando...");
                        // setting a timeout
                        //$(placeholder).addClass('loading');
                        //i++;
                        },
                        success: function(data)
                        { 
   // -------------         server response            

                            alert(data);
                            
                            let respuesta = JSON.parse(data);
                           
                             if(respuesta["listo"]){

                                if(respuesta["fichas"].length>0){
                                    doc=pdf(respuesta["fichas"]);
                                    //window.open(doc.output('bloburl'
//data:"vend="+vendedor+"&doc="+base64pdf+"&tam="+respuesta["fichas"].length+"&plan="+plan.split("----")[0],
                                    //nombre=element[2]+" ";
                                    tiempoTranscurrido = Date.now();
                                    hoy = new Date(tiempoTranscurrido);
                                    nombre=hoy.toLocaleDateString();
                                    nombre=nombre+" "+plan.split("----")[0]+" "
                                    nombre=nombre+plan.split("----")[1]+" "
                                    nombre=nombre+vendedores[0][3]
                                    console.log(nombre)
                                    mensaje=respuesta["fichas"].length+" fichas creadas.";
                                    mensaje=mensaje+"\n\nDeseas descargarlas?"
                                   
                                    band=confirm(mensaje)
                                    if(band)
                                        doc.save(nombre); 
                                    

                                }
                                else
                                 alert("No hay fichas para mostrar.")
                               
                            }
                            else{
                                alert("Ocurrio un error");

                            }
                             
                            
                        },
                        error: function() {
                            alert("No se ha podido obtener la información");
                        }
                    });
                    }else{
                        if(($("#useradd").serialize().split("&")[0].split("=")[1])!="normal"){
                            alert("El nombre de usuario ya existe, elije otro");
                        }
                        else if(cantidad==0){
                            alert("Listo "+cantidad+" fichas creadas");
                        }else if(nuevas.length==0){
                            alert("No se pueden generar mas fichas de este tipo");
                        }else{
                            alert("Cancelacion correcta. No se generaran las fichas");
                        }
                        //Mensaje de que ha habido un error
                    } 
                
                }// termina if de verificacion de saldo y consentimento
                else{
                    if(vendedores[0][1]==0)
                        alert("No tienes saldo")
                    //alert("Operación terminada");
                }



            }else{
                console.log("No se puede establecer conexion");
            }

           },
           error: function() {
               alert("No se ha podido obtener la información");
            }
        });

      
        
    });
    
});

