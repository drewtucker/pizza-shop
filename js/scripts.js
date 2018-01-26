function Pizza(size, toppings){
	this.size = size;
	this.toppings = toppings;
  };

var finalPrice = 0;
var Test = new Pizza("Large", ["Olives", "Cheese", "Shit", "Stuff"]);
console.log(Test.toppings);
console.log(Test.toppings.length);

  Pizza.prototype.Price = function(){
  this.toppings.forEach(function(topping){
    finalPrice += 1;
  });
  };

Test.Price();
console.log(finalPrice);
