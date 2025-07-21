// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
for ( const key in restaurants ){
    const newName = "Restaurant Name: " + restaurants[key];
    newRestaurants.push(newName);
}
console.log(newRestaurants);
