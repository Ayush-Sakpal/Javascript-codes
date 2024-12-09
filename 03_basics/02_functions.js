// When number of parameters are not known in prior, we user rest-operator "..." that
// bundles all the values into a single array. It is the opposite of spread operator "..."
// We can then loop through the array to add all the elements of the array
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 300, 500));

// Handling objects
const user1 = {
    user_name: "Aayush",
    price: 200
};

const user2 = {
    user_name: "Sakpal",
    price: 300
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.user_name} and price is ${anyObject.price}`);
}

handleObject(user1);
handleObject(user2);
handleObject({
    user_name: "Aayush Sakpal",
    price: 500
});

const myNewArray = [200, 400, 800, 400, 700];

function returnSecondElement(getArray) {
    return getArray[1];
}

console.log(returnSecondElement(myNewArray));
console.log(returnSecondElement([200, 700, 500, 600]));