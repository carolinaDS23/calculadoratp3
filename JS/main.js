
const numeros = document.querySelectorAll(".numero");
/*console.log(numeros); // para mostrar en pantalla si funciona */
const operadores = document.querySelectorAll(".operador");
const pantalla= document.querySelector(".resultado");
const borrar= document.querySelector(".borrar");
const igual= document.querySelector(".igual");

//Decalro variables con el operador let 
let opActual = "";
let opAnterior = "";
let resultado = "";
let operacion = "";

//recorro el array y agrego un evento click con el generador de eventos addEventListener en este caso
//lo realizo para los querySelectorAll
numeros.forEach((numero) => {
    numero.addEventListener("click", () => {
        opActual += numero.innerHTML;
        pantalla.innerHTML = opActual;
        
        //console.log(num.textContent); esto comprueba si podemos ver los numeors en consola 
    
    })

})

operadores.forEach((ope) => {
    ope.addEventListener("click", () => {   
        opAnterior = opActual;
        opActual = "";
        operacion = ope.innerHTML;
    })
})


//utilizamos cada uno de los operadores para los calculos 
igual.addEventListener("click", () =>{  
    switch(operacion){
        case "+":
            resultado = parseFloat(opAnterior) + parseInt(opActual);
            break;
        case "-":
            resultado = parseFloat(opAnterior) - parseInt(opActual);
            break;
        case "*":
            resultado = parseFloat(opAnterior) * parseInt(opActual);
            break;
        case "/":
            resultado = parseFloat(opAnterior) / parseInt(opActual);
            break;
        
        default:
            console.log("Operacion no valida");
    }
    pantalla.innerHTML = resultado;
})

borrar.addEventListener("click", () =>{  
    pantalla.innerHTML = "";
    opActual = "";
})
