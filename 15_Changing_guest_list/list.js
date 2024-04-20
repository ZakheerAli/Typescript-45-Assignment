//Question no 15:Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your 
//program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of 
//the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
// humne ex#14 se start kya hai.
var Guestlist = ["Billgates", "Elon musk", "Mark zukerberg"];
for (var i = 0; i < Guestlist.length; i++) {
    console.log("Dear Mr" + Guestlist[i] + "\nIt is our pleasure to invite you in our party\nThank you!\n\n");
}
//naya guest add kya hai
var absentguest = "billgates";
var newguest = "Imran khan";
Guestlist[0] = newguest;
// is ka baad nayi list print karai hai
for (var i = 0; i < Guestlist.length; i++) {
    console.log("Dear Mr" + Guestlist[i] + "\nIt is our pleasure to invite you in our party\nThank you!\n\n");
}
console.log("Mr ".concat(absentguest, " will not come to the party"));
