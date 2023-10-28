import Producto from "./product.js";

class ProductManager {
  #products;
  constructor() {
    this.#products = [];
  }
  getProducts() {
    return [...this.#products];
  }
  getProductById(id) {
    let index = this.#products.findIndex((p) => p.id === id);
    if (index === -1) {
      console.log("Not found");
      return index;
    } else {
      return this.#products[index];
    }
  }
  addProduct(product) {
    if (
      product instanceof Producto &&
      this.getProductById(product.getCode()) === -1
    ) {
      this.#products.push(product)
    } else {
      console.log("No se pudo agregar el producto a la lista")
    }
  }
}

//TEST DESCOMENTAR control k + u VSC E INICIAR npm run watch en consola.
const pm = new ProductManager();
let p1 = new Producto("Tijera", "Una tijera", 250, "url", 10);
let p2 = new Producto("Papel", "Un papel", 10, "url", 15);
pm.addProduct(p1);
pm.addProduct(p2);
console.log(pm.getProducts())



