function ingresarDias() {

  let inputValueDias = document.getElementById("dias").value;
  while (inputValueDias =="") {
       
       inputValueDias= (document.getElementById("errDias").innerHTML= "*Ingrese cantidad de días"); 
     }

     return inputValueDias;
   }

   function ingresarPersonas() {

    let inputValuePersonas = document.getElementById("personas").value;
    while (inputValuePersonas =="") {
       
       inputValuePersonas= (document.getElementById("errPersonas").innerHTML= "*Ingrese cantidad de Personas"); 
     }

     return inputValuePersonas;
   }



const getValueInput = () =>{

    let boleto, valor, boletos, hospedajes, tours, total, pagos;

    sessionStorage.setItem('lugar', document.getElementById("lugar").value);
    let lugar = sessionStorage.getItem('lugar');

    sessionStorage.setItem('hospedaje', document.getElementById("hospedaje").value);
    let hospedaje = sessionStorage.getItem('hospedaje');

    sessionStorage.setItem('personas', document.getElementById("personas").value);
    let personas = sessionStorage.getItem('personas');

    sessionStorage.setItem('dias', document.getElementById("dias").value);
    let dias = sessionStorage.getItem('dias');

    sessionStorage.setItem('tour', document.getElementById("tour").value);
    let tour = sessionStorage.getItem('tour');

    sessionStorage.setItem('pago', document.getElementById("pago").value);
    let pago = sessionStorage.getItem('pago');


    

    if ( lugar  == "Tokio") {
     boleto = 100000;
   }else if(lugar=="Okinawa"){
     boleto = 120000;
   }else if(lugar =="Hokkaido"){
    boleto= 150000;
  }


  if(hospedaje =="Hotel"){
   valor = 15000;
 }else if(hospedaje =="Departamento"){
   valor = 10000;
 }else if(hospedaje=="Casa"){
   valor= 12000;
 }

 if(tour =="Si"){
   valor_tour= 20000;
 }else{
   valor_tour=0;
 }
 boletos = boleto*personas;
 hospedajes = valor*dias;
 tours = valor_tour*personas;
 total= boletos+hospedajes+valor_tour;

 if(pago =="1"){
   pagos = total;
 }else if(pago =="6"){
   pagos = (total  * 0.20) + total;
 }else if(pago=="12"){
   pagos= (total  * 0.50) + total;
 }


if (personas >=1 && dias >=1 ){



  document.getElementById("valueInput").innerHTML = "Lugar: " + lugar + "  $ " + 
  boleto + " por persona" +"</br>"+ "Tipo de Hospedaje: "+ hospedaje + "  $ " +  
  valor + " por día"+"</br>Cantidad de dias: " + dias +"</br>Cantidad de Personas: " + 
  personas + "</br>Tour: " + tour +"</br>Precio Total de Boletos: " + 
  boletos +"</br>Precio Total de Hospedaje: " + hospedajes +"</br>Precio Total de Tour: " + 
  tours +"</br>Precio Total del Viaje: " + total +"</br>Precio Total del Viaje en tarjeta en " + pago + " cuotas: " +
  pagos;}else{document.getElementById("errCampos").innerHTML= "*Complete todos los campos";}


}
