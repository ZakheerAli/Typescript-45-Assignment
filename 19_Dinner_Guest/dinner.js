//Question no 19: Dinner Guests: Working with one of the programs from Exercises 14 
//through 18, print a message indicating the number of people you are inviting to dinner.
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
// console.log(`Mr ${absentguest} will not come to the party`);
//phir humne bare table ka message print kya hai
// console.log("Good news! we found a big dinner table so we are inviting 3 more guest");
Guestlist.unshift("Nawaz Shareef");
Guestlist.splice(2, 0, "Maryam Nawaz");
Guestlist.push("Shehbaz shareef");
// mene 6 guest k array ko print kardya 
//for (let i=0; i<Guestlist.length; i++){
//  console.log(`Dear Mr`+Guestlist[i]+`\nIt is our pleasure to invite you in our party\nThank you!\n\n`);
//}
// console.log("Sorry! we can invite only two people for dinner ");
//humne yaha per guest remove kardyef
while (Guestlist.length > 2) {
    var removeguest = Guestlist.pop();
    //sorry message jo invited nahi hain
    // console.log(`Sorry Mr ${removeguest} you are not invited in dinner`);
}
//humne bache howe 2  invited guest ko print karwadya
// for ( let i=0; i<Guestlist.length; i++){
//  console.log(`Dear Mr`+Guestlist[i]+`\nYou are still invited in dinner\nThank you!\n\n`);
// }
//humne sare guest array se remove kardye
Guestlist.splice(0, 2);
console.log(Guestlist);
//QUESTION NO 19:
console.log("The total number of guest are " + Guestlist.length);
