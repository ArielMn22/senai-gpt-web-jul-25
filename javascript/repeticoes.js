function adicionarLog () {

  let divLogs = document.querySelector(".logs"); // Seleciona a div.

  let tagP = document.createElement("p"); // Cria a tag p.

  tagP.innerHTML = "Exercício executado em " + new Date().toLocaleDateString() + " às " + new Date().toLocaleTimeString();

  divLogs.appendChild(tagP); // Acrescenta a tagP dentro da divLogs.

}

console.log("FOR");
function rep01 () {

  for (let contadora = 1; contadora <= 5; contadora++) {

    console.log(contadora);

  }

  alert("Exercício executado no console.");

}

// console.log("WHILE");
// let contadoraWhile = 1;
// while (contadoraWhile <= 5) {

//   console.log(contadoraWhile);

//   contadoraWhile++;

// }

// console.log("DO WHILE SIMPLES");

// do {

//   console.log("Mostrou o valor na tela, ainda que a condição seja falsa.")

// } while (1 == 2);

// console.log("DO WHILE COMPLEXO");

// let operacao = "";
// do {

//   operacao = prompt("Qual operação deseja fazer?");

//   if (operacao != "+" && 
//       operacao != "-" && 
//       operacao != "*" && 
//       operacao != "/") {

//     alert("Operação inválida.");

//   }

// } while (operacao != "+" && 
//         operacao != "-" && 
//         operacao != "*" && 
//         operacao != "/");

// alert("Opção válida!");