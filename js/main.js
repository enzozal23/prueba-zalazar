// function financiación(tarjeta) {
//   if (tarjeta == 1) {
//     let cuotas = parseInt(prompt("Con visa  '3' ,'12' o '18' "));
//     let montoFinanciado = 0;
//     switch (cuotas) {
//       case 3:
//         montoFinanciado = resultado / 3;
//         alert(
//           "abonó con visa ahora " +
//             cuotas +
//             " cuotas de $ " +
//             montoFinanciado.toFixed(2) +
//             " por mes"
//         );
//         break;
//       case 12:
//         montoFinanciado = resultado / 12;
//         alert(
//           "abonó con visa ahora " +
//             cuotas +
//             " cuotas de $ " +
//             montoFinanciado.toFixed(2) +
//             " por mes"
//         );
//         break;
//       case 18:
//         montoFinanciado = resultado / 18;
//         alert(
//           "abonó con visa ahora " +
//             cuotas +
//             " cuotas de $ " +
//             montoFinanciado.toFixed(2) +
//             " por mes"
//         );
//         break;
//       default:
//         alert("disculpe ,no trabajamos con esa financiación");
//         break;
//     }
//   }
//   if (tarjeta == 2) {
//     let cuotas = parseInt(prompt("Con americanxpress '3' , '6' o '9' "));
//     let montoFinanciado = 0;
//     switch (cuotas) {
//       case 3:
//         montoFinanciado = resultado / 3;
//         alert(
//           "abonó con americanxpress " +
//             cuotas +
//             " cuotas de $ " +
//             montoFinanciado.toFixed(2) +
//             " por mes"
//         );
//         break;
//       case 6:
//         montoFinanciado = resultado / 6;
//         alert(
//           "abonó con americanxpress " +
//             cuotas +
//             " cuotas de $ " +
//             montoFinanciado.toFixed(2) +
//             " por mes"
//         );
//         break;
//       case 9:
//         montoFinanciado = resultado / 9;
//         alert(
//           "abonó con americanxpress " +
//             cuotas +
//             " cuotas de $ " +
//             montoFinanciado.toFixed(2) +
//             " por mes"
//         );
//         break;
//       default:
//         alert("disculpe ,no trabajamos con esa financiación");
//     }
//   } else {
//     alert("disculpe ,no trabajamos con esta tarjeta");
//   }
// }
// alert("Servicio de Autocobro CARREFOUR ! ");
// const nombre = prompt("Ingrese su nombre porfavor !");

// const cbu = "00001324567743";
// const alias = "serv.ventas.mp";
// let cantidad = parseInt(
//   prompt(nombre + " ingrese la cantidad de productos 'MAXIMO 10 PRODUCTOS'")
// );
// let resultado = 0;
// let i = 1;

// if (cantidad <= 10) {
//   for (let i = 1; i <= cantidad; i++) {
//     let montos = parseInt(
//       prompt(" ingrese el monto de su pruducto numero " + i)
//     );
//     resultado += montos;
//   }
//   alert("el monto total es de $ " + resultado + " pesos.");

//   let respuesta = prompt("pago en efectivo/transferencia o con tarjeta?");
//   switch (respuesta) {
//     case "tarjeta":
//       const respuestaUsuario = prompt(" [1]visa  [2] americanexpress");
//       financiación(respuestaUsuario);
//       break;
//     case "transferencia":
//       alert(
//         "Muchas gracias ! el monto es $ " +
//           resultado +
//           " este es nuestros ALIAS:  " +
//           alias +
//           "  CBU: " +
//           cbu
//       );
//       break;
//     case "efectivo":
//       alert("muchas gracias ! pase por caja el monto es $ " + resultado);
//       break;
//     default:
//       alert("respuesta invalida, intente nuevamente");
//       break;
//   }
// } else {
//   alert("Esta en una caja rapida solo se admiten 10 productos");
// }
const salir = 4;
const carrito = [];

