//Validar campo completado de Dias
function ingresarDias() {

  let inputValueDias = document.getElementById("dias").value;
  while (inputValueDias =="") {

   inputValueDias= (document.getElementById("errDias").innerHTML= "*Ingrese cantidad de días"); 
 }

 return inputValueDias;

}

//validar campo completado de Personas
function ingresarPersonas() {

  let inputValuePersonas = document.getElementById("personas").value;
  while (inputValuePersonas =="") {

   inputValuePersonas= (document.getElementById("errPersonas").innerHTML= "*Ingrese cantidad de Personas"); 
 }

 return inputValuePersonas;
}

//validar si ya se completaron los campos
function reset(){
  let inputValueDias = document.getElementById("dias").value;
  let inputValuePersonas = document.getElementById("personas").value;
  if (inputValueDias !=""){
    document.getElementById("errDias").innerHTML="";
  }
  if (inputValuePersonas !=""){
    document.getElementById("errPersonas").innerHTML="";
  }
}

//precio del viaje
const getValueInput = () =>{

  let boleto, valor, boletos, hospedajes, tours, total, pagos;
//guardar datos en localStorage
localStorage.setItem('lugar', document.getElementById("lugar").value);
let lugar = localStorage.getItem('lugar');

localStorage.setItem('hospedaje', document.getElementById("hospedaje").value);
let hospedaje = localStorage.getItem('hospedaje');

localStorage.setItem('personas', document.getElementById("personas").value);
let personas = localStorage.getItem('personas');

localStorage.setItem('dias', document.getElementById("dias").value);
let dias = localStorage.getItem('dias');

localStorage.setItem('tour', document.getElementById("tour").value);
let tour = localStorage.getItem('tour');

localStorage.setItem('pago', document.getElementById("pago").value);
let pago = localStorage.getItem('pago');


//valor del boleto

if ( lugar  == "Tokio") {
 boleto = 100000;
}else if(lugar=="Okinawa"){
 boleto = 120000;
}else if(lugar =="Hokkaido"){
  boleto= 150000;
}

//valor del hospedaje

if(hospedaje =="Hotel"){
 valor = 15000;
}else if(hospedaje =="Departamento"){
 valor = 10000;
}else if(hospedaje=="Casa"){
 valor= 12000;
}

//valor del tour
if(tour =="Si"){
 valor_tour= 20000;
}else{
 valor_tour=0;
}

//costos del viaje
boletos = boleto*personas;
hospedajes = valor*dias;
tours = valor_tour*personas;
total= boletos+hospedajes+valor_tour;

//valor de acuerdo a cuotas
if(pago =="1"){
 pagos = total;
}else if(pago =="6"){
 pagos = (total  * 0.20) + total;
}else if(pago=="12"){
 pagos= (total  * 0.50) + total;
}

//Promise resolve, reject
if (personas >=1 && dias >=1 ){
  let ok= document.getElementById("valueInput").innerHTML = "Lugar: " + lugar + "  $ " + 
  boleto + " por persona" +"</br>"+ "Tipo de Hospedaje: "+ hospedaje + "  $ " +  
  valor + " por día"+"</br>Cantidad de dias: " + dias +"</br>Cantidad de Personas: " + 
  personas + "</br>Tour: " + tour +"</br>Precio Total de Boletos: " + 
  boletos +"</br>Precio Total de Hospedaje: " + hospedajes +"</br>Precio Total de Tour: " + 
  tours +"</br>Precio Total del Viaje: " + total +"</br>Precio Total del Viaje en tarjeta en " + pago + " cuotas: " +
  pagos;


  document.getElementById("errCampos").innerHTML= "";
  let promise = new Promise(resolve => resolve(ok));

  promise.then(ok); 




}else{
  let mal = document.getElementById("errCampos").innerHTML= "*Complete todos los campos";
  new Promise((resolve, reject) => {
    throw new Error(mal);
  })
  
  .catch(err => (err)); 



}}

//manejo de array

function Viaje(lugar, personas, dias, hospedaje,tour, pago) {
  this.lugar = lugar;
  this.personas = personas;
  this.dias = dias;
  this.hospedaje = hospedaje;
  this.tour = tour;
  this.pago = pago;   
}

