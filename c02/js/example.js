//Create variables for the welcome message
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';
//concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

//Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting
var el = document.getElementByID('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

//Get the element that has an id of tiles then updates its contents
var elSign = document.getElementByID('userSign');
elSign.textContent = sign;

//get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementByID('subTotal');
elSubTotal.textContent = '$' + subTotal;

//get the element that has an id of shipping then update its contents
var elSubTotal = document.getElementByID('shipping');
elSubTotal.textContent = '$' + shipping;

//get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementByID('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;