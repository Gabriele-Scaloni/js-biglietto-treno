
let prezzoDaPagare= document.getElementById("mioid");

const km = prompt("quanti km dovrai percorrere per raggiungere la destinazione?");
console.log();

const age = prompt("quanti hanni hai?");
console.log();

let prezzoKm = (km * 0.21) ;
console.log();

let sconto1 = (prezzoKm - (prezzoKm/100 * 20 ));
console.log();
let sconto2 = (prezzoKm - (prezzoKm/100 * 40 ));
console.log();

if (age < 18 ) {
    prezzoDaPagare.innerHTML = `il prezzo da pagare é ${sconto1} €`
}
else if  (age > 65) {
    prezzoDaPagare.innerHTML = `il prezzo da pagare é ${sconto2} €`
}
else if  (age) {
    prezzoDaPagare.innerHTML = `il prezzo da pagare é ${prezzoKm} €`;
}
console.log();