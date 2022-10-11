// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


let reg_mail = "masai123@gmail.com";
let reg_pass = "masai123";

let int_mail = "masai123@gmail.com";
let int_pass = "masai123";

if(reg_mail == int_mail && reg_pass == int_pass){
  console.log("Login Successful")
}
else if(reg_mail !== int_mail && reg_pass == int_pass){
  console.log("Wrong Username!!");
}else if(reg_mail == int_mail && reg_pass !== int_pass){
  console.log("Wrong Password!!")
}else{
  console.log("Please Input Correct Data..")
}