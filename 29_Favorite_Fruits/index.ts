// //Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
//independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas.

let favoriteFruits:string[]=["apple","orange","mango"];

if(favoriteFruits.includes("apple")){
    console.log("you really like apples");
}
if(favoriteFruits.includes("orange")){
    console.log("you really like oranges");
}
if(favoriteFruits.includes("mango")){
    console.log("you really like mango");
}
if(favoriteFruits.includes("pine apple")){
    console.log("you really like pine apple");
}
if(favoriteFruits.includes("banana")){
    console.log("you really like banana");
}