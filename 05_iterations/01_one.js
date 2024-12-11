for(let i = 1; i<=50; i++){

    if(i == 49) {
        console.log("Value 7 detected!");
        break;
    }
    else if(i % 7 == 0){
        console.log(`Value ${i} is skipped`);
        continue;
    }

    console.log(`Value of i is ${i}`);
}