let fs;
try {
    fs = require('fs');
} catch (e) {
    console.error('Error al importar el módulo fs', e);
}

if (fs) {
    console.log('El módulo fs se ha importado correctamente');
}


class ProductManager {

    constructor(path) {

        this.path = path;

    }

    async read() {
        //CREO DIRECTORIO
        await fs.promises.mkdir("./files", { recursive: true })

        //ESCRIBO ARCHIVO
        await fs.promises.writeFile("./files/" + this.path, "ARCHIVO CREADO")

        //LECTURA DEL ARCHIVO
        let resultado = await fs.promises.readFile("./files/" + this.path, "utf-8");
        console.log(resultado)
    }


    async addProduct(title, description, price, thumbnail, code, stock) {

        const objeto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        await fs.promises.appendFile(this.path, "objeto")
    }
    /*
    async getProducts() {

    }

    async getProductById() {

    }

    async updateProduct() {

    }

    async deleteProduct() {

    }
    */
}

//INSTANCIO LA CLASE CONSTRUCTORA Y DEFINO EL PATH
const productos1 = new ProductManager("objetos.txt")

//CREO EL DIRECTORIO, ARCHIVO TXT Y LECTURA DEL MISMO
productos1.read();
productos1.addProduct("toyota", "toyota corolla, 4 puertas, año 2022", "5000 usd", "https://media.toyota.com.ar/bad046b3-53d6-4b63-bcb9-1fc05aed02cf.png", "123", "10")
