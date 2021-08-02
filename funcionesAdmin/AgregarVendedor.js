
jQuery(document).ready(function() {
   
    $("#NuevoVendedor").submit(function(e){
        e.preventDefault(); 
        let usuario=document.getElementById("vname").value
        if(usuario.length>0){
            let vendedores;
            //console.log("lelel")
            $.ajax({
                type: "POST",
                url: 'back/LeerVendedores.php',
                
            //  beforeSend: function() {
            //  alert("Enviando...");
                // setting a timeout
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
                        vendedores.forEach(element => {
                            if(!is)
                            is=element[10]==usuario;
                        });

                       if(!is){
                        $.ajax({
                            type: "POST",
                            url: 'back/AgregarVendedor.php',
                            data: $("#NuevoVendedor").serialize(), // Adjuntar los campos del formulario enviado.
                         //  beforeSend: function() {
                           //  alert("Enviando...");
                             // setting a timeout
                             //$(placeholder).addClass('loading');
                             //i++;
                            //},
                            success: function(data)
                            {
                                alert(data); // Mostrar la respuestas del script PHP.
                                //document.getElementById("saldo1").nodeValue="Acunulativo";
                                //document.getElementById("saldo2").nodeValue="Saldo";
                 
                 
                            },
                            error: function() {
                                alert("No se ha podido obtener la información");
                             }
                         });
                       }
                        else{
                            alert("El nombre de usuario: "+usuario+" ya existe. Elige otro nombre de usuario")
                        }
                    }
    
    
                },
                error: function() {
                    alert("No se ha podido obtener la información");
                }
            });
        }else{
            alert("Ingresa un nombre de usuario")
        }
        
       /*
       
*/
});

});
