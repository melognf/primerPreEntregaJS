let cliente = prompt("Por favor ingresa tu nombre").toUpperCase();
alert("Hola " + cliente +"!! bienvenid@ a VIAJEX!!");

let destinoContinental = "";
let totalEstadia = 0;

function CalculoEstadia(cantidadDias) {
    totalEstadia += cantidadDias * precioPorDia;
}

function elegirContinente() {
    let conti = prompt(`Estimad@ ${cliente} a que continente deseas viajar?, por favor ingresa el número:
1) Asia
2) Africa
3) America
4) Europa`);
    return conti;
}

function validarContinente(continente) {

    if(continente == null){
        return;
    }
    continente = Number(continente);

    while(isNaN(continente) || continente<0 || continente>4){
        alert(cliente + " has ingresado una opcion incorrecta. Ingresa un número del 1 al 4.");
        continente = elegirContinente();
        if(continente == null){
            return;
        }
    }
    mostrarPaises(continente);
}

validarContinente(elegirContinente());

function paisesAsia() {
    alert(`Por el momento tenemos los siguientes destinos para este continente:
1)Japon
2)China
3)Corea del Sur
4)India`);
            let elijaPais = Number(prompt("Por favor elija una opcion. Agregue el numero del país que usted eligió como destino:"));

            if(elijaPais == null){
                return;
            }

            while(isNaN(elijaPais) || elijaPais<0 || elijaPais>4){
                alert(cliente + " has ingresado una opcion incorrecta. Ingresa un número del 1 al 4.");
                elijaPais = paisesAsia();
                if(elijaPais == null){
                    return;
                }

            }
            switch(elijaPais){
                case 1:
                alert("Usted eligio como destino JAPON");
                precioPorDia = 4000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en JAPON?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 2:
                alert("Usted eligio como destino CHINA");
                precioPorDia = 5000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en CHINA?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 3:
                alert("Usted eligio como destino COREA DEL SUR");
                precioPorDia = 4500;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en COREA DEL SUR?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 4:
                alert("Usted eligio como destino INDIA");
                precioPorDia = 7000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en INDIA?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
            }
}

function paisesAfrica() {
alert(`Por el momento tenemos los siguientes destinos para este continente:
1)Sudafrica
2)Nigeria
3)Marruecos`);
            let elijaPais = Number(prompt("Por favor elija una opcion. Agregue el numero del país que usted eligió como destino:"));

            if(elijaPais == null){
                return;
            }

            while(isNaN(elijaPais) || elijaPais<0 || elijaPais>4){
                alert(cliente + " has ingresado una opcion incorrecta. Ingresa un número del 1 al 3.");
                elijaPais = paisesAfrica();
                if(elijaPais == null){
                    return;
                }

            }

            switch(elijaPais){
                case 1:
                alert("Usted eligio como destino SUDAFRICA");
                precioPorDia = 4000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en SUDAFRICA?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 2:
                alert("Usted eligio como destino NIGERIA");
                precioPorDia = 5000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en NIGERIA?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 3:
                alert("Usted eligio como destino MARRUECOS");
                precioPorDia = 4500;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en MARRUECOS?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 4:
            }
}

function paisesAmerica() {
alert(`Por el momento tenemos los siguientes destinos para este continente:
1)Estados Unidos
2)Colombia
3)Mexico
4)Uruguay`);
    
            let elijaPais = Number(prompt("Por favor elija una opcion. Agregue el numero del país que usted eligió como destino:"));

            if(elijaPais == null){
                return;
            }

            while(isNaN(elijaPais) || elijaPais<0 || elijaPais>4){
                alert(cliente + " has ingresado una opcion incorrecta. Ingresa un número del 1 al 4.");
                elijaPais = paisesAmerica();
                if(elijaPais == null){
                    return;
                }

            }

            switch(elijaPais){
                case 1:
                alert("Usted eligio como destino ESTADOS UNIDOS");
                precioPorDia = 4000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en ESTADOS UNIDOS?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 2:
                alert("Usted eligio como destino COLOMBIA");
                precioPorDia = 5000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en COLOMBIA?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 3:
                alert("Usted eligio como destino MEXICO");
                precioPorDia = 4500;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en MEXICO?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 4:
                alert("Usted eligio como destino URUGUAY");
                precioPorDia = 7000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en URUGUAY?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
            }
}

function paisesEuropa() {
alert(`Por el momento tenemos los siguientes destinos para este continente:
1)Inglaterra
2)Italia
3)Alemania
4)Francia`);
            let elijaPais = Number(prompt("Por favor elija una opcion. Agregue el numero del país que usted eligió como destino:"));

            if(elijaPais == null){
                return;
            }

            while(isNaN(elijaPais) || elijaPais<0 || elijaPais>4){
                alert(cliente + " has ingresado una opcion incorrecta. Ingresa un número del 1 al 4.");
                elijaPais = paisesEuropa();
                if(elijaPais == null){
                    return;
                }

            }

            switch(elijaPais){
                case 1:
                alert("Usted eligio como destino INGLATERRA");
                precioPorDia = 4000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en INGLATERRA?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 2:
                alert("Usted eligio como destino ITALIA");
                precioPorDia = 5000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en ITALIA?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 3:
                alert("Usted eligio como destino ALEMANIA");
                precioPorDia = 4500;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en ALEMANIA?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 4:
                alert("Usted eligio como destino FRANCIA");
                precioPorDia = 7000;
                cantidadDias = Number(prompt("Cuantos dias desea permanecer en FRANCIA?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
            }
}


function mostrarPaises(continente) {
    if(continente === 1){
         paisesAsia();
    }else if(continente === 2){
        paisesAfrica();
    }else if(continente === 3){
        paisesAmerica();
    }else if(continente === 4){
        paisesEuropa();
    }else{
        validarContinente(continente);
    }

    let otraCompra = confirm(cliente + " desea comprar otro viaje?");

    if(otraCompra){
        validarContinente(elegirContinente());
    }else{
        alert("Gracias por confiar en nosotros. Nos estaremos comunicando con usted para arreglar todos los detalles");
    }

}

