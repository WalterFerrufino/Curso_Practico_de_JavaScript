// Código del cuadrado-------------------------------------------

function perimetroCuadrado(lado) {
    return lado * 4;
} 
function areaCuadrado(lado) {
    return lado * lado;
} 

// Código del triangulo-------------------------------------------

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) /2;
}

// Código del círculo---------------------------------------------

// Radio
const radioCirculo = 4;


// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return radio * radio * PI;
}

// ------------------------------ Aquí interactuamos con HTML ------------------------------
function calcularPerimetroCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es: " + area);
}

// ----------------------------------------------------------------------------------------------

function calcularPerimetroTriangulo() {

    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);

    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triángulo es: " + perimetro);
}

function calcularAreaTriangulo(){

    const input1 = document.getElementById("InputAlturaTriangulo");
    const value1 = Number(input1.value);

    const base = document.getElementById("InputBaseTriangulo");
    const value2 = Number(base.value);

    const area = areaTriangulo(value1,value2);
    alert("El area del triangulo es: " + area);
}

// ----------------------------------------------------------------------------------------------

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perímetro = perimetroCirculo(value);
    alert("El perímetro del círculo es: " + perímetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El area del círculo es: " + area);
}