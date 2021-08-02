  function generaColores(n){
    let color= [];
    for(i=0;i<n;i++)
        color.push(colorHEX());
    return color;
}
function generarLetra(){
        var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
        var numero = (Math.random()*15).toFixed(0);
        return letras[numero];
    }
function colorHEX(){
        var coolor = "";
        for(var i=0;i<6;i++){
            coolor = coolor + generarLetra() ;
        }
        return "#" + coolor;
    }

function generaGrafica(id,type,labels,data,title){
    new Chart(document.getElementById(id), {
        type: type,
        data: {
                labels: labels,
                datasets: [
                    {
                    label:"",
                    backgroundColor: generaColores(data.length),////////////////////solo asignas el arreglo
                    data: data
                    }
                ]
            },
            options: {
              responsive:true,
              maintainAspectRatio:false,
                title: {
                    display: true,
                    text: title
                }
            }
    }//end function
    );//en newchart
}


//console.log(coloresg1);




jQuery(document).ready(function(fichas) {
    updateF();
//  misfichas=setInterval(updateF,1000);
});
function filtrarPorVendedor(fichas){
    let nuevoObjeto = {} // almacenara objetos con clave valor
    fichas.forEach( x => {
        //Si la ciudad no existe en nuevoObjeto entonces
        //la creamos e inicializamos el arreglo de profesionales.
        if( !nuevoObjeto.hasOwnProperty(x.idVendedor)){
          nuevoObjeto[x.idVendedor] = {
            idVendedor:x.idVendedor,
            nombre:x.vendedor,
            tpv:x.tpv,
            usuario:x.usuario,
            total:parseFloat(0)
          }
        }

        //Agregamos los datos de profesionales.
          nuevoObjeto[x.idVendedor].total+=parseFloat(x.costo)

      })
  return nuevoObjeto;
}
function filtrarPorTpvDiaActual(fichas){
    hoy = new Date();
    fechaActual=hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+hoy.getDate()
    totales=[]

    nombres=[]
    let nuevoObjeto = {} // almacenara objetos con clave valor
    // regreso dos arreglos
    //uno con los nombres y el otro con el total
    // i=0 para el primer paln y lo voy incrementando conforme aparecen nuevos
    // para almacenar en cada arrary guardare el indice y el nombre
    // despues regreso un objeto con dos arrays
    //Recorremos el arreglo
    i=0
    fichas.forEach( current => {
        //Si la ciudad no existe en nuevoObjeto entonces
        //la creamos e inicializamos el arreglo de profesionales.
        if( !nuevoObjeto.hasOwnProperty(current.tpv)){
          nuevoObjeto[current.tpv] = {
            indice:i
          }
          totales.push(0)
          nombres.push(current.tpv)
          i++
        }
        //Verifico si la fecha es del dia de hoy y le sumo
        if(current.fechaActivacion==fechaActual)
          totales[parseInt(nuevoObjeto[current.tpv].indice)]+=parseFloat(current.costo)
      })

    return resp={
        nombres:nombres,
        totales:totales
    }

}
function filtrarPorPlan(fichas){
    totales=[]
    nombres=[]
    let nuevoObjeto = {} // almacenara objetos con clave valor
    // regreso dos arreglos
    //uno con los nombres y el otro con el total
    // i=0 para el primer paln y lo voy incrementando conforme aparecen nuevos
    // para almacenar en cada arrary guardare el indice y el nombre
    // despues regreso un objeto con dos arrays
    //Recorremos el arreglo
    i=0
    fichas.forEach( current => {
        //Si la ciudad no existe en nuevoObjeto entonces
        //la creamos e inicializamos el arreglo de profesionales.
        if( !nuevoObjeto.hasOwnProperty(current.plan)){
          nuevoObjeto[current.plan] = {
            indice:i
          }
          totales.push(0)
          nombres.push(current.plan)
          i++
        }
        //Agregamos los dattos del total
        totales[parseInt(nuevoObjeto[current.plan].indice)]+=parseFloat(current.costo)
      })

    return resp={
        nombres:nombres,
        totales:totales
    }
}
function filtrarPorTPV(fichas){
totales=[]
nombres=[]
let nuevoObjeto = {} // almacenara objetos con clave valor
// regreso dos arreglos
//uno con los nombres y el otro con el total
// i=0 para el primer tpv
// para almacenar en cada arrary guardare el indice y el nombre
// despues regreso una matriz con dos arrays
//Recorremos el arreglo
i=0
fichas.forEach( current => {
    //Si la ciudad no existe en nuevoObjeto entonces
    //la creamos e inicializamos el arreglo de profesionales.
    if( !nuevoObjeto.hasOwnProperty(current.tpv)){
      nuevoObjeto[current.tpv] = {
        indice:i
      }
      totales.push(0)
      nombres.push(current.tpv)
      i++
    }
    //Agregamos los datos del total.
    totales[parseInt(nuevoObjeto[current.tpv].indice)]+=parseFloat(current.costo)
  })

return resp={
    nombres:nombres,
    totales:totales
}
}
function DetallesFichasActiva(sessiones,fichas){
    activos=[]
    hoy = new Date();
    fechaActual=hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+hoy.getDate()
    sessiones.forEach(item=>
        fichas.find(( element)=>{
            if(element["username"]==item["user"]){
              console.table(element)
              // console.log("username:"+element["username"]+"=="+item["user"])
               info=element["comment"].split("_")
               //console.log(info)
               //info[3].split["----"] es para separar el tipo de
               //plan al que pertenece
               activos.push( {
                   usuario:item["user"],
                   idVendedor:info[0],
                   tpv:info[2],
                   plan:(info[3].split("----"))[0],
                   vendedor:info[1],
                   costo:info[5],
                   fechaActivacion:fechaActual,
                   fechaCreacion:info[4],
                  })
                return true;
            }
            else
              return false
        })
    );
   // console.log(activos)
    return activos;
}
 function fichasNoRegistradas(activas,registradas){

    activas.forEach(
        (ficha)=>{
            let ok=true;
            tam=registradas.length
            for (let i = 0; i < tam && ok; i++) {
                if (ficha.usuario== registradas[i].usuario && ficha.fechaCreacion==registradas[i].fechaCreacion){
                    ok = false;
                }
            }

            if(ok)
              registradas.push(ficha);
        }
   )
  // console.log(registradas)
 }
 function gananciasVendedores(TodosVend,VendConVentas){

    TodosVend.forEach(vend=>{
        if( !VendConVentas.hasOwnProperty(vend[0])){
            nuevoObjeto[vend[0]] = {
              idVendedor:vend[0],
              nombre:vend[1],
              tpv:vend[3],
              usuario:vend[2],
              total:parseFloat(0)
            }
          }

    })
    tablero=document.getElementById("style-2")
    tablero.innerHTML=""
    total=0
    for (let clave in VendConVentas){
      //  console.log(VendConVentas[clave].nombre);
        div1=document.createElement("div");
        div1.classList.add("vendedor-item");
        span1=document.createElement("span");
        span1.classList.add("item-icono");
        img=document.createElement("img")
        img.src="imagenes/vendedores.png"
        span1.appendChild(img)
        div1.appendChild(span1)
        div2=document.createElement("div");
        div2.classList.add("item-text");
        span1=document.createElement("span");
        span1.innerHTML=VendConVentas[clave].nombre
        div2.appendChild(span1)
        span1=document.createElement("span");
        span1.innerHTML=VendConVentas[clave].tpv
        div2.appendChild(span1)
        div1.appendChild(div2)
        span1=document.createElement("span");
        span1.classList.add("vendido")
        span1.innerHTML="$"+VendConVentas[clave].total
        total+=parseFloat(VendConVentas[clave].total)
        div1.appendChild(span1)
        tablero.appendChild(div1)

      }

      totalesItem=document.getElementById("TotalVendedor")
      totalesItem.innerHTML="$"+total
      totalesItem=document.getElementById("TotalMes")
      totalesItem.innerHTML="Ventas Mes Actual $"+total

    /*

VendConVentas.forEach(current=>{


}

)
*/

 }
 function updateF(){
    $.ajax({
       type: "POST",
       url: 'back/Dashboard.php',
       data: $("#NuevoRouter").serialize(), // Adjuntar los campos del formulario enviado.
      beforeSend: function() {
       // alert("Enviando...");
        // setting a timeout
        //$(placeholder).addClass('loading');
        //i++;
       },
       success: function(data)
       {
            let respuesta = JSON.parse(data)
            if(respuesta["listo"]){
                let usuarios=respuesta["usuarios"];
                let sessiones=respuesta["sesiones"]; // aqui voy a tomar solo
                                                //las que están activas
                let MisVendedores=respuesta["vendedores"]
                //console.log(usuarios)
                //console.log(MisVendedores)

                fichasActivas= DetallesFichasActiva(sessiones,usuarios);
                let Actives=document.getElementById("ActiveF");
                Actives.innerHTML="Fichas Activas: "+fichasActivas.length;
                Actives=document.getElementById("AddesF");
                fichasActivasRegistradas=respuesta["ganancias"][3];

                fichasNoRegistradas(fichasActivas,fichasActivasRegistradas);
                Actives.innerHTML="Fichas Creadas Mes Actual : "+fichasActivasRegistradas.length;
                //console.log(fichasActivasRegistradas)

                tpvs=filtrarPorTPV(fichasActivasRegistradas)
                //console.log("Ventas por tpv")
                //console.log(tpvs.nombres)
                //console.log(tpvs.totales)
                generaGrafica("doughnut-chart2",'doughnut',tpvs.nombres,tpvs.totales,'TOP TPV MES ACTUAL')

                planes=filtrarPorPlan(fichasActivasRegistradas)
                generaGrafica("doughnut-chart1",'doughnut',planes.nombres,planes.totales,'TOP PLANES MES ACTUAL')

                ventaDiaria=filtrarPorTpvDiaActual(fichasActivasRegistradas)
                generaGrafica("bar-chart",'bar',ventaDiaria.nombres,ventaDiaria.totales, "Venta Total Dia de Hoy")


                    // ESTO ES LO QUE HACE FALTA POR IMPLEMENTAR
                    // CREAR UNA FUNCION QUE ME GENERE TODO LO DEMAS AUTOMATICAMENTE
                // por cada uno de estos voy a llenar la tabla esto lo voy a actualizar cada cierto tiempo puede ser que sea mas lento
                vendedores=filtrarPorVendedor(fichasActivasRegistradas)
                gananciasVendedores(MisVendedores,vendedores)
                //console.log(vendedores)
                //fichasActivasRegistradas.reduce((sum, current)=>(sum+parseFloat( current.costo)))
                //  aQUI TERMINA la LLAMADA A MI FUNCION
                //arr.reduce( ( sum, { x } ) => sum + x , 0)

                total=0
                fichasActivasRegistradas.forEach(current=> total+=parseFloat(current.costo))
               /*
                //------------------------
                $.ajax({
                    type: "POST",
                    url: 'back/GuardarGananciaMensual.php',
                    data:"total="+total+"&fichas="+ JSON.stringify(fichasActivasRegistradas),
                    beforeSend: function() {


                    //    alert("Enviando...");
                        // setting a timeout aqui puedo configurar cuando esta cargando
                        //$(placeholder).addClass('loading');
                        //i++;
                        },
                        success: function(data)
                        {


                           //alert(data+" LISTO")

                        },error: function() {
                            alert("Ocurrió un error. Intentalo nuevamente");
                        }
                });*/
                ///---------------------

            }
       },
       error: function() {
           alert("No se ha podido obtener la información");
        }
    }).fail( function( jqXHR, textStatus, errorThrown ) {
        alert( textStatus );
    });

}
