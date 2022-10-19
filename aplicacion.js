class Lista {
  constructor() {
    this.primero = null;
  }
  agregar(nuevo) {
    if (this.primero == null) this.primero = nuevo;
    else {
      let temp = this.primero;
      while (temp.next != null) temp = temp.next;
      temp.next = nuevo;
    }
  }
  listar() {
    let res = "";
    let temp = this.primero;
    while (temp != null) {
      res += temp.numero + "  ";
      temp = temp.next;
    }
    return res;
  }

  extraerPrimero() {
    if (this.primero == null) {
      return null;
    }
    let aux = this.primero;
    this.primero = null;
    this.primero = aux.next;
    return aux;
  }

  extraerUltimo() {
    if (this.primero == null) {
      return null;
    }

    let aux = this.primero;
    let aux2 = {};
    if (this.primero.next == null) {
      this.primero = null;
      return aux;
    }

    while (aux != null) {
      if (aux.next.next == null) {
        aux2 = aux.next;
        aux.next = null;
        return aux2;
      }
      aux = aux.next;
    }
  }
  agregarInicio(nuevo) {
    nuevo.next = this.primero;
    this.primero = nuevo;
  }
  listarInverso() {
    let lista = this.primero;
    let listai = "";
    while (lista != null) {
      listai = lista.numero + " " + listai;
      lista = lista.next;
    }
    return listai;
  }
}
