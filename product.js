class Producto {
  static id = 1;
  constructor(title, description, price, thumbnail, stock) {
    this.code = Producto.id;
    this.title = notNull(title);
    this.description = notNull(description);
    this.price = notNull(price);
    this.thumbnail = notNull(thumbnail);
    this.stock = notNull(stock);
    Producto.id++;
  }
  getCode() {
    return this.code;
  }
  getDescription() {
    return this.description;
  }
  getThumbnail() {
    return this.thumbnail;
  }
    getPrice() {
    return this.price;
  }
    getTitle() {
    return this.title;
  }
  getStock() {
    return this.stock;
  }
}

function notNull(valor) {
  if (valor === null || valor === undefined) {
    throw new Error("El valor no puede ser null");
  } else {
    return valor;
  }
}

export default Producto;
