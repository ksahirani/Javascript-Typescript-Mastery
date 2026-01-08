// Practice Exercise 3: Product Object
const product = {
    name: "Planner",
    price: 299.99,
    stocks: 50,
    isAvailable: true,
    categories: ["Weekly", "Monthly", "Yearly"],
}
console.log(`The ${product.name} cost ₱${product.price} and we have ${product.stocks} in stock`);

// Slight changes in price, from string to number
// Best practice price as a number not a string