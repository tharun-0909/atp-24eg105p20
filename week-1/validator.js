// let data=[1,2,3]
// export default data
// let data=[1,2,3]
// let person={
//     pid:100,
//     name:"ravi"
// }
// let username="bhanu"
// export{data,person,username}
// product.js

// Product database (simulated)
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
Validatetasktitle(notempty, min3chars)
                      function validateTitle(title) {
                    if(!title){
                        return "title required"
                                        }
                                        if(title.length<3) {
                                            return "not valid"
                                        }
                                        return "title sucess"
                    }
function validatePriority(priority){
    let priorities=["low","Medium","high"]
    let result=priorities.include(priority)
    if(result===false){
        return "invalid"
    }
    return true
}
  // 3. Validate due date (must be future date)
function validateDueDate(date){
    let duedate=new duedate('2026-01-20')
    let today=new today()
    if(duedate>today){
        return "invalid date"
    }
    return today()
}

export{validatetasktitle,validatepriority}

                      