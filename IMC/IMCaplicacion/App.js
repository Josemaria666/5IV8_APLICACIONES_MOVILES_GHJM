document.body.style.fontFamily = "Arial";
document.body.style.backgroundColor = "#ffffff";
document.body.style.textAlign = "center";
document.body.style.marginTop = "50px";



const titulo = document.createElement("h2");
titulo.textContent = "Calculadora de IMC";
document.body.appendChild(titulo);

const pesoLabel = document.createElement("label");
pesoLabel.textContent = "Peso (kg): ";
document.body.appendChild(pesoLabel);

const pesoInput = document.createElement("input");
pesoInput.type = "number";
document.body.appendChild(pesoInput);



document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));


const alturaLabel = document.createElement("label");
alturaLabel.textContent = "Altura (m): ";
document.body.appendChild(alturaLabel);

const alturaInput = document.createElement("input");
alturaInput.type = "number";
alturaInput.step = "0.01";
document.body.appendChild(alturaInput);


document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

const boton = document.createElement("button");
boton.textContent = "Calcular IMC";
document.body.appendChild(boton);

const resultado = document.createElement("p");
document.body.appendChild(resultado);

boton.addEventListener("click", () => {
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor ingresa valores válidos.";
    return;
  }

  const imc = peso / (altura * altura);
  let clasificacion = "";

  if (imc < 18.5) clasificacion = "Bajo peso";
  else if (imc < 24.9) clasificacion = "Normal";
  else if (imc < 29.9) clasificacion = "Sobrepeso";
  else clasificacion = "Obesidad";

  resultado.textContent = `Tu IMC es ${imc.toFixed(2)} (${clasificacion})`;
});sw

