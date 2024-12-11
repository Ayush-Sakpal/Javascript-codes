/*
    Falsy Values:

    1. false
    2. 0
    3. -0
    4. ""
    5. BigInt 0n
    6. null
    7. undefined
    8. NaN

    Remaining all are truthy values
*/

/*
    Some of the truthy values:

    1. "0"
    2. "false"
    3. " " -> String containing a space
    4. [] -> empty array
    5. {} -> empty object
    6. function() {} -> empty function
*/

// Null Coalescing Operator (??) : safety check for null, undefined
const val1 = 5 ?? 10;
const val2 = null ?? 30;
const val3 = undefined ?? 40;
const val4 = null ?? 50 ?? 60;

console.log("Val 1 =", val1);
console.log("Val 2 =", val2);
console.log("Val 3 =", val3);
console.log("Val 4 =", val4);