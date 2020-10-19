var inputPeso = document.getElementById('peso');
var calcular = document.getElementById('calcular')
var resultado = document.getElementById('resultado');

calcular.addEventListener("click", function() {
    mercurio.innerText = "Mercúrio " + parseFloat(peso.value) / 10 * 0.37;
    venus.innerText = 'Vênus ' + parseFloat(peso.value) / 10 * 0.88;
    marte.innerText = "Marte " + parseFloat(peso.value) / 10 * 0.38;
    jupter.innerText = "Júpter " + parseFloat(peso.value) / 10 * 2.64;
    saturno.innerText = "Saturno " + parseFloat(peso.value) / 10 * 1.15;
    urano.innerText = "Urano " + parseFloat(peso.value) / 10 * 1.17;
});