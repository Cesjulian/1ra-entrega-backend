/*class ProductManager {

    constructor(products) {
        this.products = [];
    }

    addProducts(title, description, price, thumbnail, code, stock) {

        const objeto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        const existeProducto = this.products.some(product => product.code === objeto.code);

        if (existeProducto) {
            console.log(`Ya existe un producto con el código ${objeto.code}`);
        } else {
            this.products.push(objeto);
        }
    }

    getProducts() {
        console.log(productos1)
    }

    getProductByCode(id) {

        const existeId = this.products.find(product => product.code === id);

        if (existeId) {
            console.log(existeId)
        } else {
            console.log(`not found, no existe ningun objeto con el id ${id}`)
        }

    }
}

//NUEVA INSTANCIA
const productos1 = new ProductManager()

//METODO ADDPRODUCTS
productos1.addProducts("toyota", "toyota corolla, 4 puertas, año 2022", "5000 usd", "https://media.toyota.com.ar/bad046b3-53d6-4b63-bcb9-1fc05aed02cf.png", "123", "10")
productos1.addProducts("renault", "renault megane, 4 puertas, año 2021", "4000 usd", "https://autotest.com.ar/wp-content/uploads/2021/07/RENAULT-MEGANE-E-TECH.jpg", "234", "15")

// METODO GETPRODUCTS
productos1.getProducts();

// METODO GETBYCODE
productos1.getProductByCode("000") // EJEMPLO MALO
productos1.getProductByCode("123") //EJEMPLO BUENO
*/



