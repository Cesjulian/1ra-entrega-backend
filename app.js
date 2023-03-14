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
        //await fs.promises.mkdir("./files", { recursive: true })

        //ESCRIBO ARCHIVO
        await fs.promises.writeFile(/*"./files/" +*/ this.path, "")

        //LECTURA DEL ARCHIVO
        let resultado = await fs.promises.readFile(/*"./files/" +*/ this.path, "utf-8");
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

        const data = JSON.stringify(objeto);

        await fs.promises.appendFile(this.path, data)
    }

    async getProducts(path) {

        const data = await fs.promises.readFile(path, "utf-8");
        console.log(data)

    }

    async getProductById(path, code) {

        try {
            const data = await fs.promises.readFile(path, 'utf-8');
            const items = Object.values(JSON.parse(data));
            const foundItem = items.code === code;
            console.log(foundItem)

        } catch (err) {
            console.log(err)
        }

    }

    /*
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
productos1.getProducts("objetos.txt"); //PARA OBTENER TODOS LOS OBJETOS
productos1.getProductById("objetos.txt", "123") // PARA BUSCAR POR CODIGO