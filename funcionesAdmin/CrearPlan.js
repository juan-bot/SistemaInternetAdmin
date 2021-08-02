jQuery(document).ready(function() {
    $("#NuevoPlan").submit(function(e){
        e.preventDefault();
        let existe=false
        let nombre=$("#nombre").val()
        
        //console.log(nombre)
        //console.log(nombre.split("-"))
       // console.log(/^\s*$/.test(nombre))
         
        
        //existe=(nombre.length>0) && (nombre.split("-")).length==1;
        if(/^\s*$/.test(nombre)){
            alert("El campo nombre del plan no puede estar vacio.");
        }
        else if( (nombre.split("-")).length>1 )
          alert("El campo nombre no puede contener guiones")
        else{
            $.ajax({
                type: "POST",
                url: 'back/LeerPlanes.php',
                
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
                            let perfiles=respuesta["perfiles"];
                            let tam=perfiles.length;
                            existe=false
                            for(i=0; i<tam & !existe; i++){ 
                                if(perfiles[i].name===nombre)
                                   existe=true
                            } 
                        }
                        console.log(existe)
                        if(existe)
                        alert("El nombre del plan ya existe. Elija otro")
                        else{
                            console.log($("#NuevoPlan").serialize())
                           
                            $.ajax({
                                type: "POST",
                                url: 'back/CrearPlan.php',
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
                                    //recargo
                                    document.getElementById("opc4").click();
                                    //Regreso el scroll
                                    window.scrollTo(0,0);
                                    
                                }, 
                                error: function() {
                                    alert("Ocurrió un error. Intentalo nuevamente");
                                    }
                                }).fail( function( jqXHR, textStatus, errorThrown ) {
                                    alert( textStatus );
                                });
                        }

                        
                    }, 
                    error: function() {
                        alert("Ocurrió un error. Intentalo nuevamente");
                    }
            });
           
        }
     
        
        
    });
});

