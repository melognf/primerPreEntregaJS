let cliente = prompt("Por favor ingresa tu nombre");
alert("Hola " + cliente +"!! bienvenid@ a VIAJEX!!");

let destinoContinental = "";
let totalEstadia = 0;

function CalculoEstadia(cantidadDias) {
    totalEstadia = cantidadDias * precioPorDia;
}

function elige() {
    destinoContinental = prompt("Por favor elige el continente de tu destino").toUpperCase();
}




elige();

switch(destinoContinental){
    case "ASIA":
        let opcionAsia = Number(prompt(`Por el momento tenemos los siguientes destinos para este continente. Elija una opcion:
        1)Japon
        2)China
        3)Corea del Sur
        4)India`));
        while(isNaN(opcionAsia) || (opcionAsia<1 || opcionAsia>4)){
            alert("No ingresaste valor numerico o un numero valido");
            opcionAsia = Number(prompt(`Por el momento tenemos los siguientes destinos para este continente. Elija una opcion:
        1)Japon
        2)China
        3)Corea del Sur
        4)India`));
        }
        switch(opcionAsia){
            case 1:
                        alert("Usted eligio como destino estados Japon");
                        precioPorDia = 4000;
                        cantidadDias = Number(prompt("Cuantos dias desea permaneces en estados Japon?"));
                        CalculoEstadia(cantidadDias);
                        alert("usted debera abonar US$"+ totalEstadia);
                        break;
                        case 2:
                        alert("Usted eligio como destino China");
                        precioPorDia = 5000;
                        cantidadDias = Number(prompt("Cuantos dias desea permaneces en China?"));
                        CalculoEstadia(cantidadDias);
                        alert("usted debera abonar US$"+ totalEstadia);
                        break;
                        case 3:
                        alert("Usted eligio como destino Corea del Sur");
                        precioPorDia = 4500;
                        cantidadDias = Number(prompt("Cuantos dias desea permaneces en Corea del Sur?"));
                        CalculoEstadia(cantidadDias);
                        alert("usted debera abonar US$"+ totalEstadia);
                        break;
                        case 4:
                        alert("Usted eligio como destino India");
                        precioPorDia = 7000;
                        cantidadDias = Number(prompt("Cuantos dias desea permaneces en India?"));
                        CalculoEstadia(cantidadDias);
                        alert("usted debera abonar US$"+ totalEstadia);
                        break;
        }break;
    case "AFRICA":
        let opcionAfrica = Number(prompt(`Por el momento tenemos los siguientes destinos para este continente
        1)Sudafrica
        2)Nigeria
        3)Marruecos`));
        while(isNaN(opcionAfrica) || (opcionAfrica<1 || opcionAfrica>3)){
            alert("No ingresaste valor numerico o un numero valido");
            opcionAfrica = Number(prompt(`Por el momento tenemos los siguientes destinos para este continente
            1)Sudafrica
            2)Nigeria
            3)Marruecos`));
        }
        switch(opcionAfrica){
            case 1:
            alert("Usted eligio como destino Sudafrica");
            precioPorDia = 4000;
            cantidadDias = Number(prompt("Cuantos dias desea permaneces en Sudafrica?"));
            CalculoEstadia(cantidadDias);
            alert("usted debera abonar US$"+ totalEstadia);
            break;
            case 2:
            alert("Usted eligio como destino Nigeria");
            precioPorDia = 5000;
            cantidadDias = Number(prompt("Cuantos dias desea permaneces en Nigeria?"));
            CalculoEstadia(cantidadDias);
            alert("usted debera abonar US$"+ totalEstadia);
            break;
            case 3:
            alert("Usted eligio como destino Marruecos");
            precioPorDia = 4500;
            cantidadDias = Number(prompt("Cuantos dias desea permaneces en Marruecos?"));
            CalculoEstadia(cantidadDias);
            alert("usted debera abonar US$"+ totalEstadia);
            break;
        }
        break;
    case "AMERICA":
                let opcionAmerica = Number(prompt(`Por el momento tenemos los siguientes destinos para este continente
                1)Estados Unidos
                2)Colombia
                3)Mexico
                4)Uruguay`));
                while(isNaN(opcionAmerica) || (opcionAmerica<1 || opcionAmerica>4)){
                    alert("No ingresaste valor numerico o un numero valido");
                    opcionAmerica = Number(prompt(`Por el momento tenemos los siguientes destinos para este continente
                1)Estados Unidos
                2)Colombia
                3)Mexico
                4)Uruguay`));
                }
                switch(opcionAmerica){
                        case 1:
                        alert("Usted eligio como destino estados Unidos");
                        precioPorDia = 4000;
                        cantidadDias = Number(prompt("Cuantos dias desea permaneces en estados Unidos?"));
                        CalculoEstadia(cantidadDias);
                        alert("usted debera abonar US$"+ totalEstadia);
                        break;
                        case 2:
                        alert("Usted eligio como destino Colombia");
                        precioPorDia = 5000;
                        cantidadDias = Number(prompt("Cuantos dias desea permaneces en Colombia?"));
                        CalculoEstadia(cantidadDias);
                        alert("usted debera abonar US$"+ totalEstadia);
                        break;
                        case 3:
                        alert("Usted eligio como destino Mexico");
                        precioPorDia = 4500;
                        cantidadDias = Number(prompt("Cuantos dias desea permaneces en Mexico?"));
                        CalculoEstadia(cantidadDias);
                        alert("usted debera abonar US$"+ totalEstadia);
                        break;
                        case 4:
                        alert("Usted eligio como destino Uruguay");
                        precioPorDia = 7000;
                        cantidadDias = Number(prompt("Cuantos dias desea permaneces en Uruguay?"));
                        CalculoEstadia(cantidadDias);
                        alert("usted debera abonar US$"+ totalEstadia);
                        break;
                }
                break;
    case "EUROPA":
        let opcionEuropa = Number(prompt(`Por el momento tenemos los siguientes destinos para este continente
        1)Inglaterra
        2)Italia
        3)Alemania
        4)Francia`));
        while(isNaN(opcionEuropa) || (opcionEuropa<1 || opcionEuropa>4)){
            alert("No ingresaste valor numerico o un numero valido");
            opcionEuropa = Number(prompt(`Por el momento tenemos los siguientes destinos para este continente
        1)Inglaterra
        2)Italia
        3)Alemania
        4)Francia`));
        }
        switch(opcionEuropa){
            case 1:
                alert("Usted eligio como destino estados Inglaterra");
                precioPorDia = 4000;
                cantidadDias = Number(prompt("Cuantos dias desea permaneces en estados Inglaterra?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 2:
                alert("Usted eligio como destino Italia");
                precioPorDia = 5000;
                cantidadDias = Number(prompt("Cuantos dias desea permaneces en Italia?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 3:
                alert("Usted eligio como destino Alemania");
                precioPorDia = 4500;
                cantidadDias = Number(prompt("Cuantos dias desea permaneces en Alemania?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
                case 4:
                alert("Usted eligio como destino Francia");
                precioPorDia = 7000;
                cantidadDias = Number(prompt("Cuantos dias desea permaneces en Francia?"));
                CalculoEstadia(cantidadDias);
                alert("usted debera abonar US$"+ totalEstadia);
                break;
        }
        break;
    case "OCEANIA":
        alert("No tenemos destinos disponibles por el momento para este continente");
        break;
    case "ANTARTIDA":
            alert("No tenemos destinos disponibles por el momento para este continente");
            break;
        default:
            alert("No has ingresado un continente, prueba con(Europa, America, Asia o Africa");
}







