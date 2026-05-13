console.log("OTP sending sucessfully");
function otp(){
    console.log("resend OTP");
}
let intervalId=setInterval(otp,2000)
setTimeout(() => {
    clearInterval(intervalId)
},10000);
