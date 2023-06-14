const btn = document.getElementById("calculate");
const resultText = document.getElementById("result");

function calc() {
  const name = document.getElementById("name").value;
  const weight = document.getElementById("height").value;
  const height = document.getElementById("weight").value;
  const count = weight / (height * height);
  const imc = count.toFixed(2);
  let condition = "";
  if (imc <= 18.5) {
    condition = "Seu imc mostra que você está abaixo do peso normal ";
  } else if (imc > 18.5 && imc <= 24.9) {
    condition = "Seu imc mostra que você está no peso normal ";
  } else if (imc > 24.9 && imc <= 29.9) {
    condition = "Seu imc mostra que você está excesso de peso ";
  } else if (imc > 29.9 && imc <= 34.9) {
    condition = "Seu imc mostra que você está com obesidade classe 1 ";
  } else if (imc > 34.9 && imc <= 39.9) {
    condition = "Seu imc mostra que você está com obesidade classe 2 ";
  } else if (imc >= 40) {
    condition = "Seu imc mostra que você está com obesidade classe 3 ";
  }
  return (resultText.innerHTML = ` Olá ${name} , o seu imc é de ${imc} e ${condition}`);
}

btn.addEventListener("click", calc);
