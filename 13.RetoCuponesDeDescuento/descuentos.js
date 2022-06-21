

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const coupons = [
        "W10",
        "W20",
        "W30",
    ];

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const valorCupon = inputCupon.value;


    switch (valorCupon) {
        case "W10":
            descuento = 10;
            break
        case "W20":
            descuento = 20;
            break
        case "W30":
            descuento = 30;
            break;
    }

    if (!coupons.includes(valorCupon)) {
        alert("El cupón " + valorCupon + "no es válido");
     } else if (valorCupon === "W10") {
        descuento = 10;
     } else if (valorCupon === "W20") {
        descuento = 20;
     } else if (valorCupon === "W30") {
        descuento = 30;
     }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}