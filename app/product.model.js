"use strict";
var Product = (function () {
    /**
     *
     */
    function Product(id, name, category, price) {
        //super();
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
