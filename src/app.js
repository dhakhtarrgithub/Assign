     // Function to add the product to the cart
      function addToCart(productName, price) {
        // Get the cart data from local storage or initialize an empty array
        var cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the product already exists in the cart
        var existingProduct = cart.find(function (item) {
          return item.productName === productName;
        });

        if (existingProduct) {
         
          existingProduct.quantity++;
        } else {
     
          cart.push({
            productName: productName,
            price: price,
            quantity: 1
          });
        }

        localStorage.setItem("cart", JSON.stringify(cart));


        var message = "Product \"" + productName + "\" was added to the cart";
        document.getElementById("message").innerText = message;
      }


      function emptyCart() {

        localStorage.removeItem("cart");


        document.getElementById("message").innerText = "Cart emptied";
      }
   