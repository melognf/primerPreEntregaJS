let cliente = prompt("Por favor ingresa tu nombre").toUpperCase();
alert("Hola " + cliente +"!! bienvenid@ a VIAJEX!!");

let totalEstadia = 0;

function CalculoEstadia(cantidadDias) {
    totalEstadia += cantidadDias * precioPorDia;
}



const asia = [
    {pais: "JAPON", precioPorNoche: 2000},
    {pais: "CHINA", precioPorNoche: 3000},
    {pais: "COREA DEL SUR" , precioPorNoche: 4000},
    {pais: "INDIA", precioPorNoche: 2000}
];

const america = [
    {pais: "ESTADOS UNIDOS", precioPorNoche: 2500},
    {pais: "COLOMBIA", precioPorNoche: 3500},
    {pais: "BRASIL" , precioPorNoche: 4500},
    {pais: "MEXICO", precioPorNoche: 2000}
];

const europa = [
    {pais: "ALEMANIA", precioPorNoche: 2000},
    {pais: "FRANCIA", precioPorNoche: 3000},
    {pais: "INGLATERRA" , precioPorNoche: 4000},
    {pais: "ESPAÑA", precioPorNoche: 2000}
];

const africa = [
    {pais: "SUDAFRICA", precioPorNoche: 2500},
    {pais: "NIGERIA", precioPorNoche: 3500},
    {pais: "MARRUECOS" , precioPorNoche: 4500},
    {pais: "CAMERUN", precioPorNoche: 2000}
];

function eleccion() {
    let continente = prompt( cliente + " por favor elija el continente al cual quiere viajar");
    return continente;
}

function validarContinente(continente) {
    
    if(continente.toUpperCase() == "ASIA"){
        asia.forEach((destino) =>{
            alert("Tenemos disponibles los siguientes detinos: " + destino.pais);
        })
    }else if(continente.toUpperCase() == "AMERICA"){
        america.forEach((destino) =>{
            alert("Tenemos disponibles los siguientes detinos: " + destino.pais);
        })
    }else if(continente.toUpperCase() == "AFRICA"){
        africa.forEach((destino) =>{
            alert("Tenemos disponibles los siguientes detinos: " + destino.pais);
        })
    }else if(continente.toUpperCase() == "EUROPA"){
        europa.forEach((destino) =>{
            alert("Tenemos disponibles los siguientes detinos: " + destino.pais);
        })
    }else{
        alert("Opcion incorrecta, los continentes disponibles en estos momentos son: AMERICA, ASIA, AFRICA y EUROPA");
        continenteElegido = eleccion();
    }

}

validarContinente(eleccion());
