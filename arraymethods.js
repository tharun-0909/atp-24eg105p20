let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let result=cart.filter(crt => crt.inStock === true)
console.log(result);
let result1=cart.map(ct =>[ct.name,ct.price])
console.log(result1);
let result3=cart.reduce((Sum,ct)=>Sum+ct.price,0)
console.log(result3);
let result4=cart.reduce((Sum,ct)=>Sum+ct.quantity,0)
console.log(result4);
let result5=cart.find(crt=> crt.name="mouse")
console.log(result5);   
let result6=cart.findIndex(crt=> crt.name="laptop")
console.log(result6); 
