const btn = document.getElementById("calculate");

// // Function
// function calc() {
//   let condition = "";
//   if (imc <= 18.5) {
//     condition = "Seu imc mostra que você está abaixo do peso normal ";
//   } else if (imc > 18.5 && imc <= 24.9) {
//     condition = "Seu imc mostra que você está no peso normal ";
//   } else if (imc > 24.9 && imc <= 29.9) {
//     condition = "Seu imc mostra que você está excesso de peso ";
//   } else if (imc > 29.9 && imc <= 34.9) {
//     condition = "Seu imc mostra que você está com obesidade classe 1 ";
//   } else if (imc > 34.9 && imc <= 39.9) {
//     condition = "Seu imc mostra que você está com obesidade classe 2 ";
//   } else if (imc >= 40) {
//     condition = "Seu imc mostra que você está com obesidade classe 3 ";
//   }
// }

function showResult(result) {
  const nameInput = " tiago";
  const resultText = document.getElementById("result");
  return (resultText.innerHTML = ` Olá ${nameInput}. O seu imc é de ${result}`);
}

function calculate(height, weight) {
  const count = weight / (height * height);
  const imc = count.toFixed(2);
  showResult(imc);
}

function getValues() {
  const heightInput = document.getElementById("height").value;
  const weightInput = document.getElementById("weight").value;
  calculate(heightInput, weightInput);
}

btn.addEventListener("click", getValues);
