//map,reduce,filter
let testdata = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock:true },
  { id: 102, name: "Mouse" , price: 800  , quantity: 2, inStock:true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock:false},
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock:true }
];
let result=testdata.map(tst => tst.name);
console.log(result);
let result1=testdata.filter(tst =>tst.price>1000)
console.log(result1);
let result3=testdata.reduce((Sum,tst)=>Sum+tst.price,0);
console.log(result3);
let result4=testdata.reduce((Sum,tst)=>Sum+tst.quantity,0);
console.log(result4);
let result5=testdata.filter(tst =>tst.inStock=true);
console.log(result5);