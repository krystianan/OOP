function Phone(brand,price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
};

Phone.prototype.printInfo = function () {
    console.log("Phone's brand is " + this.brand + ", color is " + this.color + " and price is " + this.price +".");

};

var iPhone6 = new Phone ("Apple", 2250, "silver");
var Samsung = new Phone ("Samsung Galaxy S6", 1700, "black");
var One = new Phone ("OnePlus One" , 1400, "white");

iPhone6.printInfo();
Samsung.printInfo();
One.printInfo();