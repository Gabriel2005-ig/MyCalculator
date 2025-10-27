

//arrayHTMLButtonElement>
let allBtn = document.querySelectorAll("button");

let clearBtn = document.getElementById("clear");
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let result = document.getElementById("result");



allBtn.forEach((btn)=> {
    console.log(btn);

    //btn.innerText ="ciao";

    btn.addEventListener("click", (event)=> {
    console.log(event.target);
    console.log(val1);
    
    

    let a = parseFloat(val1.value);
    let b = parseFloat(val2.value);

    let operation = event.target.attributes[1].value;
    
    console.log(typeof a);
    console.log(typeof b);

    let result = (performOperation(a, b, operation));
    result.innerText = "Il risultato è: " + result;
    console.log(result);
    if ( result instanceof String){
        result.innerText = "Errore: " + result;
    }

    
});



})




function somma(a,b){
    return a + b;
 
}

function sottrazione(a,b){
    return a - b;
}

function divisione(a,b){
    if(b===0){
    return "Errore; divisione per zero"; 
}
    return a / b;
}



function moltiplicazione(a,b){
    return a * b;
}


function performOperation(a,b,operation){

switch(operation){
    case "+":
      return somma (a,b);
    case "-":
      return sottrazione (a,b);
    case "*":
      return moltiplicazione (a,b);
    case "/":
      return divisione (a,b);
    default:
      return "Operazione non valida";
}
}

/*
const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");
*/
const output = document.getElementById("result");



document.getElementById("1").addEventListener("click", () => {
  output.textContent = "Il risultato è: " + somma(Number(val1.value), Number(val2.value));
});

document.getElementById("2").addEventListener("click", () => {
  output.textContent = "Il risultato è: " + sottrazione(Number(val1.value), Number(val2.value));
});

document.getElementById("3").addEventListener("click", () => {
  output.textContent = "Il risultato è: " + moltiplicazione(Number(val1.value), Number(val2.value));
});

document.getElementById("4").addEventListener("click", () => {
  output.textContent = "Il risultato è: " + divisione(Number(val1.value), Number(val2.value));
});










