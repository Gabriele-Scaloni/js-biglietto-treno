
let prezzoDaPagare= document.getElementById("mioid");

const km = prompt("quanti km dovrai percorrere per raggiungere la destinazione?");
console.log();

const age = prompt("quanti hanni hai?");
console.log();

let prezzoKm = (km * 0.21) ;
console.log();



let sconto1 =   (prezzoKm - (prezzoKm/100 * 20 ));
console.log();
let sconto2 =   (prezzoKm - (prezzoKm/100 * 40 ));
console.log();

/*  regola base   let n = num.toFixed(2); */

let price1 = sconto1.toFixed(2);
let price2 = sconto2.toFixed(2);
let price = prezzoKm.toFixed(2);


if (age < 18 ) {
    prezzoDaPagare.innerHTML = `il prezzo da pagare é ${price1} €`
}
else if  (age > 65) {
    prezzoDaPagare.innerHTML = `il prezzo da pagare é ${price2} €`
}
else if  (age) {
    prezzoDaPagare.innerHTML = `il prezzo da pagare é ${prezzoKm} €`;
}
console.log();