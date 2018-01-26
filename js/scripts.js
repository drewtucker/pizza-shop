//BUSINESS LOGIC

//PIZZA CONSTRUCTOR
function Pizza(size, toppings){
	this.size = size;
	this.toppings = toppings;
  };

var finalPrice = 0;
var Test = new Pizza("Large", ["Olives", "Cheese", "Shit", "Stuff"]);
console.log(Test.toppings);
console.log(Test.toppings.length);

//PRICE FUNCTION PROTOTYPE
  Pizza.prototype.Price = function(){
  this.toppings.forEach(function(topping){
    finalPrice += 1;
  });
  if(this.size === "Large") {
    finalPrice += 12;
  }
  else if (this.size === "Medium") {
    finalPrice += 10;
  }
  else if (this.size === "Small") {
    finalPrice += 6;
  }
  };

Test.Price();
console.log(finalPrice);


//USER INTERFACE LOGIC
