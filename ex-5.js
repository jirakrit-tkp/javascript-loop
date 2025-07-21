// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here

for (const key in companyName){
    // console.log(key);
    // console.log(companyName[key]);
    // const conNumber = Number(key);
    const answer = `Number ${Number(key)+1} character is ${companyName[key]}`;

    console.log(answer);
    
}
