function alturaTriangulo (lado, base) {
    return Math.sqrt( (lado*lado) - ((base/2)*(base/2)) );
}

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputLadoTriangulo");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputBaseTriangulo");
    const value2 = Number(input2.value);

    const altura = alturaTriangulo(value1, value2);
    alert("La altura del triángulo es: " + altura);
}

