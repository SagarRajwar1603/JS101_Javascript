// Problem 2: If a person is allowed to drive in India print "Apply for a license" or "NA".

let age_limit = 18;
let person_dob = 2006;
let current_year = 2022;

 if((current_year-person_dob)>=age_limit){
   console.log("Apply for a license");
 }else{
   console.log("NA");
 }