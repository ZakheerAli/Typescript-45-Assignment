//Question no 14:Guest List: If you could invite anyone, living or deceased, to
// dinner, who would you invite? Make a list that includes at least three 
//people you’d like to invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.

let Guestlist:string[]=["Billgates","Elon musk","Mark zukerberg"];
for(let i=0; i<Guestlist.length; i++){
    console.log(`Dear Mr.`+Guestlist[i]+`\nIt is our pleasure to invite you in out party.\nThank you!`);
}