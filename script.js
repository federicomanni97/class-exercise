/* creare lista della spesa
Chiedere con un prompt i prodotti da acquistare
metterli dentro una array
continuare a chiedere fino a quando non si scrive "stop"
*/


const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector(".alert");
const spesaContainer = document.getElementById('spesaLista');
//array spesa
let listaSpesa = [];
//variabile check
let flag = false;

while (flag === false) {
    const domandaLista = prompt('Inserisci la lista della spesa');
    if(domandaLista === 'stop'){
        flag = true;
    } else {
        listaSpesa.push(domandaLista);
    }
}
for(let i = 0; i < listaSpesa.length; i++){
    console.log(listaSpesa[i]);
}

spesaContainer.innerHTML = listaSpesa;

/*
l'utente inserisce un numero
e vuole ricevere una lista di numeri PARI lunga quando il numero da lui inserito
*/

// const nomiInvitati = [
//     'pippo',
//     'pluto',
//     'paperino',
//     'fabrizio'
// ]


// btn.addEventListener("click", function() {

//     let check = false;
//     let userName = inputEl.value;
//     let i = 0;
//     while (!check && i < nomiInvitati.length) {
//       if ( userName === nomiInvitati[i] ){     
//         check = true;
//       }
//       i++
//     }

//     console.log(check);
//     let msg = (check) ? "benvenuto" : "mi dispiace non puoi entrare";
//     resultEl.innerHTML = msg;
//     resultEl.classList.remove("d-none");
// })


