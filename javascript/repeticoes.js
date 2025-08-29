console.log("FOR");
for (let contadora = 1; contadora <= 5; contadora++) {

  console.log(contadora);

}

console.log("WHILE");
let contadoraWhile = 1;
while (contadoraWhile <= 5) {

  console.log(contadoraWhile);

  contadoraWhile++;

}

console.log("DO WHILE SIMPLES");

do {

  console.log("Mostrou o valor na tela, ainda que a condição seja falsa.")

} while (1 == 2);

console.log("DO WHILE COMPLEXO");

let operacao = "";
do {

  operacao = prompt("Qual operação deseja fazer?");

  if (operacao != "+" && 
      operacao != "-" && 
      operacao != "*" && 
      operacao != "/") {

    alert("Operação inválida.");

  }

} while (operacao != "+" && 
        operacao != "-" && 
        operacao != "*" && 
        operacao != "/");

alert("Opção válida!");