const { faker } =  require('@faker-js/faker');

class CategoriasService{

    constructor(){
        this.categories = [];
        this.generate();
    }

    // Generar datos quemados
    generate(){
        const limit = 100;
        for(let i = 0; i < limit; i++){
            this.categories.push({
                id: faker.string.uuid(),
                categorie: faker.commerce.productMaterial(),
                name: faker.commerce.productName()
            })
        }
    }

    create(data){
        // Creamos un obetjo con la info y le pasamos el id
        const newCategorie = {
            id: faker.string.uuid(),
            ...data
        }
        this.categories.push(newCategorie); // Agregarlo a la instancia
        return newCategorie; // Retornarlo para mostrarlo
    }

    find(){
        return this.categories
    }

    findOne(id){
        if(id){
            throw new Error('Elemnt not Foiund')
        }
        return this.categories.find(item => item.id === id)
    }

    update(id, data){
        // Encontramos el index donde esta el elemento en el array
        const categorieIndex = this.categories.findIndex(item => item.id === id)
        if(categorieIndex === -1){  // Si no lo encuentra generamos el error
            throw new Error('Elemnt not Foiund')
        }
        // Obtenemos la información de ese elemento
        const categorie = this.categories[categorieIndex]
        // Insertamos la info que solo cambio y copiamos lo demás 
        this.categories[categorieIndex] = {
            ...categorie,
            ...data
        }
        return this.categories[categorieIndex]
    }

    delete(id){
        const categorieEliminate = this.categories.findIndex(item => item.id === id);
        this.categories.splice(categorieEliminate, 1)
        return id
    }

}

module.exports = CategoriasService;