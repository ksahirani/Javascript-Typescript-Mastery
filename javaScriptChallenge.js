const cart = [
    { name: "Weekly Planner", price: 299.99, quantity: 2},
    { name: "Sticky Notes", price: 49.99, quantity: 5},
    { name: "Composition Notebook", price: 89.99, quantity: 3}
];

const itemTotal1 = cart[0].price * cart[0].quantity;
console.log(`${cart[0].name}: ₱${itemTotal1.toFixed(2)}`);
const itemTotal2 = cart[1].price * cart[1].quantity;
console.log(`${cart[1].name}: ₱${itemTotal2.toFixed(2)}`);
const itemTotal3 = cart[2].price * cart[2].quantity;
console.log(`${cart[2].name}: ₱${itemTotal3.toFixed(2)}`);
const totalPrice = itemTotal1 + itemTotal2 + itemTotal3;
console.log(`Total: ₱${totalPrice.toFixed(2)}`);