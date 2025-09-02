// Exercício 1
function exercicio01() {
  let idade = prompt("Qual sua idade?");

  if (idade >= 18) {
    alert("Maior de idade!");
  } else {
    // Bloco do falso
    alert("Vá pra super-nani!");
  }

  adicionarLog();
}

// Exercício 2
// ...

// Exercício 5

function exercicio05() {

  let idade = prompt("5. Insira sua idade:");

  if (idade > 0 && idade <= 12) {
    alert("Criança.");
  } else {
    if (idade > 12 && idade <= 17) {
      alert("Adolescente.");
    }
  }

  adicionarLog();

}

// Exercício 6
// let num = prompt("Insira um número: ");

// if (num % 2 == 0) {

//     alert("Par");

// } else {

//     alert("Impar");

// }

// Intermediário 1 - Calculadora
// let numero1 = Number(prompt("Insira o primeiro número:"));
// console.log(numero1);

// let numero2 = Number(prompt("Insira o segundo número:"));
// let operacao = prompt("Insira a operação. Exemplo: +, -, * ou /");

// let resultado = 0;

// if (operacao == "+") {
//   resultado = numero1 + numero2;
// } else if (operacao == "-") {
//   resultado = numero1 - numero2;
// } else if (operacao == "*") {
//   resultado = numero1 * numero2;
// } else if (operacao == "/") {
//   resultado = numero1 / numero2;
// } else {
//   alert("Opção inválida! Leia a pergunta.");
// }

// alert(resultado);
