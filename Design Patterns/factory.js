class Product {
    use() { console.log("Using a product"); }
}

class ProductA extends Product {
    use() { console.log("Using Product A"); }
}

class ProductB extends Product {
    use() { console.log("Using Product B"); }
}

class ProductFactory {
    static createProduct(type) {
        switch (type) {
            case "A": return new ProductA();
            case "B": return new ProductB();
            default: throw new Error("Invalid type");
        }
    }
}

// Gebruik
const product = ProductFactory.createProduct("A");
product.use();
