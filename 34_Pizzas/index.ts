//Qusetion no 34:Pizzas: Think of at least three kinds of your favorite pizza.
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing 
//just the name of the pizza. For each pizza you should have one line of output containing a
// simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, 
//that states how much you like pizza. The output should consist of three or more
// lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzas:string[]=[" pepperoni ","chicken fajita","bbq "];
for(let pizza of pizzas){
    console.log(`I like ${pizza} pizza`);
}
console.log(`Pizza is one of the most popular foods in the world for a variety of reasons.
 It is relatively cheap and easy to make, it is versatile, convenient, and can be customized to suit
  different tastes.such as i really love pizza`);