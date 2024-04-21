//Question no 42:Great Magicians: Start with a copy of your program from Exercise 41. Write a function called
// make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.


let magician:string[]=['herry','charlie','jhon','henry'];
function make_great(magicianarray:string[]){
for(let i=0; i<magicianarray.length; i++){
    magician[i]="The great " +magicianarray[i];
}
}
function show_magicians(magicians:string[]){
for(let ele of magicians){
    console.log(ele);
}
}
make_great(magician);
show_magicians(magician);