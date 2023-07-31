function financiación(tarjeta) {
  if (tarjeta == 1) {
    let cuotas = parseInt(prompt("Con visa  '3' ,'12' o '18' "));
    let montoFinanciado = 0;
    switch (cuotas) {
      case 3:
        montoFinanciado = resultado / 3;
        alert(
          "abonó con visa ahora " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      case 12:
        montoFinanciado = resultado / 12;
        alert(
          "abonó con visa ahora " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      case 18:
        montoFinanciado = resultado / 18;
        alert(
          "abonó con visa ahora " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      default:
        alert("disculpe ,no trabajamos con esa financiación");
        break;
    }
  }
  if (tarjeta == 2) {
    let cuotas = parseInt(prompt("Con americanxpress '3' , '6' o '9' "));
    let montoFinanciado = 0;
    switch (cuotas) {
      case 3:
        montoFinanciado = resultado / 3;
        alert(
          "abonó con americanxpress " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      case 6:
        montoFinanciado = resultado / 6;
        alert(
          "abonó con americanxpress " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      case 9:
        montoFinanciado = resultado / 9;
        alert(
          "abonó con americanxpress " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      default:
        alert("disculpe ,no trabajamos con esa financiación");
    }
  } else {
    alert("disculpe ,no trabajamos con esta tarjeta");
  }
}
alert("Servicio de Autocobro CARREFOUR ! ");
const nombre = prompt("Ingrese su nombre porfavor !");

const cbu = "00001324567743";
const alias = "serv.ventas.mp";
let cantidad = parseInt(
  prompt(nombre + " ingrese la cantidad de productos 'MAXIMO 10 PRODUCTOS'")
);
let resultado = 0;
let i = 1;

if (cantidad <= 10) {
  for (let i = 1; i <= cantidad; i++) {
    let montos = parseInt(
      prompt(" ingrese el monto de su pruducto numero " + i)
    );
    resultado += montos;
  }
  alert("el monto total es de $ " + resultado + " pesos.");

  let respuesta = prompt("pago en efectivo/transferencia o con tarjeta?");
  switch (respuesta) {
    case "tarjeta":
      const respuestaUsuario = prompt(" [1]visa  [2] americanexpress");
      financiación(respuestaUsuario);
      break;
    case "transferencia":
      alert(
        "Muchas gracias ! el monto es $ " +
          resultado +
          " este es nuestros ALIAS:  " +
          alias +
          "  CBU: " +
          cbu
      );
      break;
    case "efectivo":
      alert("muchas gracias ! pase por caja el monto es $ " + resultado);
      break;
    default:
      alert("respuesta invalida, intente nuevamente");
      break;
  }
} else {
  alert("Esta en una caja rapida solo se admiten 10 productos");
}
