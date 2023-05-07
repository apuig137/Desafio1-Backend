let products = []
class ProductManager{
    constructor(){
        this.products = []
    }

    getProducts = () => {
        console.log(this.products)
    }

    getProductById = (id) => {
        let product = this.products.find(p => p.id === id)
        if(product){
            console.log(`Producto encontrado: ${product.title}, id: ${product.id}.`)
            return product
        } else {
            console.log("Not found")
            return
        }
    }

    addProduct = (title, description, price, thumnail, code, stock) => {

        const product = {
            title,
            description,
            price,
            thumnail,
            code,
            stock
        }

        let incompleteKeys = []
        for (const key in product) {
            if(!product[key]){
                incompleteKeys.push(key)
            }
        }
        if(incompleteKeys.length>0){
            let incompleteKeysJoin = incompleteKeys.join(", ")
            console.log(`Elementos faltantes: ${incompleteKeysJoin}.`)
            return
        }

        const uniqueCode = (product) => product.code
        if(this.products.some(uniqueCode)){
            console.log("Codigo ya registrado, ingrese un codigo que no este cargado.")
            return
        }

        if(this.products.length===0){
            product.id=1
        } else {
            product.id = this.products[this.products.length-1].id+1
        }

        this.products.push(product)
        console.log("Elemento cargado correctamente.")
    }
}

let proteina = new ProductManager
proteina.addProduct("Jamon natural", "Jamon natural embasado al vacio de 150grs", 3500, "url foto", "abc123", 20)
proteina.addProduct("Carton de leche", "url foto", "abc124", 20)
proteina.addProduct("Queso Dambo", "Pedaso de queso Dambo embaso con un peso de 300grs", 3500, "url foto", "abc123", 20)
proteina.getProducts()
proteina.getProductById(1)