const Productos = [
  {
    id: 1,
    tipo: "remera para sublimar ",
    precio: 2500,
    categoria: "remeras",
  },
  {
    id: 2,
    tipo: "remera oversize ",
    precio: 3500,
    categoria: "remeras",
  },
  {
    id: 3,
    tipo: "remera oversize batik ",
    precio: 4900,
    categoria: "remeras",
  },

  {
    id: 4,
    tipo: "buso para sublimar",
    precio: 6000,
    categoria: "busos",
  },
  {
    id: 5,
    tipo: "buso diseño variados",
    precio: 6000,
    categoria: "busos",
  },
  {
    id: 6,
    tipo: "campera para estampar ",
    precio: 7500,
    categoria: "camperas",
  },
  {
    id: 7,
    tipo: "campera con diseño varios ",
    precio: 6340,
    categoria: "camperas",
  },
];

const colores = ["negro", "gris", "blanco"];

const talles = ["s", "m", "l", "xl"];

function agregarACarrito(producto) {
  carrito.push(producto);
}

mostrarCarrito = () => {
  let msjCarrito = "Carrito de compras: \n";
  carrito.forEach((el) => {
    msjCarrito += `- ${el.tipo} \n`;
    msjCarrito += `total --------------$ ${el.precio}`;
    alert(msjCarrito);
  });
};

const verRemeras = () => {
  let mensaje = "Lista de producto: \n";
  Productos.forEach((el) => {
    if (el.categoria === "remeras") {
      mensaje += `${el.id}-${el.tipo}  $${el.precio} \n`;
    }
  });

  const opcion = parseInt(prompt(mensaje)); // id del objeto a guardar en el carrito esto no se porque me itera el numero de veces del id

  const productoElegido = Productos.find((producto) => producto.id === opcion);
  agregarACarrito(productoElegido);
};

const verBusos = () => {
  let mensaje = "lista de productos : \n";

  Productos.forEach((el) => {
    if (el.categoria === "busos") {
      mensaje += `${el.id}-${el.tipo} $${el.precio} \n`;
    } // crea la lista de productos recorriendo el array filtrado
  });
  const opcionElegida = parseInt(prompt(mensaje));
  const productoElegido = Productos.find(
    (producto) => {
      producto.id === opcionElegida;
    } //esto muestra las  opciones y recibe un respuesta en numero
  );
  agregarACarrito(productoElegido);
};

const verCamperas = () => {
  let mensaje = "Lista de producto: \n";
  Productos.forEach((el) => {
    if (el.categoria === "camperas") {
      mensaje += `${el.id}-${el.tipo}  $${el.precio} \n`;
    }
  });

  const opcionElegida = parseInt(prompt(mensaje)); // id del objeto a guardar en el carrito

  const productoElegido = Productos.find(
    (producto) => producto.id === opcionElegida
  );
  agregarACarrito(productoElegido);
};

const elegirTalle = () => {
  let talle = prompt("Elija un talle: s, m, l, xl");
  if (
    talle.toLowerCase() == "s" ||
    talle.toLowerCase() == "l" ||
    talle.toLowerCase() == "m" ||
    talle.toLowerCase() == "xl"
  ) {
    const talleElegido = talles.find((el) => el === talle);
    agregarACarrito(talleElegido);
  } else {
    alert("ese talle no esta disponible por el momento");
  }
};

const elegirColor = () => {
  let color = prompt("Elija un color: negro, blanco, gris");
  if (
    color.toLowerCase() == "negro" ||
    color.toLowerCase() == "blanco" ||
    color.toLowerCase() == "gris"
  ) {
    const colorElegido = colores.find((el) => el === color);
    agregarACarrito(colorElegido);
  } else {
    alert("color no disponible por el momento");
  }
};

alert("venta por mayor de ropa!");
let opcion = parseInt(
  prompt(
    "Elige un tipo de prenda: \n 1-remeras \n 2-busos \n 3-camperas \n 4-salir"
  )
);

if (opcion === salir) {
  alert("¡Gracias por usar el sistema!");
} else {
  switch (opcion) {
    case 1:
      verRemeras();
      break;
    case 2:
      verBusos();
      break;
    case 3:
      verCamperas();
      break;

    default:
      opcion = parseInt(
        prompt(
          "Elige un tipo de prenda: \n 1-remeras \n 2-busos \n 3-camperas \n 4-salir"
        )
      );
      alert("Opción inválida");
  }

  alert("producto cargado correctamente ");
}
elegirTalle();
elegirColor();
mostrarCarrito();
