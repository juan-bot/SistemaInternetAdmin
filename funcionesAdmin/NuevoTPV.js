
jQuery(document).ready(function() {
    $("#NuevoTPV").submit(function(e){
        e.preventDefault();
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
                        console.table(tpv)
                        for(i=0;i<tam &&disponible;i++){
                            
                            disponible= !(tpv[i][1]==nombre)
                            //console.log(nombre+"="+tpv[i][1]+": "+disponible)
                        }
                        if(disponible){
                            $.ajax({
                                type: "POST",
                                url: 'back/CrearTPV.php',
                                //parametros
                                data: "Nombre="+nombre+"&Planes="+JSON.stringify(listaPlanes),
                                
                                beforeSend: function() {
                                //alert("Enviando...");
                                    // setting a timeout aqui puedo configurar cuando esta cargando
                                    //$(placeholder).addClass('loading');
                                    //i++;
                                },
                                success: function(data)
                                {
                                    let respuesta = JSON.parse(data)
                                    if(respuesta["listo"]){
                                        alert("Nuevo tpv creado exitosamente")
                                        //recargo esa opción
                                        document.getElementById("opc4").click();
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
           
        
    });//funcion submit
});//jquery

