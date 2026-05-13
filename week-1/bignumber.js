let a=function(a,b,c){
    if(a>b && a>c){
        console.log("A is big");
    }
    else if(b>c && b>a){
        console.log("B is big");
    }
    else{
        console.log('C is big');
    }
}
let result=a(1,2,3)
console.log(result)