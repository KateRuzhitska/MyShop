
function MyShop (obj){
    this.id = this.setId();
    this.category = obj.category;
    this.style = obj.style;
    this.description = obj.description;
    this.designer = obj.designer;
    this.size = obj.size;
    this.price = obj.price;
    this.quantity = obj.quantity || "Out of stock";

}
MyShop.prototype.setId = function setId(){
    return Math.floor( (Math.random() * 10000) + 1 );
};
MyShop.prototype.makeDiscount = function makeDiscount (){
    if (this.price > 1000){
        this.discount = Math.round( (this.price * (5 / 100)) );
        this.price = this.price - this.discount;
    }
};
MyShop.prototype.displayObj = function displayObj(obj, id){
        var div = document.getElementById(id);
        var childDiv= document.createElement("div");
        var p;
        for(var key in obj) {
            if (typeof obj[key] === "string" || typeof obj[key] === "number"
                || typeof obj[key] === "object"){
                if (key !== "id" && key !== "category" && key !== "price"){
                    p = document.createElement("p");
                    p.innerHTML = key + ": " + obj[key] + "<br>";
                    childDiv.appendChild(p);
                }else if(key === "price"){
                    p = document.createElement("p");
                    p.innerHTML = key + ": " + obj[key] + " €" + "<br>";
                    childDiv.appendChild(p);
                }
            }
        }
        div.appendChild(childDiv);
    };

var bag0001 = new MyShop({
    style: "crossbody bag",
    description: "small crossbody bag Collège Monogram",
    designer: "SAINT LAURENT ",
    size: "one size",
    price: 1660,
    quantity: 5
});
var jeans0001 = new MyShop({
    style: "mom jeans",
    description: "Daisy Street Mom Jeans With Applique Stars",
    designer: "Asos",
    size: [36, 38],
    price: 120,
    quantity: 2
});
var shoes0001 = new MyShop({
    style: "shoes",
    description: "shoes Elyse",
    designer: "STELLA MCCARTNEY ",
    size: [36, 37, 38, 39],
    price: 560,
    quantity: 4
});

bag0001.makeDiscount();
bag0001.displayObj(bag0001, "listing_item_1");
jeans0001.displayObj(jeans0001, "listing_item_2");
shoes0001.displayObj(shoes0001, "listing_item_3");