let viajes = [];


//funciones para obtener los valores de los input
function obtenerLugar() {  

  let oLugar = document.getElementById("lugar").value;
  return oLugar;
  
}
function obtenerPersonas() { 

  let oPersonas = document.getElementById("personas").value;
  oPersonas = parseInt(oPersonas);
  
  return oPersonas;
}

function obtenerDias() { 

  let oDias = document.getElementById("dias").value;
  oDias = parseInt(oDias);
  
  return oDias;
}

function obtenerHospedaje() { 

  let oHospedaje = document.getElementById("hospedaje").value;
  
  
  return oHospedaje;
}

function obtenerTour() { 

  let oTour = document.getElementById("tour").value;
  
  return oTour;
}
function obtenerPago() { 

  let oPago = document.getElementById("pago").value;
  
  return oPago;
}

//funcion para crear el listado de los items seleccionados de la consulta
function crearViaje() {

  let v = new Viaje(obtenerLugar(), obtenerPersonas(), obtenerDias(),obtenerHospedaje(), obtenerTour(),obtenerPago(), 0);
  viajes.push(v);
  mostrarListado();
}




function mostrarListado(){
  let lista='';

  for(let i=0; i<viajes.length; i++){

    if (viajes[i].personas >=1 && viajes[i].dias >=1) {
    lista+= 'lugar: ' + viajes[i].lugar +'\n'+
    ' personas: ' + viajes[i].personas + '\n'+
    ' dias: ' + viajes[i].dias + '\n'+
    ' hospedaje: ' + viajes[i].hospedaje +'\n'+
    ' tour: ' + viajes[i].tour +'\n'+
    ' pagos: ' + viajes[i].pago + '\n' + '-----------------' + '\n';}else{}
  }
  document.getElementById('listado').innerText = lista;}


  //borrar Consultas
  function borrarConsultas(){
    location.reload();
  }

// Hacemos Fetch al JSON en cuanto carga el documento.
$(document).ready(function () {
  fetch(
   "http://127.0.0.1:5500/viajes/js/data.json"
  )
    //fetch("http://127.0.0.1:5500/viajes/js/data.json") SOLO FUNCIONA EN LOCAL CON VSCODE
    .then((response) => response.json())
    .then((json) => {
      json.destinations.map(
        (
          destination // Mapeamos el JSON a la variable temp.
        ) =>
          temp.push({
            name: destination.name,
            boleto: destination.boleto,
          })
      );

      //mostrar option
      if (temp.length > 0) {
        $.each(temp, function (id, name, boleto) {
          $select.append(
            "<option value=" +
              name.name +
              ">" +
              name.name +
              name.boleto +
              "</option>"
          );
        });
      }
    });
  let $select = $("#lugar");
});
//json de lugar

$(document).ready(function() {
  const temp = [{

    "name": "Tokio","boleto": " $ 100000 C/boleto"
  },
  {

    "name": "Okinawa","boleto": " $ 120000 C/boleto"
  },
  {

    "name": "Hokkaido","boleto": " $ 150000 C/boleto"
  }
  ];
  let $select = $('#lugar');

    //mostrar option
    $.each(temp, function(id, name, boleto) {
      $select.append('<option value=' + name.name + '>' + name.name + name.boleto + '</option>');
    });
  });

    //json de hospedaje
    $(document).ready(function() {
      const temp2 = [{

        "name": "Hotel","valor": "15000"
      },
      {

        "name": "Departamento","valor": "10000"
      },
      {

        "name": "Casa","valor": "12000"
      }
      ];
      let $select = $('#hospedaje');

    //mostrar Option
    $.each(temp2, function(id, name) {
      $select.append('<option value=' + name.name + '>' + name.name + '</option>');
    });
  });

//json de cuotas
$(document).ready(function() {
  const temp3 = [{

    "id": "1","name": "1 Cuota"
  },
  {

    "id": "6","name": "6 Cuotas"
  },
  {

    "id": "12","name": "12 Cuotas"
  }
  ];
  let $select = $('#pago');

    //mostrar option
    $.each(temp3, function(id, name) {
      $select.append('<option value=' + name.id + '>' + name.name + '</option>');
    });
  });