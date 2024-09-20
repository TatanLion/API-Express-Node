const { faker } =  require('@faker-js/faker');
const boom = require('@hapi/boom')

class ProductService {

    constructor(){
        this.products = [];
        this.generate()
    }

    async generate(){
        const limit = 100;
        for(let i = 0; i < limit; i++){
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: Number(faker.commerce.price()),
                image: faker.image.url(),
                isBlock: faker.datatype.boolean(),
            })
        }
    }

    async create(data){
        const newProduct = {
            id: faker.string.uuid(),
            ...data
        };
        this.products.push(newProduct);
        return newProduct;

    }

    async find(){
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products)
            }, 1000)
        })
    }

    async findOne(id){
        // const getTotal = this.getTotal();
        const product = this.products.find(item => item.id === id);
        if(!product){
            throw boom.notFound('Product Not Found')
        }
        if(product.isBlock){
            throw boom.conflict('Product is block')
        }
        return product
    }

    async update(id, data){
        const indexProduct = this.products.findIndex(item => item.id === id)
        if(indexProduct === -1){
            // throw new Error('Product Not Found')
            throw boom.notFound('Product Not Found')
        }
        // Obtenemos la información actual del objeto 
        const product = this.products[indexProduct]
        // Traemos lo que no se edito y cambiamos lo que se edito
        this.products[indexProduct] = {
            ...product,
            ...data
        }
        return this.products[indexProduct]

    }

    async delete(id){
        const indexProduct = this.products.findIndex(item => item.id === id )
        if(indexProduct === -1){
            throw new Error('Product Not Found')
        }
        this.products.splice(indexProduct, 1)
        return this.products
    }

}

module.exports = ProductService;