// Array de impuestos a consultar
const impuestos = [
    {id: 1, nombre: "Montepío", porcentaje: 15},
    {id: 2, nombre: "FONASA", porcentaje: 4.5},
    {id: 3, nombre: "FRL", porcentaje: 0.125},
    {id: 4, nombre: "IRPF", porcentaje: 10}
];

//Variable para repetir el cálculo
let repetirCalculo;

function listaImpuesto() {
    let lista = "¿Qué impuesto desea consultar?\n";
    impuestos.forEach(impuesto => {
        lista += impuesto.id + " - " + impuesto.nombre + "\n";
    })
    return parseInt(prompt(lista))
}

function calculoImpuesto() {
    do {
        // Datos principales para el cálculo
        let salarioNominal = parseFloat(prompt("Ingrese su salario nominal"));
        let consultaImpuestos = listaImpuesto()
        let impuesto = impuestos.find(imp => imp.id === consultaImpuestos);
        
        if(impuesto) {
            let impuestoTotal = (salarioNominal * impuesto.porcentaje) / 100;
            alert("Usted paga $" + impuestoTotal + " de " + impuesto.nombre);
            
        }else{
            alert("Impuesto no encontrado")
        }

        // Consulta para repetir ciclo
        repetirCalculo = confirm("¿Desea realizar otra consulta?");

        // Si el usuario no acepta, muestra este mensaje
        if (!repetirCalculo) {
            alert("¡Gracias por usar nuestra calculadora!");
        }
    } 
    // Si acepta, repite la función
    while (repetirCalculo);
}

calculoImpuesto();
