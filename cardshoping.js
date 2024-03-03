// Define the Item object
function Item(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Define the ShoppingCart object
  function ShoppingCart() {
    this.cartItems = [];
  
    // Method to add an item to the cart
    this.addItem = function (item) {
      const existingItemIndex = this.cartItems.findIndex(i => i.name === item.name);
  
      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update the quantity
        this.cartItems[existingItemIndex].quantity += item.quantity;
      } else {
        // Otherwise, add the item to the cart
        this.cartItems.push(item);
      }
    };
  
    // Method to remove an item from the cart
    this.removeItem = function (itemName) {
      this.cartItems = this.cartItems.filter(item => item.name !== itemName);
    };
  
    // Method to calculate the total cost of items in the cart
    this.calculateTotal = function () {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  }
  
  // Example usage:
  const cart = new ShoppingCart();
  
  const item1 = new Item('Product A', 20, 2);
  const item2 = new Item('Product B', 15, 3);
  
  cart.addItem(item1);
  cart.addItem(item2);
  
  console.log('Initial Cart:', cart);
  
  cart.removeItem('Product A');
  
  console.log('Cart after removing Product A:', cart);
  
  const totalCost = cart.calculateTotal();
  console.log('Total Cost:', totalCost);