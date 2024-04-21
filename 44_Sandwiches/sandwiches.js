//Question no 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it 
//should print a summary of the sandwich that is being ordered. Call the function three times, using a 
//different number of arguments each time.
function makesandwich(item) {
    console.log("\nMaking your sandwiches with");
    item.forEach(function (Element) { return console.log(Element); });
    console.log("Enjoy your sandwich!\n");
}
makesandwich(["chicken", "beef", "mutton"]);
makesandwich(["mayo", "peanut butter", "turkish"]);
makesandwich(["garlic ", "club sandwich"]);
