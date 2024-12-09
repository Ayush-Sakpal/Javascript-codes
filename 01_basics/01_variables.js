// Semi-colons are NOT necessary in js.

const account_id = 145874;

let account_email = "aayush@google.com";

/*
    prefer NOT using "var".
    instead use "let"

    This is because of block scope and functional scope issues in var.
*/

var account_password = "173199";

account_city = "Pune";

let account_state;

console.log(account_id);

console.table([account_id, account_email, account_password, account_city, account_state]);