//BUSINESS LOGIC

//PIZZA CONSTRUCTOR
function Pizza(size, toppings){
	this.size = size;
	this.toppings = toppings;
  };

var finalPrice = 0;
var Test = new Pizza("Large", ["Olives", "Cheese", "Shit", "Stuff"]);

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


//USER INTERFACE LOGIC

$(document).ready(function() {

$("#pizzaInput").submit(function(event) {
  event.preventDefault();
  var size = $("input:radio[name=size]:checked").val();
  if(size === "Small"){
    var userPizza = new Pizza("Small", []);
  }
  else if(size === "Medium") {
    var userPizza = new Pizza("Medium", []);
  }
  else if (size === "Large") {
    var userPizza = new Pizza("Large", []);
  }
  else {
    alert("Please select a size.");
  }
  var toppings = $("input:checkbox[name=topping]:checked").each(function() {
    userPizza.toppings.push($(this).val());
		return userPizza;
	});
	userPizza.Price();
	$("#result").text("Total: " + "$" + finalPrice + ".00");
	console.log(finalPrice);
});
});
