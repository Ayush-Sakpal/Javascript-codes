// this -> Represents current context

const user = {
    username: "Aayush",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to the Application`); // Here, this -> refers to current object, i.e, user
        console.log(`Context for user with username ${this.username}\n`, this); // Print the current context
        console.log("\n");
    }
}

user.welcomeMessage();

user.username = "Sakpal";
user.welcomeMessage();

console.log(this); // Refers to empty object

// ############################# Important #############################
/*
    In a browser window: Global object is Window object.
    Thus, "this" in browser console outside any scope refers to the Window object

    In node engine: Global object is Empty Object {}
    Thus, "this" in node outside any scope refers to the Empty object {}
*/

// #####################################################################