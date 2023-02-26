document.getElementById("boton-aceptar").addEventListener("click", function () {
  let texto = document.getElementById("input").value;
  document.getElementById("saludo").innerHTML = texto;
});

let datoInput = (document.getElementById("input").onchange = function () {
  console.log(datoInput);
});

document.getElementById("boton-textoBlanco").onclick = function () {
  document.getElementById("saludo").style.color = "#ffffff";
};

document.getElementById("boton-textoNegro").onclick = function () {
  document.getElementById("saludo").style.color = "#000";
};
