class Producto {
    constructor (codigo,nombre,precio,cantidad){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.next = null;
    }
    info(){
        return "<p>" +  this.codigo + ": " + this.nombre + "</p>";
    }

}