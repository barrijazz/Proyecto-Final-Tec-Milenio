// No pude terminarlo pero es lo que avancé

let ingresos = {
  Quincena: 9000,
  Venta: 400
};

let egresos = {
  Renta: 900,
  Ropa: 400
};


function sumarCantidad(obj) {
  return Object.values(obj).reduce((total, valor) => total + valor, 0);
}

function formatoMoneda(valor) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(valor);
}

function formatoPorcentaje(valor) {
  return new Intl.NumberFormat('es-MX', { style: 'percent', minimumFractionDigits: 2 }).format(valor);
}

function cargarCabecero() {
  const totalIngresos = sumarCantidad(ingresos);
  const totalEgresos = sumarCantidad(egresos);
  const presupuesto = totalIngresos - totalEgresos;
  const porcentajeEggreso = totalEgresos / totalIngresos;

  console.log("Presupuesto:", formatoMoneda(presupuesto));
  console.log("% de gastos:", formatoPorcentaje(porcentajeEggreso));
  console.log("Ingresos total:", formatoMoneda(totalIngresos));
  console.log("Egresos Total:", formatoMoneda(totalEgresos));
}

cargarCabecero();


class Dato {
  constructor(descripcion, valor) {
    this._descripcion = descripcion;
    this._valor = valor;
  }

  get descripcion() {
    return this._descripcion;
  }

  set descripcion(descripcion) {
    this._descripcion = descripcion;
  }

  get valor() {
    return this._valor;
  }

  set valor(valor) {
    this._valor = valor;
  }
}

class Ingreso extends Dato {
  static contadorIngresos = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._id = ++Ingreso.contadorIngresos;
  }

  get id() {
    return this._id;
  }
}

const ingreso = new Ingreso("Salario", 3000);
console.log(ingreso.descripcion); 
console.log(ingreso.valor); 
console.log(ingreso.id);
