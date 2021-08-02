
$(function() {
   /*
    //
    const hoy = new Date();
    //YY-MM-DD
    fecha1=moment("2021-5-1")
    fecha2=moment( (hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+hoy.getDate()) )
    console.log(fecha2 + " "+fecha1);
    dias=fecha2.diff(fecha1, 'days')
    console.log(fecha2.diff(fecha1, 'days')+" de dsiferencia")
    //me sirve para indicar cual cargo
    document.getElementById("fichaAdd").click();
    document.getElementById("opc15").click();
    */
    //doc=pdf(data)
    //window.open(doc.output('bloburl'));
    $("#NuevoRouter").submit(function(e){
        e.preventDefault();
        $.ajax({
           type: "POST",
           url: 'back/AgregarRouter.php',
           data: $("#NuevoRouter").serialize(), // Adjuntar los campos del formulario enviado.
          beforeSend: function() {
            
          //alert("Enviando...");
            // setting a timeout
            //$(placeholder).addClass('loading');
            //i++;
           },
           success: function(data)
           {
               alert(data); // Mostrar la respuestas del script PHP.
               $("#NuevoRouter input").val("");
               
           },
           error: function() {
               alert("No se ha podido obtener la información");
            }
        }).fail( function( jqXHR, textStatus, errorThrown ) {
            alert( textStatus );
        });
        
    });
});
