class Inventario {
  constructor() {
    this.productos = [];
    this.primero = null;
  }
  agregar(producto, posicion) {
    if (posicion != 0) {
      let temp = this.primero;
      let anterior = temp;
      let lugar = 0;
      while (temp != null) {
        lugar += 1;
        if (lugar == posicion) {
          producto.next = anterior.next;
          anterior.next = producto;
        }
        anterior = temp;
        temp = temp.next;
      }
    } else {
      if (this.primero == null) this.primero = producto;
      else {
        let temp = this.primero;
        while (temp.next != null) temp = temp.next;
        temp.next = producto;
      }
    }
  }
  buscar(id) {
    //los cambios
    let temp = this.primero;
    while (temp != null) {
      if (temp.codigo == id) {
        let producto =
          "codigo " +
          temp.codigo +
          " Nombre  " +
          temp.nombre +
          " Precio " +
          temp.precio +
          " cantidad " +
          temp.cantidad +
          "<br>";
        return producto;
      }
      temp = temp.next;
    }
  }
  mostrar() {
    let res = "";
    let temp = this.primero;
    while (temp != null) {
      res +=
        "codigo " +
        temp.codigo +
        " Nombre  " +
        temp.nombre +
        " Precio " +
        temp.precio +
        " cantidad " +
        temp.cantidad +
        "<br>";
      temp = temp.next;
    }
    return res;
  }
  mostrar_inverso() {
    let temp = this.primero;
    let listai = "";
    while (temp != null) {
      listai =
        "codigo " +
        temp.codigo +
        " Nombre  " +
        temp.nombre +
        " Precio " +
        temp.precio +
        " cantidad " +
        temp.cantidad +
        "<br>" +
        listai;
      temp = temp.next;
    }
    return listai;
  }

  eliminar(id) {
    let temp = this.primero;
    let anterior = temp;
    while (temp != null) {
      if (temp.codigo == id) {
        anterior.next = temp.next;
      }
      anterior = temp;
      temp = temp.next;
    }
    //reduce js
    //maps js
  }
  modificar(id, nombre, precio, cantidad) {
    this.posicion = this.buscar(id);
    this.productos[this.posicion].nombre = nombre;
    this.productos[this.posicion].precio = precio;
    this.productos[this.posicion].cantidad = cantidad;
  }
}
