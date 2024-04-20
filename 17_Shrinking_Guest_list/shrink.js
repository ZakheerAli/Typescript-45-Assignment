"use strict";
//Question no 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive
// in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message
// saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them 
//know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
Object.defineProperty(exports, "__esModule", { value: true });
var Guestlist = ["Billgates", "Elon musk", "Mark zukerberg"];
// for ( let i=0; i<Guestlist.length; i++){
//     console.log(`Dear Mr `+Guestlist[i]+`\nIt is our pleasure to invite you in our party\nThank you!\n\n`);
// }
var absentguest = "billgates";
var newguest = "Imran khan";
Guestlist[0] = newguest;
//for ( let i=0; i<Guestlist.length; i++){
//   console.log(`Dear Mr`+Guestlist[i]+`\nIt is our pleasure to invite you in our party\nThank you!\n\n`);
//}
console.log("Mr ".concat(absentguest, " will not come to the party"));
//phir humne bare table ka message print kya hai
console.log("Good news! we found a big dinner table so we are inviting 3 more guest");
Guestlist.unshift("Nawaz Shareef");
Guestlist.splice(2, 0, "Maryam Nawaz");
Guestlist.push("Shehbaz shareef");
for (var i = 0; i < Guestlist.length; i++) {
    console.log("Dear Mr" + Guestlist[i] + "\nIt is our pleasure to invite you in our party\nThank you!\n\n");
}
console.log("Sorry! we can invite only two people for dinner ");
while (Guestlist.length > 2) {
    var removeguest = Guestlist.pop();
    console.log("Sorry Mr ".concat(removeguest, " you are not invited in dinner"));
}
for (var i = 0; i < Guestlist.length; i++) {
    console.log("Dear Mr" + Guestlist[i] + "\nYou are still invited in dinner\nThank you!\n\n");
}
Guestlist.splice(0, 2);
console.log(Guestlist);
