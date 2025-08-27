// Input dati utente

const userAge = parseInt(prompt("Inserisci la tua età"));
const kmRoad = parseInt(prompt("Quanti Km devi percorrere?"));

console.log("Età:", userAge);
console.log("Km da percorrere:", kmRoad);

// Valori fissi per calcolo biglietto

const priceKm = kmRoad * 0.21;

// console.log("Costo biglietto intero", priceKm);

// Sconti 

// const ageTeen = priceKm * 0.60;
// const ageOld = priceKm * 0.80; 



// if (userAge < 18) {

//     console.log("Il costo del biglietto è:", ageTeen);

// } else if (userAge > 65) {

//     console.log("Il costo del biglietto è:", ageOld);

// } else {

//     console.log("Il costo del biglietto è:", priceKm);

// }


let priceResult = priceKm

if (userAge < 18) {

    priceResult = priceKm * 0.80 ;

} else if (userAge > 65) {

    priceResult = priceKm * 0.60 ;
}

console.log("Devi pagare:", priceResult.toFixed(2));
