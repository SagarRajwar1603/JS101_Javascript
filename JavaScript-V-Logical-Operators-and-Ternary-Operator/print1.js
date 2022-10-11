// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let age = 2000;
let current_year = 2022

let age_limit = current_year-age;

age_limit>=13 && age_limit<=19 ? console.log("Teenage") : age_limit>=20 && age_limit<=29 ? console.log("Twenties") : console.log("NA");
 



