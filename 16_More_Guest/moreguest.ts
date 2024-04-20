//Question no 16: More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to 
//the end of your list. • Print a new set of invitation messages, one for each person in your list.

//humne ex#15 se start ky hain
let Guestlist:string[]=["Billgates","Elon musk","Mark zukerberg"];
for ( let i=0; i<Guestlist.length; i++){
    console.log(`Dear Mr `+Guestlist[i]+`\nIt is our pleasure to invite you in our party\nThank you!\n\n`);

}
let absentguest:string="billgates";
let newguest:string="Imran khan";
Guestlist[0]=newguest;

for ( let i=0; i<Guestlist.length; i++){
    console.log(`Dear Mr`+Guestlist[i]+`\nIt is our pleasure to invite you in our party\nThank you!\n\n`);

}
console.log(`Mr ${absentguest} will not come to the party`);
//phir humne bare table ka message print kya hai
console.log("Good news! we found a big dinner table so we are inviting 3 more guest");
Guestlist.unshift("Nawaz Shareef");
Guestlist.splice(2,0,"Maryam Nawaz");
Guestlist.push("Shehbaz shareef");
for (let i=0; i<Guestlist.length; i++){
    console.log(`Dear Mr`+Guestlist[i]+`\nIt is our pleasure to invite you in our party\nThank you!\n\n`);
}