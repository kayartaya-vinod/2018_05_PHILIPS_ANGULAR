// pre es6 method:

// constructor
function Person (name, city) {
    this.name = name;
    this.city = city;
};

Person.prototype.info = function() {
    return 'Person [name=' + this.name + ', city=' + this.city + ']';
};

var p1 = new Person('Vinod', 'Bangalore');
var p2 = new Person('Shyam', 'Shimoga');

console.log(p1.info());
console.log(p2.info());

// TS

class Product {
    private name: string;
    private price: number;

    constructor(name:string, price:number, private category:string='Phones') {
        this.name = name;
        this.price = price;
    }

    // overriding the Object's toString()
    toString() {
        return `Product [name=${this.name}, price=${this.price}, category=${this.category}]`;
    }
}

var pr1 = new Product('Mobile phone', 12500);
console.log('pr1 is', pr1.toString());
console.log('pr1 is: ' + pr1);

class Television extends Product {
    constructor(name, price, private dimension, private type:string='LED') {
        // mandatory to call super class constructor
        super(name, price, 'Television');
    }

    toString() {
        return `Television [${super.toString()}, dimension=${this.dimension}, type=${this.type}]`;
    }
}
var tv1 = new Television('Sony', 45000, '35 inches');
console.log(tv1);
console.log('tv1 = ' + tv1);