let prm = new Promise((resolve,reject)=>{
    function marks(){
        console.log("Evaluating the marks...")
        setTimeout(()=>{
            console.log("Marks evaluated !")
            setTimeout(()=>{
                console.log("Assigning grade")
            resolve();
            },2000)
        },5000)
    }
    marks();
})
prm
.then(()=>{
    console.log("you have passed Sucessfully");
})
.catch(()=>{
    console.log("Unucessful");
})
