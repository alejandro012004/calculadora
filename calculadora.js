document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantalla");
  let expresion = "";
  document.querySelectorAll(".num").forEach(boton => {
    boton.addEventListener("click", () => {
      let valor = boton.value;

      // Reemplazar símbolos visuales por operadores válidos
      if (valor === "÷") valor = "/";
      if (valor === "x") valor = "*";
      if (valor === ",") valor = ".";

      // Si la pantalla tiene solo el 0, lo borramos
      if (pantalla.textContent === "0") {
        pantalla.textContent = "";
      }

      pantalla.textContent += boton.textContent;
      expresion += valor;
    });
  });

  // Botón igual
  document.getElementById("result").addEventListener("click", () => {
    try {
      const resultado = eval(expresion);
      pantalla.textContent = resultado;
      expresion = resultado.toString();
    } catch {
      pantalla.textContent = "Error";
      expresion = "";
    }
  });

  // Botón borrar
  document.getElementById("borrar").addEventListener("click", () => {
    pantalla.textContent = "0";
    expresion = "";
  });
});