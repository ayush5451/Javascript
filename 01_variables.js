
// Variables and Data Types
// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

// => Never use var in your code instead of let because of block and functional scope issues.
// # console.table([group of variables you want to show in tabular form])

const account_Id=128946
let account_email="ayush@gmail.com"
var account_passoword="123455jfvj"

// account_Id=2 Assignment to constant variable. this is not allowed

account_email="kumar@gmail.com"
account_password="hcbhbc243"
account_city="Bengaluru";

console.log(account_Id);

console.table([account_email, account_password, account_city])
