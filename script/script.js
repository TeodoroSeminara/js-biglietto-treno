// Input dati utente

const userAge = parseInt(prompt("Inserisci la tua età"));
const kmRoad = parseInt(prompt("Quanti Km devi percorrere?"));

console.log("Età:", userAge);
console.log("Km da percorrere:", kmRoad);

// Valori fissi per calcolo biglietto

// const priceKm = kmRoad * 0.21;

// console.log("Costo biglietto intero", priceKm);

// Sconti 

// const ageTeen = priceKm * 0.60;
// const ageOld = priceKm * 0.80; 



// if (userAge < 18) {

//     console.log("Il costo del biglietto è:", ageTeen.toFixed(2));

// } else if (userAge > 65) {

//     console.log("Il costo del biglietto è:", ageOld.toFixed(2));

// } else {

//     console.log("Il costo del biglietto è:", priceKm.toFixed(2));

// }


let priceResult = kmRoad * 0.213

if (userAge < 18) {

    priceResult *= 0.80 ;

} else if (userAge > 65) {

    priceResult *= 0.60 ;
}

// console.log("Devi pagare:", priceResult.toFixed(2));

// console.log(priceResult);


console.log((Math.ceil(priceResult *100)/100).toFixed(2));

