"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Melissa Papp
   Date:   May 19, 2020

   Filename: tc_cart.js

*/
//Variables

var orderTotal = 0
var cartHTML = "<table border='1'><tr><th<Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>;

for(var i = 0; i < item.length; i++) {
  itemCost = itemPrice[i] * itemQty [i];
  orderTotal += itemCost;

  cartHTML += " <tr><td><img src='tc_item.png' alt=" + item[i] + "></td><td>" + itemDescription[i] + "</td><td>" + "$"+itemPrice[i] + "</td><td>"+itemQty[i] + "</td><td>" + "$" + itemCost + "</td></tr>";
