import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {id : 1, name: "Mobile", price: 300000},
        {id : 2, name: "Laptop", price: 1000000},
        {id : 3, name: "Computer", price: 20000000},
    ];

    getAllProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return this.products.find((prodcut) => product.id === id)
    }
}
