function ingresarDias() {
    
let inputValueDias = document.getElementById("dias").value;
    while (inputValueDias =="") {
        inputValueDias = Number(alert('Ingrese cantidad de dias'));
    }

    return inputValueDias;
}

function ingresarPersonas() {
    
let inputValuePersonas = document.getElementById("personas").value;
    while (inputValuePersonas =="") {
        inputValuePersonas = Number(alert('Ingrese cantidad de personas'));
    }

    return inputValuePersonas;
}

const getValueInput = () =>{
      let inputValueLugar = document.getElementById("lugar").value; 
      let inputValueHospedaje = document.getElementById("hospedaje").value; 
      let inputValuePersonas = document.getElementById("personas").value;
      let inputValueDias = document.getElementById("dias").value;
      let inputValueTour = document.getElementById("tour").value;
      let inputValuePago = document.getElementById("pago").value;

      let boleto, valor, boletos, hospedaje, tour, total, pago;



 

        if ( inputValueLugar  == "Tokio") {
   boleto = 100000;
}else if(inputValueLugar=="Okinawa"){
	boleto = 120000;
}else if(inputValueLugar =="Hokkaido"){
	 boleto= 150000;
}


if(inputValueHospedaje =="Hotel"){
	valor = 15000;
}else if(inputValueHospedaje =="Departamento"){
	valor = 10000;
}else if(inputValueHospedaje=="Casa"){
	valor= 12000;
}

if(inputValueTour =="Si"){
 valor_tour= 20000;
}else{
	valor_tour=0;
}
boletos = boleto*inputValuePersonas;
hospedaje = valor*inputValueDias;
tour = valor_tour*inputValuePersonas;
 total= boletos+hospedaje+tour;

 if(inputValuePago =="1"){
	pago = total;
}else if(inputValuePago =="6"){
	pago = (total  * 0.20) + total;
}else if(inputValuePago=="12"){
	pago= (total  * 0.50) + total;
}

if (inputValuePersonas && inputValueDias !==0){
    document.getElementById("valueInput").innerHTML = "Lugar: " + inputValueLugar + "  $ " +  boleto + " por persona" +"</br>"+ "Tipo de Hospedaje: "+ inputValueHospedaje + "  $ " +  valor + " por día"+"</br>Cantidad de dias: " + inputValueDias +"</br>Cantidad de Personas: " + inputValuePersonas + "</br>Tour: " + inputValueTour +"</br>Precio Total de Boletos: " + boletos +"</br>Precio Total de Hospedaje: " + hospedaje +"</br>Precio Total de Tour: " + tour +"</br>Precio Total del Viaje: " + total +"</br>Precio Total del Viaje en tarjeta: " + pago;}else{alert("Complete todos los campos")}


    }

