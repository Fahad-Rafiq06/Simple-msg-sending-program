//===================== Single Product add to cart functionality

// function addtocart(){
//     var img = document.getElementById("product");
//     var name = document.getElementById("name");
//     var price = document.getElementById("price");
//     var cartimg = document.getElementById("cart-product")    
//     var cartname = document.getElementById("cart-name")    
//     var cartprice = document.getElementById("cart-price")    

//     cartimg.src = img.src
//     cartname.innerHTML = name.innerHTML
//     cartprice.innerHTML = price.innerHTML
// }

//===================== Adding HTML nodes in Javascript

// Created heading using js
var heading = document.createElement("h1");

// created text using js
var text = document.createTextNode("Fahad added via Javascript");

// text child added into heading element
heading.appendChild(text);

// getting div element created in html
var getDiv = document.getElementById("add-elem");

// adding heading value in html div 
getDiv.appendChild(heading)


// ====================== Simple Message sending program

function addmsg(){
    
    var val = document.getElementById("val");
    
    var p = document.createElement("p");
    
    var text = document.createTextNode(val.value);
    
    p.appendChild(text);
    
    var msgs = document.getElementById("messages");
    
    msgs.appendChild(p);

    val.value = "";
    
}
